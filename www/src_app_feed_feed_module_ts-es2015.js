"use strict";
(self["webpackChunkfirechat"] = self["webpackChunkfirechat"] || []).push([["src_app_feed_feed_module_ts"],{

/***/ 30780:
/*!****************************************************************!*\
  !*** ./src/app/components/emoji-picker/emoji-picker.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiPickerComponentModule": function() { return /* binding */ EmojiPickerComponentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _emoji_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji-picker.component */ 51064);





let EmojiPickerComponentModule = class EmojiPickerComponentModule {
};
EmojiPickerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _emoji_picker_component__WEBPACK_IMPORTED_MODULE_0__.EmojiPickerComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: [
            _emoji_picker_component__WEBPACK_IMPORTED_MODULE_0__.EmojiPickerComponent
        ]
    })
], EmojiPickerComponentModule);



/***/ }),

/***/ 5628:
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedPageModule": function() { return /* binding */ FeedPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/share.module */ 32218);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 45642);
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed.page */ 57713);
/* harmony import */ var _components_emoji_picker_emoji_picker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/emoji-picker/emoji-picker.module */ 30780);










const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_2__.FeedPage
    }
];
let FeedPageModule = class FeedPageModule {
};
FeedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _services_share_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _components_emoji_picker_emoji_picker_module__WEBPACK_IMPORTED_MODULE_3__.EmojiPickerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_2__.FeedPage]
    })
], FeedPageModule);



/***/ }),

/***/ 57713:
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedPage": function() { return /* binding */ FeedPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_feed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./feed.page.html */ 89605);
/* harmony import */ var _feed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.page.scss */ 67013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 91558);
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.component */ 32346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reaction-list-modal/reaction-list-modal.page */ 62744);
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ 68897);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ 77199);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/auth */ 77258);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ 33527);
/* harmony import */ var _components_emoji_picker_emoji_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/emoji-picker/emoji-picker.component */ 51064);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/bookmark.service */ 95740);























let FeedPage = class FeedPage {
    constructor(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, routerOutlet, loadingProvider, actionSheet, route, router, afAuth, localNotifications, fcm, plt, popoverCtrl, bookmarkService) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.firestore = firestore;
        this.alertCtrl = alertCtrl;
        this.routerOutlet = routerOutlet;
        this.loadingProvider = loadingProvider;
        this.actionSheet = actionSheet;
        this.route = route;
        this.router = router;
        this.afAuth = afAuth;
        this.localNotifications = localNotifications;
        this.fcm = fcm;
        this.plt = plt;
        this.popoverCtrl = popoverCtrl;
        this.bookmarkService = bookmarkService;
        this.searchQuery = '';
        this.isSearchActive = false;
        this.isSearchFocused = false;
        this.recentSearches = [];
        this.trendingSearches = [];
        this.searchResults = [];
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.bookmarks = [];
        this.isFilterActive = false;
        this.unreadCount = 0;
        this.userReactions = [];
        this.userNotifications = [];
        this.loggedInUser = null;
        this.pushes = [];
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
        this.plt.ready()
            .then(() => {
            console.log('platform ready in Feed page');
            this.fcm.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
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
        this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(searchTerm => {
            this.performSearch(searchTerm);
        });
        // Subscribe to bookmark changes
        this.bookmarkService.userBookmarks$.subscribe(bookmarks => {
            this.userBookmarks = bookmarks;
            // Update isBookmarked for all posts
            this.posts = this.posts.map(post => (Object.assign(Object.assign({}, post), { isBookmarked: this.bookmarkService.isBookmarked(post.key, bookmarks) })));
        });
    }
    ionViewDidEnter() {
        this.isSearchActive = false;
    }
    ionViewWillEnter() {
        console.log('Entering feed view');
        this.isSearchActive = false;
        console.info('issearchactive', this.isSearchActive);
        this.afAuth.currentUser.then(user => {
            this.loggedInUserId = user === null || user === void 0 ? void 0 : user.uid;
            console.log('Current user:', this.loggedInUserId);
            // Get Posts with snapshot changes to get real-time updates
            this.dataProvider.getCurrentUser().then((u) => {
                u.get({ source: 'server' }).subscribe((user) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.loadingProvider.show();
                if (!searchTerm) {
                    this.firstDataSet = this.firestore.collection('posts').ref
                        .where('groupId', 'in', this.loggedInUser.groups)
                        .orderBy('date', 'desc')
                        .limit(5);
                    this.firstDataSet.get().then((po) => {
                        this.lastDataSet = po.docs[po.docs.length - 1];
                        this.posts = [];
                        this.loadEachPostData(po);
                    });
                }
                else {
                    // Split search term into keywords
                    const searchTerms = searchTerm.toLowerCase()
                        .split(' ')
                        .filter(term => term.length > 0)
                        .map(term => term.trim());
                    console.info('GOT searchTerms:', searchTerms);
                    // Search using array-contains-any
                    this.firstDataSet = this.firestore.collection('posts').ref
                        // .where('groupId', 'in', this.loggedInUser.groups)
                        .where('searchKeywords', 'array-contains-any', searchTerms)
                        .orderBy('date', 'desc')
                        .limit(20);
                    this.firstDataSet.get().then((po) => {
                        this.lastDataSet = po.docs[po.docs.length - 1];
                        this.posts = [];
                        this.loadEachPostData(po);
                    });
                }
                this.isSearchActive = false;
                this.loadingProvider.hide();
            }
            catch (error) {
                console.error('Error fetching feed data:', error);
                this.isSearchActive = false;
                this.loadingProvider.hide();
            }
        });
    }
    addOrUpdatePost(post) {
        if (!this.posts) {
            this.posts = [post];
        }
        else {
            let index = -1;
            for (let i = 0; i < this.posts.length; i++) {
                if (this.posts[i].key == post.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.posts[index] = post;
            }
            else {
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
        }
        else if (post.reactionType !== reactionType) {
            console.info('2');
            this.removePostReaction(post, post.reactionType);
            this.addPostReaction(post, reactionType);
        }
        else if (post.reactionType === reactionType) {
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
        }
        else {
            this.firestore.collection('posts').doc(post.key).collection('reactions').doc(r.key).update({
                reactionType: firebase_app__WEBPACK_IMPORTED_MODULE_8__.default.firestore.FieldValue.arrayUnion(reactionType)
            }).then(() => {
                const increment = firebase_app__WEBPACK_IMPORTED_MODULE_8__.default.firestore.FieldValue.increment(1);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (post.totalReactionCount === 0) {
                return;
            }
            // first find the post in the collection
            const postIndex = this.posts.findIndex(el => el.key === post.key);
            const p = this.posts[postIndex];
            const modal = yield this.modalCtrl.create({
                component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_6__.ReactionListModalPage,
                componentProps: {
                    reactions: p.reactions
                }
            });
            return yield modal.present();
        });
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
        }
        else {
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
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'alert-button-cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    cssClass: 'alert-button-delete',
                    handler: data => {
                        this.firestore.doc('posts/' + post.key).delete();
                    }
                }
            ]
        }).then(r => r.present());
    }
    createPostOptionButtons(post) {
        var _a;
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
            const isNotificationsEnabled = (_a = this.userNotifications) === null || _a === void 0 ? void 0 : _a.some(el => el === post.key);
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
        }
        else {
            if (this.lastDataSet) {
                this.nextDataSet = this.firestore.collection('posts').ref
                    .where('groupId', 'in', this.loggedInUser.groups)
                    .orderBy('date', 'desc')
                    .startAfter(this.lastDataSet).limit(5);
                this.nextDataSet.onSnapshot((po) => {
                    this.lastDataSet = po.docs[po.docs.length - 1];
                    console.log('po.docs.length', po.docs.length);
                    if (po.docs.length > 0) {
                        this.loadEachPostData(po);
                    }
                    event.target.complete();
                });
            }
            else {
                event.target.complete();
            }
        }
    }
    loadEachPostData(po) {
        po.forEach(p => {
            var _a;
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
                }
                else {
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
                    return Object.assign(Object.assign({}, option), { votes: votes });
                });
            }
            // get reactions list
            this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions) => {
                var _a;
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
                        reactionType = ((_a = post.reactions.find(el => { var _a; return ((_a = el.addedByUser) === null || _a === void 0 ? void 0 : _a.addedByKey) === this.loggedInUserId; })) === null || _a === void 0 ? void 0 : _a.reactionType) || '';
                    }
                    if (reactionType !== '') {
                        post.reactionType = reactionType;
                    }
                    else {
                        post.reactionType = '';
                    }
                }
                else {
                    post.reactionType = '';
                }
            });
            post.isBookmarked = ((_a = this.userBookmarks) === null || _a === void 0 ? void 0 : _a.includes(p.id)) || false;
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
            return string.length > length
                ? string.substring(0, length) + "..."
                : string;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            event.stopPropagation();
            const popover = yield this.popoverCtrl.create({
                component: _components_emoji_picker_emoji_picker_component__WEBPACK_IMPORTED_MODULE_11__.EmojiPickerComponent,
                componentProps: {
                    post: item,
                    postType: item.type
                },
                event: event,
                translucent: true,
                cssClass: 'emoji-picker-popover'
            });
            yield popover.present();
            const { data } = yield popover.onDidDismiss();
            if (data) {
                console.log('emoji selected', data);
                this.submitReactionPost(data.post, data.emoji.value);
            }
        });
    }
    activateSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.isSearchActive = true;
            // Load searches when search is activated
            yield this.loadRecentSearches();
            yield this.loadTrendingSearches();
            setTimeout(() => {
                var _a;
                (_a = this.searchbar) === null || _a === void 0 ? void 0 : _a.setFocus();
            }, 150);
        });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingProvider.show();
            this.searchQuery = term || this.searchQuery;
            if (this.searchQuery.trim()) {
                // Store the search query
                yield this.saveRecentSearch(this.searchQuery.trim());
                // Your existing search logic
                this.getFeedData(null, this.searchQuery);
            }
            this.loadingProvider.hide();
        });
    }
    saveRecentSearch(term) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const userId = this.loggedInUser.userId;
            const searchTerm = term.trim().toLowerCase(); // Normalize the search term
            // Check if this search term already exists for this user
            const existingSearchQuery = this.firestore
                .collection('userSearches')
                .doc(userId)
                .collection('searches', ref => ref.where('term', '==', searchTerm).limit(1));
            const existingSearches = yield existingSearchQuery.get().toPromise();
            if (existingSearches.empty) {
                // Only add if the search term doesn't exist
                yield this.firestore
                    .collection('userSearches')
                    .doc(userId)
                    .collection('searches')
                    .add({
                    term: searchTerm,
                    timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_8__.default.firestore.FieldValue.serverTimestamp()
                });
                // Update trending searches count
                const trendingRef = this.firestore.collection('trendingSearches').doc(searchTerm);
                yield trendingRef.set({
                    term: searchTerm,
                    count: firebase_app__WEBPACK_IMPORTED_MODULE_8__.default.firestore.FieldValue.increment(1)
                }, { merge: true });
            }
            else {
                // Update timestamp of existing search
                const existingDoc = existingSearches.docs[0];
                yield existingDoc.ref.update({
                    timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_8__.default.firestore.FieldValue.serverTimestamp()
                });
            }
        });
    }
    loadRecentSearches() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const user = this.loggedInUser;
            if (user) {
                this.firestore
                    .collection('userSearches')
                    .doc(user.userId)
                    .collection('searches', ref => ref.orderBy('timestamp', 'desc').limit(10))
                    .snapshotChanges()
                    .subscribe(actions => {
                    this.recentSearches = actions.map(a => ({
                        id: a.payload.doc.id,
                        term: a.payload.doc.data().term,
                        timestamp: a.payload.doc.data().timestamp
                    }));
                });
            }
        });
    }
    onSearchInput(event) {
        this.searchSubject.next(event.target.value);
    }
    loadTrendingSearches() {
        this.firestore
            .collection('trendingSearches', ref => ref.orderBy('count', 'desc').limit(5))
            .snapshotChanges()
            .subscribe(actions => {
            this.trendingSearches = actions.map(a => (Object.assign({ id: a.payload.doc.id }, a.payload.doc.data())));
        });
    }
    removeRecentSearch(searchId) {
        const userId = this.loggedInUser.userId;
        return this.firestore
            .collection('userSearches')
            .doc(userId)
            .collection('searches')
            .doc(searchId)
            .delete();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _filter_component__WEBPACK_IMPORTED_MODULE_5__.FilterComponent,
                event: ev,
                translucent: true,
                cssClass: 'filter-popover',
                backdropDismiss: true,
                keyboardClose: true,
                mode: 'md' // Using material design mode for better accessibility
            });
            // Handle keyboard events for accessibility
            const handleKeydown = (e) => {
                if (e.key === 'Escape') {
                    popover.dismiss();
                }
            };
            document.addEventListener('keydown', handleKeydown);
            yield popover.present();
            const { data } = yield popover.onWillDismiss();
            // Clean up event listener
            document.removeEventListener('keydown', handleKeydown);
            if (data) {
                this.isFilterActive = data.type !== 'all' || (data.groups && data.groups.length > 0);
                this.applyFilters(data);
                console.info('filter data', data);
            }
        });
    }
    applyFilters(filters) {
        console.log('Applying filters:', filters);
        // Implement your filter logic here
    }
    calculatePercentage(votes, total) {
        if (!total || total === 0)
            return 0;
        return Math.round((votes / total) * 100);
    }
    getPollColor(index) {
        const colors = [
            '#4CAF50',
            '#2196F3',
            '#FF9800',
            '#E91E63',
            '#9C27B0',
            '#00BCD4' // cyan
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const userId = this.loggedInUserId;
            post.isBookmarked = yield this.bookmarkService.toggleBookmark(post, userId, this.userBookmarks);
        });
    }
};
FeedPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRouterOutlet },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuth },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__.FCM },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.PopoverController },
    { type: _services_bookmark_service__WEBPACK_IMPORTED_MODULE_12__.BookmarkService }
];
FeedPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonInfiniteScroll, { static: true },] }],
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['searchbar',] }]
};
FeedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-feed',
        template: _Users_rohitsethi_Documents_firechat4_v2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_feed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__.AngularFirestore,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRouterOutlet,
        _services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ActionSheetController,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router,
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuth,
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__.LocalNotifications,
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__.FCM,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.PopoverController,
        _services_bookmark_service__WEBPACK_IMPORTED_MODULE_12__.BookmarkService])
], FeedPage);



/***/ }),

/***/ 89605:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/feed/feed.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- feed.page.html -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar *ngIf=\"isSearchActive\">\n    <!-- Search Mode -->\n    <div class=\"search-header\">\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"1\" class=\"back-button-col\">\n          <ion-button fill=\"clear\" (click)=\"deactivateSearch()\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"11\" class=\"searchbar-col\">\n          <ion-searchbar\n            #searchbar\n            [(ngModel)]=\"searchQuery\"\n            placeholder=\"Search posts...\"\n            [showCancelButton]=\"'never'\"\n            (search)=\"performSearch()\"\n            class=\"custom-searchbar\">\n          </ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </div>\n    </ion-toolbar>\n    <!-- Regular Mode -->\n    <ion-toolbar *ngIf=\"!isSearchActive\">\n    <div *ngIf=\"!isSearchActive\" class=\"regular-header\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"12\">\n          <div class=\"search-container\">\n            <div class=\"search-box\" (click)=\"activateSearch()\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n              <ion-input\n                readonly\n                placeholder=\"Search posts...\"\n                [(ngModel)]=\"searchQuery\">\n              </ion-input>\n            </div>\n\n            <div class=\"action-buttons\">\n              <ion-button fill=\"clear\" class=\"action-btn\" routerLink=\"/messages\">\n                <ion-icon name=\"notifications-outline\"></ion-icon>\n                <ion-badge *ngIf=\"unreadCount > 0\">{{unreadCount}}</ion-badge>\n              </ion-button>\n\n              <ion-button fill=\"clear\" class=\"action-btn\" (click)=\"showGroupOptions()\">\n                <ion-icon name=\"add-circle\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    <!-- Search Suggestions/History (when searching but no query entered) -->\n  <div class=\"search-content\" *ngIf=\"isSearchActive && !searchQuery\">\n    <!-- Recent Searches Section -->\n    <div class=\"search-section\" *ngIf=\"recentSearches.length > 0\">\n      <div class=\"section-header\">\n        <h2>Recent Searches</h2>\n        <!-- <ion-button fill=\"clear\" class=\"clear-all\" size=\"small\">\n          Clear All\n        </ion-button> -->\n      </div>\n      <div class=\"search-items\">\n        <div class=\"search-item\" *ngFor=\"let search of recentSearches\">\n          <div class=\"search-term\" (click)=\"performSearch(search.term)\">\n            <ion-icon name=\"time-outline\" class=\"history-icon\"></ion-icon>\n            <span>{{ search.term }}</span>\n          </div>\n          <ion-button fill=\"clear\" (click)=\"removeRecentSearch(search.id)\" class=\"delete-btn\">\n            <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Trending Searches Section -->\n    <div class=\"search-section\">\n      <div class=\"section-header\">\n        <h2>Trending Searches</h2>\n      </div>\n      <div class=\"trending-items\">\n        <div class=\"trending-item\" *ngFor=\"let trend of trendingSearches; let i = index\">\n          <div class=\"trend-content\" (click)=\"performSearch(trend.term)\">\n            <div class=\"trend-rank\">{{ i + 1 }}</div>\n            <div class=\"trend-info\">\n              <span class=\"trend-term\">{{ trend.term }}</span>\n              <span class=\"trend-count\">{{ trend.count }} searches</span>\n            </div>\n            <ion-icon name=\"trending-up-outline\" class=\"trend-icon\"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Search Results (when there's a search query) -->\n  <div class=\"search-results-container\" *ngIf=\"isSearchActive && searchQuery\">\n    <!-- Search Results Header -->\n    <div class=\"search-results-header\">\n      <div class=\"results-info\">\n        <h2>Results for \"{{ searchQuery }}\"</h2>\n        <p>{{ posts.length }} results found</p>\n      </div>\n      <ion-button fill=\"clear\" (click)=\"clearSearch()\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n        Clear\n      </ion-button>\n    </div>\n     <!-- Search Results List -->\n     <div class=\"feed-items\">\n      <!-- Use your existing feed item component/template -->\n      <div class=\"listing-item\" *ngFor=\"let item of searchResults\">\n        <!-- Your existing feed item content -->\n      </div>\n    </div>\n\n    <!-- No Results State -->\n    <div class=\"no-results\" *ngIf=\"posts.length === 0\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <h3>No results found</h3>\n      <p>Try different keywords or check spelling</p>\n    </div>\n  </div>\n\n  <!-- Regular Feed (when not searching) -->\n  <div class=\"feed-container\" *ngIf=\"!isSearchActive\">\n    <!-- Your existing feed content -->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n  \n       <!-- Show Posts -->\n       <div *ngIf=\"posts && posts.length > 0\" >\n       <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n        <ion-card *ngIf=\"item.type === 'general'\">\n          <div class=\"post-header\">\n            <div class=\"user-info\">\n              <ion-avatar class=\"user-avatar\">\n                <img [src]=\"item.avatar\" \n                     [alt]=\"item.addedByUser.addedByUsername\"\n                     (error)=\"$event.target.src='./assets/images/default-dp.png'\">\n              </ion-avatar>\n              <div class=\"user-details\">\n                <div class=\"name-row\">\n                  <a (click)=\"viewUser(item.addedByUser.addedByKey)\" class=\"username\">\n                    {{item.addedByUser.addedByUsername}}\n                  </a>\n                </div>\n                <div class=\"post-meta\">\n                  <span class=\"post-time\">{{item.date.toDate() | DateFormat}}</span>\n                  •\n                  <a class=\"group-name\">\n                    {{item.groupName}}\n                  </a>\n                </div>\n              </div>\n            </div>\n            \n            <ion-button fill=\"clear\" (click)=\"showPostOptions(item)\" class=\"options-button\">\n              <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n            </ion-button>\n          </div>\n          <ion-card-content class=\"message\" >\n            <div>\n              <div>\n                <video *ngIf=\"item.postMediaVideo\" controls preload=\"auto\" height=200px width=\"100%\" src=\"https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/videos%2Fcdv_photo_1604937924.MOV?alt=media&token=a757e495-8dc8-4540-84c9-33c7a6d50c9e\" ></video>\n                <ion-slides *ngIf=\"item.postMediaImages\" class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\n                <ion-slide *ngFor=\"let s of item.postMediaImages\">\n                  <div class=\"bgSizeContain\" \n                  [ngStyle]=\"{'background-image':'url('+s+')'}\">\n                </div>\n                 </ion-slide>\n              </ion-slides>\n              </div>\n            <ion-label  *ngIf=\"!item.showMore\">\n              <span (click)=\"viewPost(item)\"><ion-text color=\"primary\"><b>{{item.title}}. </b></ion-text> {{trimString(item.data.message, 100)}}</span> \n              <a class=\"show-more\"  *ngIf=\"item.data.message.length > 100\" (click)=\"item.showMore = !item.showMore\">...Show more</a><br/></ion-label>\n            <ion-label (click)=\"viewPost(item)\"  *ngIf=\"item.showMore\"><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\n          </div>\n                  <!-- Reactions Bar -->\n                  <div class=\"reactions-bar\">\n                    <ion-row>\n                      <ion-col>\n                        <ion-buttons>\n                          <ion-button (click)=\"showEmojiPicker($event, item)\">\n                            <!-- Keep your existing Thanks/Smile reaction display -->\n                            <div>\n                              <ion-icon *ngIf=\"item.reactionType === ''\" size=\"medium\" class=\"icon\" src=\"./assets/icon/smile-inactive.svg\"></ion-icon>\n                              <ion-icon *ngIf=\"item.reactionType !== ''\" size=\"medium\" class=\"icon\" [src]=\"'./assets/icon/' + item.reactionType + '.svg'\"></ion-icon>\n                            </div>\n                          </ion-button>\n                          <ion-button (click)=\"showReactionsList(post)\" class=\"reaction-count-button\">\n                            <div class=\"reaction-count-container\">\n                              <div class=\"stacked-icons\">\n                                <ion-icon size=\"small\" src=\"./assets/icon/smile.svg\" class=\"icon smile\"></ion-icon>\n                                <ion-icon size=\"small\" src=\"./assets/icon/hug.svg\" class=\"icon hug\"></ion-icon>\n                              </div>\n                              <span class=\"count-text\">{{item.totalReactionCount}}</span>\n                            </div>\n                          </ion-button>\n                        </ion-buttons>\n                      </ion-col>\n          \n                      <!-- Right aligned icons -->\n                      <ion-col class=\"ion-text-end\">\n                        <ion-buttons class=\"ion-justify-content-end\">\n                          <ion-button>\n                            <div class=\"comment-count\">\n                              <ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon>\n                              <span class=\"count-text\">{{item.totalReviewCount}}</span>\n                            </div>\n                          </ion-button>\n                          <ion-button (click)=\"toggleBookmark(item)\">\n                            <ion-icon size=\"small\" class=\"icon\"  [color]=\"item.isBookmarked ? 'primary' : 'medium'\" [name]=\"item.isBookmarked ? 'bookmark' : 'bookmark-outline'\"></ion-icon>\n                          </ion-button>\n                          <ion-button (click)=\"sharePost(item)\">\n                            <ion-icon name=\"share-social-outline\"></ion-icon>\n                          </ion-button>\n                        </ion-buttons>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n       </ion-card-content>\n        </ion-card>\n        <ion-card *ngIf=\"item.type === 'event'\" class=\"event-card\" (click)=\"viewPost(item)\">\n          <ion-card-content>\n            <!-- Date Badge -->\n            <div class=\"date-container\">\n              <div class=\"date-badge\">\n                <span class=\"month\">{{item.data.eventDate | date:'MMM'}}</span>\n                <span class=\"day\">{{item.data.eventDate | date:'dd'}}</span>\n              </div>\n            </div>\n        \n            <!-- Event Info -->\n            <div class=\"event-content\">\n              <div class=\"title-row\">\n                <h2 class=\"event-title\">{{item.title}}</h2>\n                <!-- <div class=\"event-tag\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                  <span>Event</span>\n                </div> -->\n              </div>\n              \n              <div class=\"event-details\">\n                <div class=\"detail-item\">\n                  <ion-icon name=\"time-outline\"></ion-icon>\n                  <span>{{item.data.eventTime | date:'shortTime'}}</span>\n                </div>\n                <div class=\"detail-item\">\n                  <ion-icon name=\"location-outline\"></ion-icon>\n                  <span>{{item.data.location}}</span>\n                </div>\n              </div>\n        \n              <!-- Attendance Count -->\n              <div class=\"attendance-count\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>{{item.totalReactionCount}} attending</span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        \n        <ion-card *ngIf=\"item.type === 'poll'\" class=\"poll-card\" (click)=\"viewPost(item)\">\n          <ion-card-content>\n            <!-- Header -->\n            <div class=\"poll-header\">\n              <h2 class=\"poll-title\">{{item.title}}</h2>\n              <div class=\"poll-tag\">\n                <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                <span>Poll</span>\n              </div>\n            </div>\n        \n            <!-- Poll Options -->\n            <div class=\"poll-options\">\n              <div class=\"poll-option\" *ngFor=\"let pollOption of item.data.pollOptions; let i = index\">\n                <div class=\"option-content\">\n                  <div class=\"option-info\">\n                    <span class=\"poll-circle circle-{{i}}\"></span>\n                    <span class=\"option-name\">{{pollOption.name}}</span>\n                  </div>\n                  <span class=\"vote-count\">{{pollOption.votes || 0}}</span>\n                </div>\n                <div class=\"progress-bar\">\n                  <div class=\"progress\" \n                       [style.width]=\"calculatePercentage(pollOption.votes || 0, item.totalPollCount) + '%'\"\n                       [style.background-color]=\"getPollColor(i)\">\n                  </div>\n                </div>\n              </div>\n            </div>\n        \n            <!-- Footer -->\n            <div class=\"poll-footer\">\n              <div class=\"poll-status\" [class.closed]=\"item.pollClosed\">\n                <ion-icon name=\"time-outline\"></ion-icon>\n                <span *ngIf=\"!item.pollClosed\">Ends {{item.data.dateEnding.toDate() | DateFormat}}</span>\n                <span *ngIf=\"item.pollClosed\">Poll closed</span>\n              </div>\n              <div class=\"total-votes\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>{{item.totalPollCount}} votes</span>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        \n        \n        \n       </div>\n       </div>\n       <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ 67013:
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-background: var(--app-background);\n}\n\nion-content {\n  --background: #ffffff;\n}\n\nion-header ion-toolbar {\n  --background: transparent;\n}\n\nion-header ion-toolbar .search-header {\n  padding: 0 16px;\n}\n\nion-header ion-toolbar .search-header .back-button-col {\n  padding: 0;\n  max-width: 32px;\n}\n\nion-header ion-toolbar .search-header .back-button-col ion-button {\n  margin: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  height: 40px;\n}\n\nion-header ion-toolbar .search-header .searchbar-col {\n  padding: 0;\n}\n\nion-header ion-toolbar .search-header .custom-searchbar {\n  --background: var(--ion-color-light);\n  --border-radius: 8px;\n  margin: 0;\n  padding: 0;\n  height: 40px;\n  --box-shadow: none;\n}\n\nion-header ion-toolbar .search-header .custom-searchbar::part(container) {\n  margin: 0;\n  padding: 0;\n}\n\nion-header ion-toolbar .search-header .custom-searchbar::part(search-icon) {\n  color: var(--ion-color-medium);\n  font-size: 20px;\n  margin-inline: 8px;\n  width: 20px;\n  height: 20px;\n}\n\nion-header ion-toolbar .search-header .custom-searchbar::part(input) {\n  padding-inline-start: 0;\n  padding-inline-end: 8px;\n  font-size: 16px;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n}\n\nion-header ion-toolbar .search-header .custom-searchbar::part(background) {\n  border-radius: 8px;\n}\n\nion-header ion-toolbar .search-header .custom-searchbar::part(cancel-button) {\n  display: none;\n}\n\nion-header ion-toolbar .regular-header .search-container {\n  display: flex;\n  align-items: center;\n  grid-gap: 10px;\n  gap: 10px;\n  padding: 0 16px;\n}\n\nion-header ion-toolbar .regular-header .search-container .search-box {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n  padding: 8px 12px;\n  height: 40px;\n}\n\nion-header ion-toolbar .regular-header .search-container .search-box ion-icon {\n  margin-right: 8px;\n  color: var(--ion-color-medium);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\nion-header ion-toolbar .regular-header .search-container .search-box ion-input {\n  --padding-start: 0;\n  --placeholder-color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\nion-header ion-toolbar .regular-header .search-container .action-buttons {\n  display: flex;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n}\n\nion-header ion-toolbar .regular-header .search-container .action-buttons .action-btn {\n  position: relative;\n}\n\nion-header ion-toolbar .regular-header .search-container .action-buttons .action-btn ion-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  font-size: 12px;\n}\n\n.search-content {\n  padding: 16px;\n  background: #ffffff;\n}\n\n.search-content .search-section {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n\n.search-content .search-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.search-content .search-section .section-header h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n\n.search-content .search-section .section-header .clear-all {\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n  text-transform: none;\n}\n\n.search-content .search-section .search-items .search-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.search-content .search-section .search-items .search-item:last-child {\n  border-bottom: none;\n}\n\n.search-content .search-section .search-items .search-item .search-term {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  cursor: pointer;\n}\n\n.search-content .search-section .search-items .search-item .search-term .history-icon {\n  color: var(--ion-color-medium);\n  margin-right: 12px;\n  font-size: 1.2rem;\n}\n\n.search-content .search-section .search-items .search-item .search-term span {\n  color: #333;\n  font-size: 0.95rem;\n}\n\n.search-content .search-section .search-items .search-item .delete-btn {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 30px;\n  color: var(--ion-color-medium);\n}\n\n.search-content .search-section .trending-items .trending-item {\n  margin-bottom: 12px;\n}\n\n.search-content .search-section .trending-items .trending-item:last-child {\n  margin-bottom: 0;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content {\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content:active {\n  background: #f0f0f0;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content .trend-rank {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--ion-color-primary);\n  color: white;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-right: 12px;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content .trend-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content .trend-info .trend-term {\n  color: #333;\n  font-size: 0.95rem;\n  margin-bottom: 2px;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content .trend-info .trend-count {\n  color: var(--ion-color-medium);\n  font-size: 0.8rem;\n}\n\n.search-content .search-section .trending-items .trending-item .trend-content .trend-icon {\n  color: var(--ion-color-success);\n  font-size: 1.2rem;\n}\n\n.search-results-header {\n  padding: 16px;\n  background: #ffffff;\n  border-bottom: 1px solid var(--ion-color-light);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.search-results-header .results-info h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n\n.search-results-header .results-info p {\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.search-results-header ion-button {\n  font-size: 0.9rem;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 32px;\n}\n\n.search-results-header ion-button ion-icon {\n  margin-right: 4px;\n}\n\n.no-results {\n  padding: 48px 16px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n\n.no-results ion-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n\n.no-results h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.no-results p {\n  margin: 8px 0 0;\n  font-size: 0.9rem;\n}\n\n@media (prefers-color-scheme: dark) {\n  .search-results-header {\n    background: #1e1e1e;\n    border-bottom-color: rgba(255, 255, 255, 0.1);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.search-section {\n  animation: fadeIn 0.3s ease-out;\n}\n\n@media (prefers-color-scheme: dark) {\n  .search-content {\n    background: #1a1a1a;\n  }\n  .search-content .search-section {\n    background: #2d2d2d;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  }\n  .search-content .search-section .section-header h2 {\n    color: #ffffff;\n  }\n  .search-content .search-section .search-items .search-item {\n    border-bottom-color: #3d3d3d;\n  }\n  .search-content .search-section .search-items .search-item .search-term span {\n    color: #ffffff;\n  }\n  .search-content .search-section .trending-items .trending-item .trend-content {\n    background: #333333;\n  }\n  .search-content .search-section .trending-items .trending-item .trend-content .trend-info .trend-term {\n    color: #ffffff;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-header .search-box {\n    background: rgba(var(--ion-color-light-rgb), 0.05) !important;\n  }\n  ion-header .search-box.focused {\n    background: rgba(var(--ion-color-light-rgb), 0.1) !important;\n  }\n  ion-header ion-chip {\n    background: rgba(var(--ion-color-light-rgb), 0.1) !important;\n  }\n}\n\n.listing-item {\n  margin: 12px 8px;\n  animation: fadeIn 0.3s ease-out;\n}\n\n.listing-item ion-card {\n  margin: 0;\n  border-radius: 12px;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.listing-item ion-card .post-header {\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid var(--ion-color-light);\n}\n\n.listing-item ion-card .post-header .user-info {\n  display: flex;\n  align-items: center;\n  grid-gap: 12px;\n  gap: 12px;\n}\n\n.listing-item ion-card .post-header .user-info .user-avatar {\n  width: 40px;\n  height: 40px;\n  border: 2px solid var(--ion-color-light);\n}\n\n.listing-item ion-card .post-header .user-info .user-details .username {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 16px;\n  margin-bottom: 4px;\n  display: block;\n}\n\n.listing-item ion-card .post-header .user-info .user-details .post-meta {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n}\n\n.listing-item ion-card .post-header .user-info .user-details .post-meta .group-name {\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.listing-item ion-card .post-header .options-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin: 0;\n  height: 36px;\n}\n\n.listing-item ion-card ion-card-content.message {\n  padding: 0 12px 12px;\n  margin-top: 10px;\n}\n\n.listing-item ion-card ion-card-content.message .slider {\n  border-radius: 8px;\n  overflow: hidden;\n  margin: 8px 0;\n}\n\n.listing-item ion-card ion-card-content.message .slider .bgSizeContain {\n  height: 180px;\n  background-size: cover;\n  background-position: center;\n}\n\n.listing-item ion-card ion-card-content.message video {\n  border-radius: 8px;\n  margin: 8px 0;\n  width: 100%;\n}\n\n.listing-item ion-card ion-card-content.message ion-label {\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark);\n}\n\n.listing-item ion-card ion-card-content.message ion-label b {\n  font-weight: 600;\n}\n\n.listing-item ion-card ion-card-content.message ion-label .show-more {\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.listing-item ion-card ion-card-content.message .tags-wrapper {\n  margin: 8px 0;\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 6px;\n  gap: 6px;\n}\n\n.listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating {\n  display: inline-flex;\n  align-items: center;\n  background: var(--ion-color-primary-tint);\n  color: var(--ion-color-primary);\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n.listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:before {\n  content: \"#\";\n  margin-right: 2px;\n  opacity: 0.7;\n}\n\n.listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:active {\n  transform: scale(0.95);\n  background: var(--ion-color-primary);\n  color: white;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar {\n  padding: 8px 0;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar ion-row {\n  align-items: center;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar ion-buttons ion-button {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  height: 36px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar ion-buttons ion-button .icon {\n  font-size: 20px;\n  color: var(--ion-color-medium);\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .reaction-count-container {\n  display: flex;\n  align-items: center;\n  grid-gap: 4px;\n  gap: 4px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons {\n  position: relative;\n  width: 28px;\n  height: 20px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons .icon {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons .icon.smile {\n  left: 0;\n  z-index: 2;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .reaction-count-button .stacked-icons .icon.hug {\n  left: 8px;\n  z-index: 1;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .comment-count {\n  display: flex;\n  align-items: center;\n  grid-gap: 4px;\n  gap: 4px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .comment-count .icon {\n  margin-right: 2px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .count-text {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  line-height: 1;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .ion-text-end ion-buttons {\n  grid-gap: 4px;\n  gap: 4px;\n}\n\n.listing-item ion-card ion-card-content.message .reactions-bar .ion-text-end ion-buttons ion-button:last-child {\n  --padding-end: 0;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 0.5;\n  }\n}\n\n.searchaddedBy {\n  display: flex;\n  align-items: flex-start;\n  grid-gap: 8px;\n  gap: 8px;\n  padding: 0;\n}\n\n.searchaddedBy .searchaddedByImg {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.searchaddedBy p {\n  margin: 0;\n  line-height: 1.3;\n}\n\n.searchaddedBy p .searchaddedByTitle {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.searchaddedBy p .searchaddedByTitle b {\n  font-weight: 600;\n}\n\n.searchaddedBy p .searchaddedByTitle:active {\n  opacity: 0.7;\n}\n\n.searchaddedBy p .searchaddedByDate {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n  display: inline-block;\n  margin-left: 4px;\n}\n\n.badge {\n  float: right;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.badge[color=secondary] {\n  --background: var(--ion-color-secondary-tint);\n  --color: var(--ion-color-secondary-shade);\n}\n\n.badge[color=warning] {\n  --background: var(--ion-color-warning-tint);\n  --color: var(--ion-color-warning-shade);\n}\n\n.badge[color=medium] {\n  --background: var(--ion-color-medium-tint);\n  --color: var(--ion-color-medium-shade);\n}\n\n.badge[color=dark] {\n  --background: var(--ion-color-dark-tint);\n  --color: var(--ion-color-dark-shade);\n}\n\ndiv[class*=search] .listing-item {\n  margin: 10px 8px;\n}\n\ndiv[class*=search] .listing-item ion-card {\n  margin: 0;\n  border-radius: 12px;\n  background: var(--ion-color-light);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-header {\n  padding: 10px 12px;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-header ion-row {\n  align-items: flex-start;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message {\n  padding: 0 12px 12px;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message ion-label {\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark);\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message ion-label span {\n  display: inline-block;\n  margin-bottom: 8px;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message ion-label span b {\n  font-weight: 600;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper {\n  margin: 8px 0 0 0;\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 6px;\n  gap: 6px;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating {\n  display: inline-flex;\n  align-items: center;\n  background: var(--ion-color-primary-tint);\n  color: var(--ion-color-primary);\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:before {\n  content: \"#\";\n  margin-right: 2px;\n  opacity: 0.7;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message .tags-wrapper .tags .item-rating:active {\n  transform: scale(0.95);\n  background: var(--ion-color-primary);\n  color: white;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message div[class*=event] {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n  margin-bottom: 8px;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message div[class*=event] b {\n  font-weight: 600;\n}\n\ndiv[class*=search] .listing-item ion-card ion-card-content.message div[class*=weblink] {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-top: 4px;\n}\n\nion-card-content[class*=poll] b, ion-card-content[class*=resource] b {\n  display: inline-block;\n  margin-bottom: 4px;\n}\n\nion-card-content.pollmessage {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.03);\n  padding: 16px !important;\n}\n\nion-card-content.pollmessage b {\n  font-size: 16px;\n  display: block;\n  margin-bottom: 16px;\n  color: var(--ion-color-dark);\n  line-height: 1.4;\n}\n\nion-card-content.pollmessage ion-row {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\nion-card-content.pollmessage ion-row ion-col {\n  padding: 0 !important;\n}\n\nion-card-content.pollmessage ion-row ion-col div {\n  background: rgba(var(--ion-color-primary-rgb), 0.03);\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin: 2px 0;\n  display: flex;\n  align-items: center;\n  border: 1px solid rgba(var(--ion-color-primary-rgb), 0.08);\n  transition: all 0.2s ease;\n}\n\nion-card-content.pollmessage ion-row ion-col div .poll-circle {\n  width: 12px;\n  height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 12px;\n}\n\nion-card-content.pollmessage ion-row ion-col div span:not(.poll-circle) {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n\nion-card-content.pollmessage ion-row ion-col div:hover {\n  background: rgba(var(--ion-color-primary-rgb), 0.08);\n  transform: translateX(2px);\n}\n\nion-card-content.pollmessage .circle-0 {\n  background: #FF6B6B;\n}\n\nion-card-content.pollmessage .circle-1 {\n  background: #4ECDC4;\n}\n\nion-card-content.pollmessage .circle-2 {\n  background: #45B7D1;\n}\n\nion-card-content.pollmessage .circle-3 {\n  background: #96CEB4;\n}\n\nion-card-content.pollmessage .circle-4 {\n  background: #FFD93D;\n}\n\nion-card-content.pollmessage .circle-5 {\n  background: #FF8066;\n}\n\nion-card-content.pollmessage .tags-wrapper {\n  margin: 12px 0 8px;\n}\n\nion-card-content.pollmessage .tags-wrapper ion-row {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 6px;\n  gap: 6px;\n}\n\nion-card-content.pollmessage .tags-wrapper ion-row .tags {\n  margin: 0;\n}\n\nion-card-content.pollmessage .tags-wrapper ion-row .tags .item-rating {\n  background: rgba(var(--ion-color-primary-rgb), 0.08);\n  color: var(--ion-color-primary);\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\nion-card-content.pollmessage .info-row {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n}\n\nion-card-content.pollmessage .info-row ion-col {\n  padding: 0;\n}\n\nion-card-content.pollmessage .info-row .text {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n}\n\nion-card:has(ion-card-content.pollmessage) {\n  margin: 8px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  border-left: 3px solid var(--ion-color-primary);\n}\n\n.event-card {\n  margin: 8px;\n  border-radius: 12px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n}\n\n.event-card ion-card-content {\n  padding: 12px;\n  display: flex;\n  grid-gap: 16px;\n  gap: 16px;\n}\n\n.event-card ion-card-content .date-container .date-badge {\n  background: var(--ion-color-light);\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n  min-width: 60px;\n}\n\n.event-card ion-card-content .date-container .date-badge .month {\n  display: block;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.event-card ion-card-content .date-container .date-badge .day {\n  display: block;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1;\n  color: var(--ion-color-dark);\n}\n\n.event-card ion-card-content .event-content {\n  flex: 1;\n}\n\n.event-card ion-card-content .event-content .title-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  grid-gap: 8px;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.event-card ion-card-content .event-content .title-row .event-title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  flex: 1;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.event-card ion-card-content .event-content .title-row .event-tag {\n  display: inline-flex;\n  align-items: center;\n  grid-gap: 4px;\n  gap: 4px;\n  padding: 4px 8px;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 16px;\n  flex-shrink: 0;\n}\n\n.event-card ion-card-content .event-content .title-row .event-tag ion-icon {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.event-card ion-card-content .event-content .title-row .event-tag span {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.event-card ion-card-content .event-content .event-details {\n  margin-bottom: 8px;\n}\n\n.event-card ion-card-content .event-content .event-details .detail-item {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n\n.event-card ion-card-content .event-content .event-details .detail-item ion-icon {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n\n.event-card ion-card-content .event-content .event-details .detail-item span {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.event-card ion-card-content .event-content .attendance-count {\n  display: flex;\n  align-items: center;\n  padding-top: 8px;\n  border-top: 1px solid var(--ion-color-light);\n}\n\n.event-card ion-card-content .event-content .attendance-count ion-icon {\n  font-size: 16px;\n  color: var(--ion-color-primary);\n  margin-right: 6px;\n}\n\n.event-card ion-card-content .event-content .attendance-count span {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n}\n\n.event-card:active {\n  transform: scale(0.98);\n  transition: transform 0.1s ease;\n}\n\n.poll-card {\n  margin: 8px;\n  border-radius: 12px;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n}\n\n.poll-card ion-card-content {\n  padding: 16px;\n}\n\n.poll-card ion-card-content .poll-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n\n.poll-card ion-card-content .poll-header .poll-title {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  flex: 1;\n  padding-right: 12px;\n}\n\n.poll-card ion-card-content .poll-header .poll-tag {\n  display: inline-flex;\n  align-items: center;\n  grid-gap: 4px;\n  gap: 4px;\n  padding: 4px 8px;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n  border-radius: 16px;\n}\n\n.poll-card ion-card-content .poll-header .poll-tag ion-icon {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n\n.poll-card ion-card-content .poll-header .poll-tag span {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  text-transform: uppercase;\n}\n\n.poll-card ion-card-content .poll-options {\n  margin-bottom: 16px;\n}\n\n.poll-card ion-card-content .poll-options .poll-option {\n  margin-bottom: 12px;\n}\n\n.poll-card ion-card-content .poll-options .poll-option:last-child {\n  margin-bottom: 0;\n}\n\n.poll-card ion-card-content .poll-options .poll-option .option-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.poll-card ion-card-content .poll-options .poll-option .option-content .option-info {\n  display: flex;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n}\n\n.poll-card ion-card-content .poll-options .poll-option .option-content .option-info .poll-circle {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.poll-card ion-card-content .poll-options .poll-option .option-content .option-info .option-name {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\n\n.poll-card ion-card-content .poll-options .poll-option .option-content .vote-count {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  min-width: 24px;\n  text-align: right;\n}\n\n.poll-card ion-card-content .poll-options .poll-option .progress-bar {\n  height: 6px;\n  background: var(--ion-color-light);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.poll-card ion-card-content .poll-options .poll-option .progress-bar .progress {\n  height: 100%;\n  min-width: 4px;\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n\n.poll-card ion-card-content .poll-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 12px;\n  border-top: 1px solid var(--ion-color-light);\n}\n\n.poll-card ion-card-content .poll-footer .poll-status, .poll-card ion-card-content .poll-footer .total-votes {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n}\n\n.poll-card ion-card-content .poll-footer .poll-status ion-icon, .poll-card ion-card-content .poll-footer .total-votes ion-icon {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n\n.poll-card ion-card-content .poll-footer .poll-status span, .poll-card ion-card-content .poll-footer .total-votes span {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n}\n\n.poll-card ion-card-content .poll-footer .poll-status.closed, .poll-card ion-card-content .poll-footer .total-votes.closed {\n  color: var(--ion-color-danger);\n}\n\n.poll-card ion-card-content .poll-footer .poll-status.closed ion-icon, .poll-card ion-card-content .poll-footer .poll-status.closed span, .poll-card ion-card-content .poll-footer .total-votes.closed ion-icon, .poll-card ion-card-content .poll-footer .total-votes.closed span {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUFwTVo7O0FBc01ZO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFwTWQ7O0FBdU1ZO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBck1kOztBQXlNVTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXZNWjs7QUEyTVE7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBek1WOztBQTJNVTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQXpNWjs7QUErTUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7QUE3TU47O0FBK01NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QUE3TVI7O0FBK01RO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FBN01WOztBQWdOUTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQTlNVjs7QUFpTlE7RUFDRSw4QkFBQTtBQS9NVjs7QUFpTlU7RUFDRSw4QkFBQTtBQS9NWiIsImZpbGUiOiJmZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjsgIC8vIFNldCB3aGl0ZSBiYWNrZ3JvdW5kIGZvciBpb24tY29udGVudFxufVxuLy8gSGVhZGVyIFN0eWxpbmdcbi8vIGZlZWQucGFnZS5zY3NzXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgXG4gICAgLy8gU2VhcmNoIE1vZGUgU3R5bGVzXG4gICAgLnNlYXJjaC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMCAxNnB4O1xuXG4gICAgICAuYmFjay1idXR0b24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMnB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VhcmNoYmFyLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC5jdXN0b20tc2VhcmNoYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgLy8gQWRkIHRoaXNcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgXG4gICAgICAgICY6OnBhcnQoY29udGFpbmVyKSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpwYXJ0KHNlYXJjaC1pY29uKSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW4taW5saW5lOiA4cHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6cGFydChpbnB1dCkge1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLy8gQWRkIHRoaXNcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3JjZSBib3JkZXIgcmFkaXVzIG9uIHRoZSBzZWFyY2hiYXIgYmFja2dyb3VuZFxuICAgICAgICAmOjpwYXJ0KGJhY2tncm91bmQpIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjo6cGFydChjYW5jZWwtYnV0dG9uKSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZ3VsYXIgTW9kZSBTdHlsZXNcbiAgICAucmVndWxhci1oZWFkZXIge1xuICAgICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgXG4gICAgICAgIC5zZWFyY2gtYm94IHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICAgLmFjdGlvbi1idG4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIGZlZWQucGFnZS5zY3NzXG4uc2VhcmNoLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyAgLy8gRW5zdXJlIHdoaXRlIGJhY2tncm91bmQgZm9yIHRoZSBjb250ZW50XG5cbiAgLnNlYXJjaC1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzFhMWExYTtcbiAgICAgIH1cblxuICAgICAgLmNsZWFyLWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtaXRlbXMge1xuICAgICAgLnNlYXJjaC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gtdGVybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgLmhpc3RvcnktaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWxldGUtYnRuIHtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50cmVuZGluZy1pdGVtcyB7XG4gICAgICAudHJlbmRpbmctaXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyZW5kLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRyZW5kLXJhbmsge1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50cmVuZC1pbmZvIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnRyZW5kLXRlcm0ge1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50cmVuZC1jb3VudCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRyZW5kLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLy8gZmVlZC5wYWdlLnNjc3Ncbi8vIEFkZCB0aGVzZSBzdHlsZXMgdG8geW91ciBleGlzdGluZyBTQ1NTXG5cbi5zZWFyY2gtcmVzdWx0cy1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnJlc3VsdHMtaW5mbyB7XG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICBoZWlnaHQ6IDMycHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLm5vLXJlc3VsdHMge1xuICBwYWRkaW5nOiA0OHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxufVxuXG4vLyBEYXJrIG1vZGUgc3VwcG9ydFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAuc2VhcmNoLXJlc3VsdHMtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxufVxuXG5cbi8vIEN1c3RvbSBhbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2Utb3V0O1xufVxuXG4vLyBEYXJrIG1vZGUgc3VwcG9ydFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAuc2VhcmNoLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XG5cbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZDogIzJkMmQyZDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgICAgIC5zZWN0aW9uLWhlYWRlciBoMiB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWl0ZW1zIC5zZWFyY2gtaXRlbSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzZDNkM2Q7XG5cbiAgICAgICAgLnNlYXJjaC10ZXJtIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50cmVuZGluZy1pdGVtcyAudHJlbmRpbmctaXRlbSAudHJlbmQtY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG5cbiAgICAgICAgLnRyZW5kLWluZm8gLnRyZW5kLXRlcm0ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuLy8gRGFyayBtb2RlIGFkanVzdG1lbnRzXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGlvbi1oZWFkZXIge1xuICAgIC5zZWFyY2gtYm94IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMDUpICFpbXBvcnRhbnQ7XG5cbiAgICAgICYuZm9jdXNlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMSkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY2hpcCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gRmVlZCBJdGVtcyBTdHlsaW5nXG4ubGlzdGluZy1pdGVtIHtcbiAgbWFyZ2luOiAxMnB4IDhweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcblxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cbiAgICAucG9zdC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBcbiAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gIFxuICAgICAgICAudXNlci1hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICB9XG4gIFxuICAgICAgICAudXNlci1kZXRhaWxzIHtcbiAgICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC5wb3N0LW1ldGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZ3JvdXAtbmFtZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLm9wdGlvbnMtYnV0dG9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtY29udGVudC5tZXNzYWdlIHtcbiAgICAgIHBhZGRpbmc6IDAgMTJweCAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgLnNsaWRlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcblxuICAgICAgICAuYmdTaXplQ29udGFpbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aWRlbyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgICBiIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3ctbW9yZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGVkIG1vZGVybiB0YWcgc3R5bGluZ1xuICAgICAgLnRhZ3Mtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcjJztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yZWFjdGlvbnMtYmFyIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIFxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLnJlYWN0aW9uLWNvdW50LWJ1dHRvbiB7XG4gICAgICAgICAgLnJlYWN0aW9uLWNvdW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC5zdGFja2VkLWljb25zIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICYuc21pbGUge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJi5odWcge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLmNvbW1lbnQtY291bnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICBcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAuY291bnQtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIFJpZ2h0IGFsaWduZWQgYnV0dG9uc1xuICAgICAgICAuaW9uLXRleHQtZW5kIHtcbiAgICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gTG9hZGluZyBza2VsZXRvbiBhbmltYXRpb25cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7IG9wYWNpdHk6IDAuNTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjg7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDAuNTsgfVxufVxuLy8gU2VhcmNoIE1vZGUgU3BlY2lmaWMgU3R5bGluZ1xuLnNlYXJjaGFkZGVkQnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLnNlYXJjaGFkZGVkQnlJbWcge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcblxuICAgIC5zZWFyY2hhZGRlZEJ5VGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgYiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2hhZGRlZEJ5RGF0ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBTZWFyY2ggUmVzdWx0cyBCYWRnZSBTdHlsaW5nXG4uYmFkZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG5cbiAgJltjb2xvcj1cInNlY29uZGFyeVwiXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICB9XG5cbiAgJltjb2xvcj1cIndhcm5pbmdcIl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICB9XG5cbiAgJltjb2xvcj1cIm1lZGl1bVwiXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICB9XG5cbiAgJltjb2xvcj1cImRhcmtcIl0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICB9XG59XG5cbi8vIFNlYXJjaCBSZXN1bHRzIENhcmQgU3R5bGluZ1xuZGl2W2NsYXNzKj1cInNlYXJjaFwiXSB7XG4gIC5saXN0aW5nLWl0ZW0ge1xuICAgIG1hcmdpbjogMTBweCA4cHg7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXG4gICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG5cbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLWNhcmQtY29udGVudC5tZXNzYWdlIHtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4IDEycHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAgIGIge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlYXJjaCBSZXN1bHRzIFRhZ3NcbiAgICAgICAgLnRhZ3Mtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMCAwIDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgICAgICAudGFncyB7XG4gICAgICAgICAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyMnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFdmVudCBzcGVjaWZpYyBzdHlsaW5nXG4gICAgICAgIGRpdltjbGFzcyo9XCJldmVudFwiXSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgYiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc291cmNlIHNwZWNpZmljIHN0eWxpbmdcbiAgICAgICAgZGl2W2NsYXNzKj1cIndlYmxpbmtcIl0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXBhY3QgbGF5b3V0IGZvciBkaWZmZXJlbnQgcG9zdCB0eXBlc1xuaW9uLWNhcmQtY29udGVudCB7XG4gICZbY2xhc3MqPVwicG9sbFwiXSxcbiAgJltjbGFzcyo9XCJyZXNvdXJjZVwiXSB7XG4gICAgYiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQucG9sbG1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMDMpO1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG5cbiAgYiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgaW9uLXJvdyB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wMyk7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wOCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgLnBvbGwtY2lyY2xlIHtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuOm5vdCgucG9sbC1jaXJjbGUpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wOCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBNb2Rlcm4gY2lyY2xlIGNvbG9yc1xuICAuY2lyY2xlLTAgeyBiYWNrZ3JvdW5kOiAjRkY2QjZCOyB9XG4gIC5jaXJjbGUtMSB7IGJhY2tncm91bmQ6ICM0RUNEQzQ7IH1cbiAgLmNpcmNsZS0yIHsgYmFja2dyb3VuZDogIzQ1QjdEMTsgfVxuICAuY2lyY2xlLTMgeyBiYWNrZ3JvdW5kOiAjOTZDRUI0OyB9XG4gIC5jaXJjbGUtNCB7IGJhY2tncm91bmQ6ICNGRkQ5M0Q7IH1cbiAgLmNpcmNsZS01IHsgYmFja2dyb3VuZDogI0ZGODA2NjsgfVxuXG4gIC50YWdzLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMTJweCAwIDhweDtcblxuICAgIGlvbi1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogNnB4O1xuXG4gICAgICAudGFncyB7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4wOCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mby1yb3cge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7XG5cbiAgICBpb24tY29sIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBPcHRpb25hbDogaWYgeW91IHdhbnQgdG8gc3R5bGUgdGhlIGNvbnRhaW5pbmcgY2FyZFxuaW9uLWNhcmQge1xuICAmOmhhcyhpb24tY2FyZC1jb250ZW50LnBvbGxtZXNzYWdlKSB7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDQpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbi5ldmVudC1jYXJkIHtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XG4gIFxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNnB4O1xuICAgIFxuICAgIC5kYXRlLWNvbnRhaW5lciB7XG4gICAgICAuZGF0ZS1iYWRnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgXG4gICAgICAgIC5tb250aCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZGF5IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZXZlbnQtY29udGVudCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgXG4gICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgXG4gICAgICAgIC5ldmVudC10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZXZlbnQtdGFnIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5ldmVudC1kZXRhaWxzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyAvLyBBZGQgc3BhY2UgYmV0d2VlbiBkZXRhaWxzIGFuZCBhdHRlbmRhbmNlIGNvdW50XG4gICAgICAgIC5kZXRhaWwtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmF0dGVuZGFuY2UtY291bnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcbiAgfVxufVxuXG4ucG9sbC1jYXJkIHtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7XG5cbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5wb2xsLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAucG9sbC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAucG9sbC10YWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wb2xsLW9wdGlvbnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgLnBvbGwtb3B0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAub3B0aW9uLWNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuXG4gICAgICAgICAgLm9wdGlvbi1pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgICAgIC5wb2xsLWNpcmNsZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3B0aW9uLW5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZvdGUtY291bnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDRweDsgLy8gRW5zdXJlcyB2ZXJ5IHNtYWxsIHBlcmNlbnRhZ2VzIGFyZSBzdGlsbCB2aXNpYmxlXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBvbGwtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgICAgLnBvbGwtc3RhdHVzLCAudG90YWwtdm90ZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNsb3NlZCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlvbi1pY29uLCBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_feed_feed_module_ts-es2015.js.map