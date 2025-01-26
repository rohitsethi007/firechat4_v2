import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { PopoverController, NavController, ActionSheetController, AlertController, ModalController, IonRouterOutlet, IonInfiniteScroll } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FilterComponent } from './filter.component';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';
import { EmojiPickerComponentModule } from '../components/emoji-picker/emoji-picker.module';
import { IonSearchbar } from '@ionic/angular';

import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';
import algoliasearch from 'algoliasearch';
import { constants } from 'perf_hooks';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BookmarkService } from '../services/bookmark.service';

// Add interface for user data
interface UserDocument {
  userReactions: any[];
  userNotifications: any[];
  userBookmarks: any[];
  username: string;
  img: string;
  groups: string[];
  userId: string;
  // add other properties as needed
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
    @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
    @ViewChild('searchbar') searchbar: IonSearchbar;
    searchQuery: string = '';
    isSearchActive: boolean = false;
    isSearchFocused: boolean = false;
    recentSearches: Array<{ id: string; term: string; timestamp: any }> = [];
    trendingSearches: Array<{ id: string; term: string; count: number }> = [];
    searchResults: any[] = [];
    searchSubject = new Subject<string>();
    
    bookmarks: any[] = [];
    isBookmarked: false;

    isFilterActive: boolean = false;
    unreadCount: number = 0;

    userReactions: any[] = [];
    userNotifications: any[] = [];
    loggedInUser: UserDocument | null = null;
    [x: string]: any;
    pushes: any = [];
    unreadMessagesCount: any;
    friendRequestCount: any;
    unreadGroupMessagesCount: any;
    groupList: any;
    groupsInfo: any;
    conversationList: any;
    conversationsInfo: any;

    private title: any;
    private groupId: any;
    private posts: any = [];
    private searchPosts: any = [];
    private memberofGroups: any = [];

    private loggedInUserId: any;
    private firstDataSet: any;
    private lastDataSet: any;
    private maxNoOfPosts: any = 1000;

    // algoliasearch
    client: any;
    index: any;
    ALOGOLIA_APP_ID = 'DNTXC08EBF';
    ALGOLIA_API_KEY = '4768de6e8b67959c064c0bf89443d449';

    slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: false
    };
    constructor(
      public dataProvider: DataService,
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public firestore: AngularFirestore,
      public alertCtrl: AlertController,
      private routerOutlet: IonRouterOutlet,
      public loadingProvider: LoadingService,
      public actionSheet: ActionSheetController,
      private route: ActivatedRoute,
      private router: Router,
      private afAuth: AngularFireAuth,
      private localNotifications: LocalNotifications,
      private fcm: FCM,
      public plt: Platform,
      private popoverCtrl: PopoverController,
      private bookmarkService: BookmarkService
    ) 
    {
      this.plt.ready()
      .then(() => {
        console.log('platform ready in Feed page');
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
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
      this.searchSubject.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(searchTerm => {
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
        this.dataProvider.getCurrentUser().then((u) => {
          u.get({ source: 'server' }).subscribe((user) => { // Force server fetch
            const userData = user.data() as UserDocument;
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

    async getFeedData(event?: any, searchTerm?: string) {
      try{
      this.loadingProvider.show();
      if (!searchTerm) {
        this.firstDataSet = this.firestore.collection('posts').ref
        .where('groupId', 'in', this.loggedInUser.groups)
        .orderBy('date', 'desc')
        .limit(5);
          this.firstDataSet.get().then((po: any) => {
            this.lastDataSet = po.docs[po.docs.length - 1];
            this.posts = [];
            this.loadEachPostData(po);
        });
      } else {
         // Split search term into keywords
          const searchTerms = searchTerm.toLowerCase()
          .split(' ')
          .filter(term => term.length > 0)
          .map(term => term.trim());
          console.info('GOT searchTerms:', searchTerms)
          // Search using array-contains-any
          this.firstDataSet = this.firestore.collection('posts').ref
          // .where('groupId', 'in', this.loggedInUser.groups)
          .where('searchKeywords', 'array-contains-any', searchTerms)
          .orderBy('date', 'desc')
          .limit(20);
            this.firstDataSet.get().then((po: any) => {
              this.lastDataSet = po.docs[po.docs.length - 1];
        
              this.posts = [];
              this.loadEachPostData(po);
              
        });
      }
      this.isSearchActive = false;
      this.loadingProvider.hide();
   } catch(error) {
      console.error('Error fetching feed data:', error);
      this.isSearchActive = false;
      this.loadingProvider.hide();
      return [];
    }

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
      console.info('post.reactionType', post.reactionType)
      console.info('reactionType', reactionType)
    if (post.reactionType === '') {
      console.info('1')
        this.addPostReaction(post, reactionType);
        post.totalReactionCount += 1;
      } else if(post.reactionType !== reactionType) {
        console.info('2')
          this.removePostReaction(post, post.reactionType);

          this.addPostReaction(post, reactionType);
      } else if(post.reactionType === reactionType) {
        console.info('3')
        this.removePostReaction(post, reactionType);
        post.totalReactionCount -= 1;
      }
    }
  
    addPostReaction(post, reactionType) {
      // first find the post in the collection

      const postIndex = this.posts.findIndex(el => el.key ===  post.key);
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
          this.posts[postIndex].showSmiley = true
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
          reactionType: firebase.default.firestore.FieldValue.arrayUnion(reactionType)
      }).then(() => {
        const increment = firebase.default.firestore.FieldValue.increment(1);
        this.firestore.collection('posts').doc(post.key).update({
          totalReactionCount : increment
        });
      });
      }
    }

    removePostReaction(post, reactionType) {
      console.info('removePostReaction', post, reactionType);
      // first find the post in the collection
      const postIndex = this.posts.findIndex(el => el.key ===  post.key);
      const p = this.posts[postIndex];
      const found = false;
      if (p.reactions !== undefined) {
        const values = Object.keys(p.reactions).map( function(e) {
          return p.reactions[e];
        });

        const reaction = p.reactions.find(
          el => el.addedByUser.addedByKey === this.loggedInUserId);

        if (reaction.reactionType === reactionType) {
            console.info('here!!', post.key, reaction)
          this.dataProvider.removePostReaction(post.key, reaction.key);
        } 
      }
    }  

    async showReactionsList(post) {
      if (post.totalReactionCount === 0) {
        return;
      }
    // first find the post in the collection
      const postIndex = this.posts.findIndex(el => el.key ===  post.key);
      const p = this.posts[postIndex];
      const modal = await this.modalCtrl.create({
        component: ReactionListModalPage,
        componentProps: {
          reactions: p.reactions
        }
      });
      return await modal.present();
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
      if ( this.posts.length > this.maxNoOfPosts ) {
        event.target.disabled = true;
      } else {
        if (this.lastDataSet) {
        this.nextDataSet = this.firestore.collection('posts').ref
                            .where('groupId', 'in', this.loggedInUser.groups)
                            .orderBy('date', 'desc')
                            .startAfter(this.lastDataSet).limit(5);
        this.nextDataSet.onSnapshot((po: any) => {
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

    loadEachPostData(po: any) {
      po.forEach(p => {
        let post: any;
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
        this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
          post.reactions = [];
          reactions.forEach(element => {
          const reaction = element.payload.doc.data();
          reaction.key = element.payload.doc.id;
          post.reactions.push(reaction);
        });

          let reactionType : string;
          if (reactions.length > 0) {
            if (post.reactions.length > 0) {
                // Using find() to get the reaction type
                reactionType = post.reactions.find(el => 
                  el.addedByUser?.addedByKey === this.loggedInUserId
                )?.reactionType || '';
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
      if ( string) {
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

    async showEmojiPicker(event: any, item: any) {
      event.stopPropagation();
      
      const popover = await this.popoverCtrl.create({
        component: EmojiPickerComponent,
        componentProps: {
          post: item,
          postType: item.type
        },
        event: event,
        translucent: true,
        cssClass: 'emoji-picker-popover'
      });
    
      await popover.present();
    
      const { data } = await popover.onDidDismiss();
      if (data) {
        console.log('emoji selected', data);
        this.submitReactionPost(data.post, data.emoji.value);
      }
    }

    async activateSearch() {
      this.isSearchActive = true;
      // Load searches when search is activated
      await this.loadRecentSearches();
      await this.loadTrendingSearches();
      
      setTimeout(() => {
        this.searchbar?.setFocus();
      }, 150);
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

    onSearchSubmit(event: any) {
      event.preventDefault(); // Prevent event bubbling
      if (event.key === 'Enter' || event.keyCode === 13) {
        this.performSearch();
      }
    }

    async performSearch(term?: string) {
      this.loadingProvider.show();
      this.searchQuery = term || this.searchQuery;

      if (this.searchQuery.trim()) {
        // Store the search query
        await this.saveRecentSearch(this.searchQuery.trim());
        // Your existing search logic
        this.getFeedData(null, this.searchQuery);
      }
      this.loadingProvider.hide();
    }

    async saveRecentSearch(term: string) {
      const userId = this.loggedInUser.userId;
      const searchTerm = term.trim().toLowerCase(); // Normalize the search term
      
      // Check if this search term already exists for this user
      const existingSearchQuery = this.firestore
        .collection('userSearches')
        .doc(userId)
        .collection('searches', ref => 
          ref.where('term', '==', searchTerm).limit(1)
        );

      const existingSearches = await existingSearchQuery.get().toPromise();

      if (existingSearches.empty) {
        // Only add if the search term doesn't exist
        await this.firestore
          .collection('userSearches')
          .doc(userId)
          .collection('searches')
          .add({
            term: searchTerm,
            timestamp: firebase.default.firestore.FieldValue.serverTimestamp()
          });

        // Update trending searches count
        const trendingRef = this.firestore.collection('trendingSearches').doc(searchTerm);
        await trendingRef.set({
          term: searchTerm,
          count: firebase.default.firestore.FieldValue.increment(1)
        }, { merge: true });
      } else {
        // Update timestamp of existing search
        const existingDoc = existingSearches.docs[0];
        await existingDoc.ref.update({
          timestamp: firebase.default.firestore.FieldValue.serverTimestamp()
        });
      }
    }

    async loadRecentSearches() {
      const user = this.loggedInUser;
      if (user) {
        this.firestore
          .collection('userSearches')
          .doc(user.userId)
          .collection('searches', ref => 
            ref.orderBy('timestamp', 'desc').limit(10)
          )
          .snapshotChanges()
          .subscribe(actions => {
            this.recentSearches = actions.map(a => ({
              id: a.payload.doc.id,
              term: a.payload.doc.data().term,
              timestamp: a.payload.doc.data().timestamp
            }));
          });
      }
    }

    onSearchInput(event: any) {
      this.searchSubject.next(event.target.value);
    }
  
    loadTrendingSearches() {
      this.firestore
        .collection('trendingSearches', ref => 
          ref.orderBy('count', 'desc').limit(5)
        )
        .snapshotChanges()
        .subscribe(actions => {
          this.trendingSearches = actions.map(a => ({
            id: a.payload.doc.id,
            ...a.payload.doc.data() as { term: string; count: number }
          }));
        });
    }

    removeRecentSearch(searchId: string) {
      const userId = this.loggedInUser.userId;
      return this.firestore
        .collection('userSearches')
        .doc(userId)
        .collection('searches')
        .doc(searchId)
        .delete();
    }
    
    removeFilter(filter: {id: string, name: string}) {
      this.activeFilters = this.activeFilters.filter(f => f.id !== filter.id);
      // Update your filtered results
    }

    clearSearch() {
      this.searchQuery = '';
      this.searchResults = [];
      // Optionally return to feed view
      this.deactivateSearch();
    }

    async presentFilterPopover(ev: any) {
      const popover = await this.popoverCtrl.create({
        component: FilterComponent,
        event: ev,
        translucent: true,
        cssClass: 'filter-popover',
        backdropDismiss: true,
        keyboardClose: true,
        mode: 'md'// Using material design mode for better accessibility
      });

      // Handle keyboard events for accessibility
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          popover.dismiss();
        }
      };

      document.addEventListener('keydown', handleKeydown);

      await popover.present();

      const { data } = await popover.onWillDismiss();
      // Clean up event listener
      document.removeEventListener('keydown', handleKeydown);

      if (data) {
        this.isFilterActive = data.type !== 'all' || (data.groups && data.groups.length > 0);
        this.applyFilters(data);
        console.info('filter data', data)
      }
    }

    applyFilters(filters: any) {
      console.log('Applying filters:', filters);
      // Implement your filter logic here
    }

    calculatePercentage(votes: number, total: number): number {
      if (!total || total === 0) return 0;
      return Math.round((votes / total) * 100);
    }
    
    getPollColor(index: number): string {
      const colors = [
        '#4CAF50', // green
        '#2196F3', // blue
        '#FF9800', // orange
        '#E91E63', // pink
        '#9C27B0', // purple
        '#00BCD4'  // cyan
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

    async toggleBookmark(post: any) {
      const userId = this.loggedInUserId;
      post.isBookmarked = await this.bookmarkService.toggleBookmark(
        post, 
        userId, 
        this.userBookmarks
      );
    }

}
