import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Chart } from 'chart.js';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import * as firebase from 'firebase/app';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmojiPickerComponentModule } from '../components/emoji-picker/emoji-picker.module';
import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { BookmarkService } from '../services/bookmark.service';
interface Reaction {
  payload: any;
  id?: string;
  addedByUser: {
    addedByImg: string;
    addedByKey: string;
    addedByUsername: string;
  };
  dateCreated: string;
  reactionType: string;
}
interface Checkin {
  payload: any;
  id?: string;
  addedByUser: {
    addedByImg: string;
    addedByKey: string;
    addedByUsername: string;
  };
  dateCreated: string;
}
// Add interface for user data
interface UserDocument {
  userReactions: any[];
  userNotifications: any[];
  userBookmarks: any[];
  username: string;
  img: string;
  groups: string[];
  // add other properties as needed
}
interface PollOption {
  name: string;
  members: string[] | null;
}
// First, define your interfaces
interface Comment {
  id?: string;
  postId: string;
  content: string;
  addedByUser: {
    addedByKey: string;
    addedByUsername: string;
    addedByImg: string;
  };
  createdAt: any;
  parentId?: string; // Reference to parent comment
  likes?: number;
  likedBy?: string[]; // Array of user IDs who liked the comment
  replies?: Comment[]; // Array to hold replies
  showReplyInput?: boolean;
  replyText?: string;
}
interface PollData {
  pollOptions: PollOption[];
  dateEnding: any; // Replace 'any' with proper Firebase Timestamp type if available
}
interface FirestoreComment extends Omit<Comment, 'id'> {
  // This interface represents the data as it exists in Firestore
}
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private postId: any;
  private post: any;
  private title: any;
  private postReviews: any;
  private message: any;
  private notifications: any = [];
  private loggedInUserId: any;
  private reviewMedia: any = [];
  userReactions: any[] = [];
  private uploadingImage: boolean;
  private reactionSubscription: Subscription;
  private checkinSubscription: Subscription;
  loggedInUser: UserDocument | null = null;
  userNotifications: any[] = [];
  userBookmarks: any[] = [];

  isBookmarked: false;

  newComment: string = '';
  currentUserAvatar: string; // Set this from your auth service
  
  // Add this to your existing properties
  comments: Comment[] = [];


  // Poll related fields
  private poll: any;
  private pollId: any;
  private pollOptionForm: FormGroup;
  private optionsArray: string[];
  chartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Votes'
    }
  ];
  chartLabels: Label[] = [];
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right', // Changed to right to save vertical space
        align: 'center',
        labels: {
          boxWidth: 10,
          padding: 6,
          font: {
            size: 11
          }
        }
      }
    }
  };
  
  chartColors: Color[] = [
    {
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 0
    }
  ];
  showLegend = true;
  chartType = 'pie'; // or 'bar' depending on your preference

  voted = false;
  pollClosed = false;
  selectedOption = '';

  private slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
   };
  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    public firestore: AngularFirestore,
    public actionSheet: ActionSheetController,
    private modalCtrl: ModalController,
    public imageProvider: ImageService,
    public camera: Camera,
    public keyboard: Keyboard,
    public contacts: Contacts,
    public geolocation: Geolocation,
    public alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    private afAuth: AngularFireAuth,
    private bookmarkService: BookmarkService
  ) {
   // this.reviewMedia.push('https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/images%2Fposts%2FkjD2RUnc.jpg?alt=media&token=d0073c88-58cf-4fc0-9e5c-c6a491bb2673');
    this.post = {reactionType: '', addedByUser: {}, data: {}, date: firebase.default.firestore.Timestamp.now(), reviewMedia: []};
    this.pollOptionForm = new FormGroup({
      selected_poll_option: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ionViewDidEnter() {
    this.loggedInUserId = firebase.default.auth().currentUser.uid;
    console.log('Entering feed view');
    
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      console.log('Current user:', this.loggedInUserId);
  
      // Get Posts with snapshot changes to get real-time updates
      this.dataProvider.getCurrentUser().then((u) => {
        u.get({ source: 'server' }).subscribe((user) => { // Force server fetch
          const userData = user.data() as UserDocument;
          if (userData) {
            this.userNotifications = userData.userNotifications || [];
            this.loggedInUser = userData;
            this.userBookmarks = userData.userBookmarks || [];
            console.info('userData', userData)

            this.getPostDetails();
          }
        });
      });
    });

  }

  ngOnInit() {

  }

  getPostDetails() {
    this.loadingProvider.show();
    this.postId = this.route.snapshot.params.id;
    this.post.reviews = [];
    this.dataProvider.getPostDetails(this.postId).get().subscribe((post: any) => {
      if (post) {
        let p = post.data(); 
        console.info('p', p)
        p.reactions = [];
        p.key = post.id;
        p.checkins = []; // Initialize empty array
        p.totalCheckinCount = 0; // Initialize count
        this.title = post.data().title;
        let totalReactionCount = 0;
        let totalReviewCount = 0;

        // get Reactions Collection
        this.reactionSubscription = this.firestore
            .collection('posts')
            .doc(post.id)
            .collection<Reaction>('reactions')
            .snapshotChanges()
            .pipe(
              map(actions => actions.map(a => ({
                id: a.payload.doc.id,
                ...a.payload.doc.data()
              })))
            )
            .subscribe({
              next: (reactions) => {
                if (reactions) {
                  p.reactions = reactions;
                  totalReactionCount = reactions.length;

                  if (reactions.length > 0) {
                    this.post.reactionType = reactions.find(el => 
                      el.addedByUser?.addedByKey === this.loggedInUserId
                    )?.reactionType || '';;
                  } else {
                    this.post.reactionType = '';
                  }
                  p.totalReactionCount = totalReactionCount;
                  
                }
              },
              error: (error) => {
                console.error('Error fetching reactions:', error);
              }
            });


        // get reviews list
        this.firestore.collection('posts').doc(post.id).collection('reviews')
        .ref.orderBy("dateCreated", "desc").onSnapshot((reviews: any) => {
          this.post.reviews = [];
          p.reviews = [];
          reviews.forEach(element => {
            let review = element.data();
            review.key = element.id;
            p.reviews.push(review);
          });
          totalReviewCount = p.reviews.length;
          p.totalReviewCount = totalReviewCount;
          this.postReviews = p.reviews;

          if (p.reviews !== undefined) {
              this.postReviews = [];
              let values = Object.keys(p.reviews).map(function(e) {
                p.reviews[e].key = e;
                return p.reviews[e];
              });
              this.postReviews = values;
              this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
            }

        });

         // Get checkins
         this.checkinSubscription = this.firestore
         .collection('posts')
         .doc(post.id)
         .collection<Checkin>('checkins')
         .snapshotChanges()
         .pipe(
           map(actions => actions.map(a => ({
             id: a.payload.doc.id,
             ...a.payload.doc.data()
           })))
         )
         .subscribe({
           next: (checkins) => {
             if (checkins) {
               p.checkins = checkins;
               p.totalCheckinCount = checkins.length;

               if (checkins.length > 0) {
                 this.post.showCheckin = checkins.some(checkin => 
                  checkin.addedByUser?.addedByKey === this.loggedInUserId
                );
               } else {
                 this.post.showCheckin = false;
               }
             }
           },
           error: (error) => {
             console.error('Error fetching reactions:', error);
           }
         });
         console.info('this.userBookmarks', this.userBookmarks)
         console.info('post.id', post.id) 
         p.isBookmarked = this.userBookmarks?.includes(post.id) || false;
        // poll related data
        if (p.type === 'poll') {
          console.log('inside poll');
          this.initializePollData(p)
        }
        this.post = p;
        console.info('post', this.post)
        this.loadComments();
      }
      this.loadingProvider.hide();
    });
  }
  async showReactionsList() {
    if (this.post.totalReactionCount === 0) {
      return;
    }
    const p = this.post;
    const modal = await this.modalCtrl.create({
       component: ReactionListModalPage,
       componentProps: {
         reactions: p.reactions
       }
     });
    return await modal.present();
  }


  attach() {
    this.actionSheet.create({
      header: 'Choose images',
      buttons: [{
        text: 'Camera',
        handler: () => {
          this.uploadingImage = true;
          this.imageProvider.uploadPostReactionPhoto(this.postId, this.loggedInUserId, this.camera.PictureSourceType.CAMERA).then((url) => {
            this.reviewMedia.push(url);
            this.uploadingImage = false;
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          this.uploadingImage = true;
          this.imageProvider.uploadPostReactionPhoto(this.postId, this.loggedInUserId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            this.reviewMedia.push(url);
            this.uploadingImage = false;
          });
        }
      },  {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }]
    }).then(r => r.present());
  }

  removeMedia(media) {
    this.reviewMedia.splice();
    this.reviewMedia = this.reviewMedia.filter(x => x !== media);
    this.imageProvider.deletePostPhoto(media);
  }

viewUser(userId) {
    if (this.loggedInUserId === userId) {
      this.router.navigateByUrl('/profile');
    } else {
      this.router.navigateByUrl('/userinfo/' + userId);
    }
  }

viewGroup(groupId) {
    this.router.navigateByUrl('/group/' + groupId);
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

  followPost(post) {
    if (!this.notifications) {
      this.notifications = [post.key];
    } else {
      this.notifications.push(post.key);
    }

    this.dataProvider.getUser(this.loggedInUserId).update({
      notifications: this.notifications
    }).then(() => {
      this.loadingProvider.showToast('You will be notified when there are new replies');
    });
  }

  unFollowPost(post) {
    const index = this.notifications.indexOf(post.key, 0);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }

    this.dataProvider.getUser(this.loggedInUserId).update({
      notifications: this.notifications
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
          handler: async () => {
            await this.firestore.doc('posts/' + post.key).delete();
            // Navigate to tab1
            //TODO
            this.router.navigateByUrl('/tabs/tab1');
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
      if (this.notifications && this.notifications.some(el => el === post.key)) {
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

  vote() {
    const pollOptionIndex = this.pollOptionForm.value["selected_poll_option"];
    console.log('pollOptionIndex', pollOptionIndex);
    const members = [];
    members.push(this.loggedInUserId);
    this.post.data.pollOptions[pollOptionIndex].members = members;
    this.voted = true;
    this.dataProvider.updatePollMembers(this.postId, this.post.data);
    this.ngOnInit();
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

  submitReactionPost(post, reactionType) {
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
    const p = this.post;

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
    const p = this.post;
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
  
  sharePost(post: any) {
    // Implement your share logic here
  }
  
  async toggleBookmark(post: any) {
    const userId = this.loggedInUserId;
    post.isBookmarked = await this.bookmarkService.toggleBookmark(
      post, 
      userId, 
      this.userBookmarks
    );
  }
  
private initializePollData(p: any) {
  if (p.type !== 'poll') return;

  console.log('Initializing poll data');

  try {
    // Reset arrays
    this.chartLabels = [];
    this.chartData[0].data = [];

    // Process poll options
    p.data.pollOptions.forEach((option: PollOption, index: number) => {
      if (option) {
        const voteCount = option.members?.length || 0;
        console.log(`Option ${option.name}: ${voteCount} votes`);
        
        this.chartData[0].data.push(voteCount);
        this.chartLabels.push(option.name);
      }
    });

    // Force chart update
    this.chartData = [...this.chartData];
    
    // Check if user has voted
    this.voted = p.data.pollOptions.some((option: PollOption) => 
      option.members?.includes(this.loggedInUserId)
    );

    // Check if poll is closed
    const today = new Date();
    const pollEndDate = p.data.dateEnding.toDate();
    this.pollClosed = pollEndDate < today;

    console.log('Chart initialization complete:', {
      data: this.chartData[0].data,
      labels: this.chartLabels,
      voted: this.voted,
      closed: this.pollClosed
    });

  } catch (error) {
    console.error('Error initializing poll data:', error);
  }
}

copyLink(link: string) {
  navigator.clipboard.writeText(link);
  // Show toast or notification
}

async submitReactionCheckin() {
  try {
    // Get current checkins from Firestore
    const checkinsRef = this.firestore.collection('posts').doc(this.post.key).collection('checkins');
    const checkinSnapshot = await checkinsRef.ref.where('addedByUser.addedByKey', '==', this.loggedInUserId).get();

    if (!checkinSnapshot.empty) {
      // User has already checked in - remove the checkin
      this.post.showCheckin = false
      const checkinDoc = checkinSnapshot.docs[0];
      await checkinsRef.doc(checkinDoc.id).delete();

      // Update local count
      this.post.totalCheckinCount = (this.post.totalCheckinCount || 1) - 1;
    } else {
      // Add new checkin
      const checkinData = {
        dateCreated: new Date(),
        addedByUser: {
          addedByKey: this.loggedInUserId,
          addedByUsername: this.loggedInUser.username,
          addedByImg: this.loggedInUser.img
        }
      };

      // Add to Firestore
      await checkinsRef.add(checkinData);
      
      // Update local count
      this.post.totalCheckinCount = (this.post.totalCheckinCount || 0) + 1;
      this.post.showCheckin = true
    }

  } catch (error) {
    console.error('Error handling checkin:', error);
    this.loadingProvider.showToast('Error updating check-in. Please try again.');
  }
}

async showCheckinsList() {
  if (this.post.totalCheckinCount === 0) {
    return;
  }
  const p = this.post;
  const modal = await this.modalCtrl.create({
     component: ReactionListModalPage,
     componentProps: {
       reactions: p.checkins
     }
   });
  return await modal.present();
}
async submitComment() {
  if (!this.newComment?.trim()) return;

  try {
    const commentData = {
      postId: this.post.key,
      content: this.newComment,
      addedByUser: {
        addedByKey: this.loggedInUserId,
        addedByUsername: this.loggedInUser.username,
        addedByImg: this.loggedInUser.img
      },      
      createdAt: new Date(),
      likes: 0
    };

    await this.firestore
      .collection('comments')
      .add(commentData);

    // Clear input after successful submission
    this.newComment = '';
    
    // Update comment count
    this.post.totalReviewCount++;
    
    // Optionally, refresh comments
    this.loadComments();
  } catch (error) {
    console.error('Error submitting comment:', error);
    // Handle error (show toast or alert)
  }
}

loadComments() {
  if (!this.post?.key) return;

  this.firestore
    .collection<Comment>('comments', ref => 
      ref.where('postId', '==', this.post.key)
      .orderBy('createdAt', 'desc')
    )
    .snapshotChanges()
    .subscribe(actions => {
      const allComments = actions.map(action => ({
        id: action.payload.doc.id,
        ...action.payload.doc.data(),
        replies: [],
        showReplyInput: false,
        replyText: ''
      } as Comment));

      // Build tree with max 2 levels
      this.comments = this.buildCommentTree(allComments, 2);
    });
}


async likeComment(comment: Comment) {
  try {
    const commentRef = this.firestore.collection('comments').doc(comment.id);
    
    // Get current data first
    const doc = await commentRef.get().toPromise();
    const currentData = doc?.data() as { likes?: number; likedBy?: string[] };
    
    const currentLikes = currentData?.likes || 0;
    const currentLikedBy = currentData?.likedBy || [];
    
    const isLiked = currentLikedBy.includes(this.loggedInUserId);

    if (!isLiked) {
      // Add like
      await commentRef.update({
        likes: currentLikes + 1,
        likedBy: [...currentLikedBy, this.loggedInUserId]
      });
    } else {
      // Remove like
      await commentRef.update({
        likes: Math.max(currentLikes - 1, 0),
        likedBy: currentLikedBy.filter(id => id !== this.loggedInUserId)
      });
    }
  } catch (error) {
    console.error('Error updating like:', error);
    this.loadingProvider.showToast('Error updating like. Please try again.');
  }
}

// Helper method to check if user liked a comment
isCommentLikedByUser(comment: Comment): boolean {
  return comment?.likedBy?.includes(this.loggedInUserId) || false;
}



replyToComment(comment: Comment) {
  // Implement reply functionality
}

deleteComment(comment: Comment) {
  // Implement delete functionality
}

toggleReplyInput(comment: any) {
  // Toggle reply input visibility
  comment.showReplyInput = !comment.showReplyInput;
  if (!comment.showReplyInput) {
    comment.replyText = ''; // Clear reply text when hiding input
  }
}
async submitReply(parentComment: Comment) {
  if (!parentComment.replyText?.trim()) return;

  try {
    // Check if the parent comment is already a reply
    if (parentComment.parentId) {
      this.loadingProvider.showToast('Replies are limited to one level deep');
      return;
    }

    const replyData = {
      postId: this.post.key,
      parentId: parentComment.id,
      content: parentComment.replyText,
      addedByUser: {
        addedByKey: this.loggedInUserId,
        addedByUsername: this.loggedInUser.username,
        addedByImg: this.loggedInUser.img
      },
      createdAt: new Date()
    };

    await this.firestore
      .collection('comments')
      .add(replyData);

    parentComment.replyText = '';
    parentComment.showReplyInput = false;

  } catch (error) {
    console.error('Error submitting reply:', error);
    this.loadingProvider.showToast('Error submitting reply. Please try again.');
  }
}

private buildCommentTree(comments: Comment[], maxDepth: number = 2): Comment[] {
  const commentMap = new Map<string, Comment>();
  const rootComments: Comment[] = [];

  // First pass: create map of all comments
  comments.forEach(comment => {
    commentMap.set(comment.id!, comment);
  });

  // Second pass: create tree structure with depth limit
  comments.forEach(comment => {
    if (comment.parentId) {
      // Only add as reply if parent exists and it's not already a reply (depth = 1)
      const parent = commentMap.get(comment.parentId);
      if (parent && !parent.parentId) { // Check if parent is a root comment
        parent.replies = parent.replies || [];
        parent.replies.push(comment);
      }
    } else {
      // This is a root comment
      rootComments.push(comment);
    }
  });

  return rootComments;
}

}


