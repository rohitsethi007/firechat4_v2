import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { PopoverController, NavController, ActionSheetController, AlertController, ModalController, IonInfiniteScroll } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { FilterComponent } from './filter.component';
import { Router } from '@angular/router';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';
import { IonSearchbar } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { BookmarkService } from '../services/bookmark.service';
import { NotificationsService } from '../services/notifications.service';
import { UserDocument } from '../models/interfaces' 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

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
    unreadNotifications = 0;
    private notificationsSub: Subscription;
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
      public alertCtrl: AlertController,
      public loadingProvider: LoadingService,
      public actionSheet: ActionSheetController,
      private router: Router,
      private afAuth: AngularFireAuth,
      public firestore: AngularFirestore,
      public plt: Platform,
      private popoverCtrl: PopoverController,
      private bookmarkService: BookmarkService,
      private notificationsService: NotificationsService,
      private storage: Storage
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
      });

      this.isSearchActive = false;
    }

    subscribeToTopic() {
      this.fcm.subscribeToTopic('enappd');
    }

    getToken() {
      this.fcm.getToken().then(token => {
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

     // Subscribe to unread notifications count
     this.notificationsSub = this.notificationsService.getUserNotifications()
     .subscribe({
       next: (notifications) => {
         console.log('Raw notifications:', notifications); // Debug log
         this.unreadNotifications = notifications.filter(n => !n.read).length;
         console.info('Unread notifications:', this.unreadNotifications);
       },
       error: (error) => {
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
        // Check if user has groups before using 'in' filter
        if (this.loggedInUser && this.loggedInUser.groups && Array.isArray(this.loggedInUser.groups) && this.loggedInUser.groups.length > 0) {
          console.log('User is in groups:', this.loggedInUser.groups);
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
          console.log('User has no groups or groups is not an array');
          // If no groups, fetch recent posts without the 'in' filter
          this.firstDataSet = this.firestore.collection('posts').ref
          .orderBy('date', 'desc')
          .limit(5);
          
          this.firstDataSet.get().then((po: any) => {
            this.lastDataSet = po.docs[po.docs.length - 1];
            this.posts = [];
            this.loadEachPostData(po);
          });
        }
      } else {
         // Split search term into keywords
          const searchTerms = searchTerm.toLowerCase()
          .split(' ')
          .filter(term => term.length > 0)
          .map(term => term.trim());
          console.info('GOT searchTerms:', searchTerms)
          // Search using array-contains-any
          if (this.loggedInUser && this.loggedInUser.groups && Array.isArray(this.loggedInUser.groups) && this.loggedInUser.groups.length > 0) {
            console.log('Searching posts in user groups:', this.loggedInUser.groups);
            this.firstDataSet = this.firestore.collection('posts').ref
              .where('groupId', 'in', this.loggedInUser.groups)
              .where('searchKeywords', 'array-contains-any', searchTerms)
              .orderBy('date', 'desc')
              .limit(20);
              
            this.firstDataSet.get().then((po: any) => {
              this.lastDataSet = po.docs[po.docs.length - 1];
              this.posts = [];
              this.loadEachPostData(po);
            });
          } else {
            console.log('Searching posts without group filter');
            this.firstDataSet = this.firestore.collection('posts').ref
              .where('searchKeywords', 'array-contains-any', searchTerms)
              .orderBy('date', 'desc')
              .limit(20);
              
            this.firstDataSet.get().then((po: any) => {
              this.lastDataSet = po.docs[po.docs.length - 1];
              this.posts = [];
              this.loadEachPostData(po);
            });
          }
      }
      this.isSearchActive = false;
      this.loadingProvider.hide();
   } catch(error) {
      console.error('Error fetching feed data:', error);
      this.isSearchActive = false;
      this.loadingProvider.hide();
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
      // Store current user in storage to pass auth guard
      this.dataProvider.getCurrentUserId().then(userId => {
        this.storage.set('currentUser', userId).then(() => {
          this.router.navigateByUrl('/new-post');
        });
      });
    }

    newResource() {
      this.router.navigateByUrl('/new-resource/' + this.groupId);
    }

    newEvent() {
      this.router.navigateByUrl('/new-event/' + this.groupId);
    }

    submitReactionPost(post, reactionType) {
    if (post.reactionType === '') {
        this.addPostReaction(post, reactionType);
        post.totalReactionCount += 1;
      } else if(post.reactionType !== reactionType) {
          this.removePostReaction(post, post.reactionType);

          this.addPostReaction(post, reactionType);
      } else if(post.reactionType === reactionType) {
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
          reactionType: firebase.firestore.FieldValue.arrayUnion(reactionType)
      }).then(() => {
        const increment = firebase.firestore.FieldValue.increment(1);
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
      // Check if post exists and has reactions
      if (!post || post.totalReactionCount === 0) {
        return;
      }
      
      try {
        // Find the post in the collection
        const postIndex = this.posts.findIndex(el => el.key === post.key);
        if (postIndex === -1) {
          console.error('Post not found in posts array');
          return;
        }
        
        const p = this.posts[postIndex];
        if (!p.reactions) {
          console.error('No reactions found for this post');
          return;
        }
        
        const modal = await this.modalCtrl.create({
          component: ReactionListModalPage,
          componentProps: {
            reactions: p.reactions
          }
        });
        return await modal.present();
      } catch (error) {
        console.error('Error showing reactions list:', error);
      }
    }

    viewPost(post) {
      // Check if user is logged in before navigating
      this.afAuth.currentUser.then(user => {
        if (user) {
          this.router.navigateByUrl('/post/' + post.key);
        } else {
          // Store the post ID to navigate after login
          localStorage.setItem('pendingPostView', post.key);
          this.router.navigateByUrl('/login');
        }
      });
    }

    viewUser(userId) {
      // Check if user is logged in before navigating
      this.afAuth.currentUser.then(user => {
        if (user) {
          this.router.navigateByUrl('/profile/' + userId);
        } else {
          // Store the profile ID to navigate after login
          localStorage.setItem('pendingProfileView', userId);
          this.router.navigateByUrl('/login');
        }
      });
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
        // Check if user has groups before using 'in' filter
        if (this.loggedInUser && this.loggedInUser.groups && Array.isArray(this.loggedInUser.groups) && this.loggedInUser.groups.length > 0) {
          console.log('Loading more posts from user groups:', this.loggedInUser.groups);
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
          console.log('Loading more posts without group filter');
          // If no groups, fetch recent posts without the 'in' filter
          this.nextDataSet = this.firestore.collection('posts').ref
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
        }
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
        
        // Use totalCommentCount for display if available
        if (post.totalCommentCount !== undefined) {
          post.totalReviewCount = post.totalCommentCount;
        }
        
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
        
        // get checkins list
        this.firestore.collection('posts').doc(post.key).collection('checkins').snapshotChanges().subscribe((checkins: any) => {
          post.checkins = [];
          checkins.forEach(element => {
            const checkin = element.payload.doc.data();
            checkin.key = element.payload.doc.id;
            post.checkins.push(checkin);
          });
        });

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
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });

        // Update trending searches count
        const trendingRef = this.firestore.collection('trendingSearches').doc(searchTerm);
        await trendingRef.set({
          term: searchTerm,
          count: firebase.firestore.FieldValue.increment(1)
        }, { merge: true });
      } else {
        // Update timestamp of existing search
        const existingDoc = existingSearches.docs[0];
        await existingDoc.ref.update({
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
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

    async toggleBookmark(post: any) {
      if (!this.loggedInUserId) return;
      
      // Toggle UI state immediately for responsive feedback
      post.isBookmarked = !post.isBookmarked;
      
      try {
        // Initialize userBookmarks if needed
        if (!this.userBookmarks) this.userBookmarks = [];
        
        // Update local bookmarks array
        if (post.isBookmarked) {
          if (!this.userBookmarks.includes(post.key)) {
            this.userBookmarks.push(post.key);
          }
        } else {
          this.userBookmarks = this.userBookmarks.filter(id => id !== post.key);
        }
        
        // Update in database
        const userRef = this.firestore.collection('accounts').doc(this.loggedInUserId);
        if (post.isBookmarked) {
          await userRef.update({
            userBookmarks: firebase.firestore.FieldValue.arrayUnion(post.key)
          });
          // Update the bookmark service's BehaviorSubject
          this.bookmarkService.userBookmarks.next([...this.userBookmarks]);
        } else {
          await userRef.update({
            userBookmarks: firebase.firestore.FieldValue.arrayRemove(post.key)
          });
          // Update the bookmark service's BehaviorSubject
          this.bookmarkService.userBookmarks.next([...this.userBookmarks]);
        }
      } catch (error) {
        // Revert UI state if operation fails
        post.isBookmarked = !post.isBookmarked;
        console.error('Error toggling bookmark:', error);
      }
    }

    async sharePost(post: any) {
      try {
        // Create share content based on post type
        let shareText = '';
        let shareUrl = window.location.origin + '/post/' + post.key;
        
        if (post.title) {
          shareText += post.title;
        }
        
        if (post.data && post.data.message) {
          shareText += (shareText ? ': ' : '') + this.trimString(post.data.message, 100);
        }
        
        // Use the Web Share API if available
        if (navigator.share) {
          await navigator.share({
            title: post.title || 'Check out this post',
            text: shareText,
            url: shareUrl
          });
        } else {
          // Fallback for browsers that don't support Web Share API
          const actionSheet = await this.actionSheet.create({
            header: 'Share Post',
            cssClass: 'share-action-sheet',
            buttons: [
              {
                text: 'Copy Link',
                icon: 'link-outline',
                handler: () => {
                  this.copyToClipboard(shareUrl);
                  this.loadingProvider.showToast('Link copied to clipboard');
                }
              },
              {
                text: 'Share via Email',
                icon: 'mail-outline',
                handler: () => {
                  window.location.href = `mailto:?subject=${encodeURIComponent(post.title || 'Check out this post')}&body=${encodeURIComponent(shareText + '\\n\\n' + shareUrl)}`;
                }
              },
              {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel'
              }
            ]
          });
          await actionSheet.present();
        }
      } catch (error) {
        console.error('Error sharing post:', error);
        this.loadingProvider.showToast('Unable to share post');
      }
    }
    
    private copyToClipboard(text: string) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
}
