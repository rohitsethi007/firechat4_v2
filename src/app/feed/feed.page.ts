import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { NavController, ActionSheetController, AlertController, ModalController, IonRouterOutlet, IonInfiniteScroll } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';
import * as firebase from 'firebase';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  [x: string]: any;
  pushes: any = [];
  unreadMessagesCount: any;
  friendRequestCount: any;
  unreadGroupMessagesCount: any;
  groupList: any;
  groupsInfo: any;
  conversationList: any;
  conversationsInfo: any;
  userNotifications: any = [];
  private title: any;
  private groupId: any;
  private posts: any = [];
  private memberofGroups: any = [];
  private loggedInUser: any;
  private loggedInUserId: any;
  private firstDataSet: any;
  private lastDataSet: any;
  private maxNoOfPosts: any = 1000;

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
    public plt: Platform
    ) {
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
  }

  ionViewDidEnter() {
    this.loggedInUserId = firebase.auth().currentUser.uid;
   // Get Posts
    this.dataProvider.getCurrentUser().get().subscribe((user) => {
     this.userActivity = user.data().userActivity;
     this.loggedInUser = user.data();
     this.getFeedData();
    });
  }

  getFeedData() {
    this.firstDataSet = this.firestore.collection('posts').ref
    .where('groupId', 'in', this.loggedInUser.groups)
    .orderBy('date', 'desc')
    .limit(5);
    this.firstDataSet.get().then((po: any) => {
    this.lastDataSet = po.docs[po.docs.length - 1];
    this.posts = [];
    this.loadEachPostData(po);
});
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

  // Add or update conversaion for real-time sync of unreadMessagesCount.
  addOrUpdateConversation(conversation) {
    if (!this.conversationList) {
      this.conversationList = [conversation];
    } else {
      let index = -1;
      for (let i = 0; i < this.conversationList.length; i++) {
        if (this.conversationList[i].$key == conversation.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.conversationList[index] = conversation;
      } else {
        this.conversationList.push(conversation);
      }
    }
    this.computeUnreadMessagesCount();
  }

  // Compute all conversation's unreadMessages.
  computeUnreadMessagesCount() {
    this.unreadMessagesCount = 0;
    if (this.conversationList) {
      for (let i = 0; i < this.conversationList.length; i++) {
        this.unreadMessagesCount += this.conversationList[i].messages.length - this.conversationsInfo[i].messagesRead;
        if (this.unreadMessagesCount == 0) {
          this.unreadMessagesCount = null;
        }
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
      cssClass: 'GroupAction',
      buttons: [{
        text: 'Post',
        icon: 'chatbubbles-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.newPost();
        }
      }, {
        text: 'Resource',
        icon: 'document-outline',
        handler: () => {
          this.newResource();
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
      cssClass: 'GroupAction',
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
    switch (reactionType) {
      case 'Thanks': {
        if (!post.showSmiley) {
          this.addPostReaction(post, reactionType);
          post.showSmiley = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showSmiley = false;
          post.totalReactionCount -= 1;
        }
        break;
      }

      case 'Hug': {
        if (!post.showHug) {
          this.addPostReaction(post, reactionType);
          post.showHug = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showHug = false;
          post.totalReactionCount -= 1;
        }
        break;
      }

      case 'Checkin': {
        if (!post.showCheckin) {
          this.addPostReaction(post, reactionType);
          post.showCheckin = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showCheckin = false;
          post.totalReactionCount -= 1;
        }
        break;
      }

      case 'Bookmark': {
        if (!post.showBookmark) {
          this.addPostReaction(post, reactionType);
          post.showBookmark = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showBookmark = false;
          post.totalReactionCount -= 1;
        }
        break;
      }
    }
  }

  addPostReaction(post, reactionType) {
    // first find the post in the collection
    const postIndex = this.posts.findIndex(el => el.key ===  post.key);
    const p = this.posts[postIndex];
    this.dataProvider.getCurrentUser().get().subscribe((account: any) => {
      if (account) {
      let userNotifications = account.data().userNotifications;
      let userReactions = account.data().userReactions;

      let reaction = {
        key: '',
        dateCreated: new Date(),
        addedByUser: {
                      addedByKey: this.dataProvider.getCurrentUserId(),
                      addedByUsername: account.data().username,
                      addedByImg: account.data().img
                    },
        reactionType
    };

      if (postIndex >= 0) {
      this.dataProvider.updatePostReactions(post.key, reaction).then(() => {
        // Update user notifications.
        if (!userNotifications.some(p => p !== this.postId)) {
          userNotifications.push(this.postId);
          this.dataProvider.getUser(account.data().userId).update({
            userNotifications
          });
        }

        // Update user activity.
        if (!userReactions.some(p => p !== this.postId)) {
          userReactions.push(this.postId);
          this.dataProvider.getUser(account.data().userId).update({
            userReactions
          });
        }
      });
    }
  }
  });
  }

  removePostReaction(post, reactionType) {
    // first find the post in the collection
    const postIndex = this.posts.findIndex(el => el.key ===  post.key);
    const p = this.posts[postIndex];

    const found = false;
    if (p.reactions !== undefined) {
      let values = Object.keys(p.reactions).map(function(e) {
        return p.reactions[e];
      });

      const reaction = post.reactions.find(
        el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
        && el.reactionType === reactionType);

      console.log('reaction.key', reaction);
      this.dataProvider.removePostReaction(post.key, reaction.key);
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

  viewEvent(post) {
    this.router.navigateByUrl('post/' + post.key);
  }

  viewPoll(post) {
    this.router.navigateByUrl('post/' + post.key);
  }

  viewResource(post) {
    this.router.navigateByUrl('post/' + post.key);
  }

  viewUser(userId) {
    let loggedInUserId = this.dataProvider.getCurrentUserId();
    console.log(loggedInUserId, userId);
    if (loggedInUserId === userId) {
      this.router.navigateByUrl('/profile');
    } else {
      this.router.navigateByUrl('/userinfo/' + userId);
    }
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
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Yes',
          handler: data => {
             this.firestore.doc('posts/' + post.key).delete();
          }
        }
      ]
    }).then(r => r.present());
  }

  createPostOptionButtons(post) {
    let buttons = [];
    
    let cancelButton = {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    };

    let reportButton = {
      text: 'Report Post',
      icon: 'flag-outline',
      handler: () => {
        this.reportPost(post);
       }
      };
    let notificationButton = {};

    if (post.addedByUser.addedByKey === this.loggedInUserId) {
      const deletePostButton = {
        text: 'Delete Post',
        icon: 'trash-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.deletePost(post);
        }
      };
      buttons.push(deletePostButton);
    } else {
      if (this.userNotifications && this.userNotifications.some(el => el === post.key)) {
        notificationButton = {
            text: 'Turn Off Notifications',
            icon: 'notifications-off-outline',
            cssClass: 'actionicon',
            handler: () => {
              this.unFollowPost(post);
            }
          };
      } else {
        notificationButton = {
          text: 'Turn On Notifications',
          icon: 'notifications-outline',
          cssClass: 'actionicon',
          handler: () => {
            this.followPost(post);
          }
        };
      }
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
      const startDate = new Date(post.date);
    // Do your operations
      const endDate   = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      if (seconds > 120) {
      post.showNewIcon = false;
    } else {
      post.showNewIcon = true;
    }

      if (post.type === 'poll') {
        const today = new Date();
        const de = post.data.dateEnding.toDate();
        if (post.de < today) {
          post.pollClosed = true;
        } else {
          post.pollClosed = false;
        }
      }
      // get reactions list
      this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
        post.reactions = [];
        reactions.forEach(element => {
        let reaction = element.payload.doc.data();
        reaction.key = element.payload.doc.id;
        post.reactions.push(reaction);
      });

        // Check for Thanks
        if (reactions) {
        let foundSmiley = false;
        if (post.reactions !== undefined) {
            foundSmiley = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                          && el.reactionType === 'Thanks');
          }
        if (foundSmiley) {
            post.showSmiley = true;
          } else {
            post.showSmiley = false;
          }
          // Check for Hugs
        let foundHug = false;
        if (post.reactions !== undefined) {
            foundHug = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                        && el.reactionType === 'Hug');
          }
        if (foundHug) {
            post.showHug = true;
          } else {
            post.showHug = false;
          }

        // Check for Checkin
        let foundCheckin = false;
        if (post.reactions !== undefined) {
          foundCheckin = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                        && el.reactionType === 'Checkin');
          }
        if (foundCheckin) {
            post.showCheckin = true;
          } else {
            post.showCheckin = false;
          }

        // Check for Bookmark
        let foundBookmark = false;
        if (post.reactions !== undefined) {
          foundBookmark = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                        && el.reactionType === 'Bookmark');
          }
        if (foundBookmark) {
            post.showBookmark = true;
          } else {
            post.showBookmark = false;
          }
      }
      });
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
      this.addOrUpdatePost(post);
    });
  }

  doRefresh(event) {
    this.getFeedData();
    event.target.complete();
  }
}
