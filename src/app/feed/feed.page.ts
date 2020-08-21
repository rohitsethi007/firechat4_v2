import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { NavController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
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
  private memberofGroups: any = [];

  constructor(
    public dataProvider: DataService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
    public loadingProvider: LoadingService,
    public actionSheet: ActionSheetController,
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

   // Get Posts
   this.dataProvider.getCurrentUser().get().subscribe((groups) => {
     console.log('groups:', groups.data().groups);
     this.firestore.collection('posts').ref.where('groupId', 'in', groups.data().groups).orderBy("date","desc").onSnapshot((po: any) => {
      this.posts = [];
      console.log('refresh posts list');
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

          // Check for Hugs
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
        }

        });
        post.postTags = post.postTags.filter(x => x.isChecked !== false);
        this.addOrUpdatePost(post);
  });
});
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
        var index = -1;
        for (var i = 0; i < this.conversationList.length; i++) {
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
        for (var i = 0; i < this.conversationList.length; i++) {
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
        }]
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
      }
    }

    addPostReaction(post, reactionType) {
      // first find the post in the collection
      const postIndex = this.posts.findIndex(el => el.key ===  post.key);
      const p = this.posts[postIndex];
      this.dataProvider.getCurrentUser().get().subscribe((account: any) => {
        if (account) {
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
        this.dataProvider.updatePostReactions(post.key, reaction);
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
    this.router.navigateByUrl('event/' + post.key);
  }

  viewPoll(post) {
    this.router.navigateByUrl('poll/' + post.key);
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
}
