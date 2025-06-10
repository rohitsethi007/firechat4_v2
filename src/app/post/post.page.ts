import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Validators, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';
import { NotificationsService } from '../services/notifications.service';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';
import { CameraSource } from '@capacitor/camera';
import { Keyboard } from '@capacitor/keyboard';
import { Chart, ChartConfiguration, ChartData } from 'chart.js';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker.component';
import { BookmarkService } from '../services/bookmark.service';
import { Reaction, Checkin, UserDocument, PollOption, Comment, PollData} from '../models/interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

// Register the required Chart.js components
import { 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // for pie charts
} from 'chart.js';
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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
  private keyboard = Keyboard;
  isBookmarked: false;

  newComment: string = '';
  currentUserAvatar: string; // Set this from your auth service
  
  // Add this to your existing properties
  comments: Comment[] = [];


  // Poll related fields
  private poll: any;
  private pollId: any;
  private pollOptionForm: UntypedFormGroup;
  private optionsArray: string[];
   // Update chart properties
   chartData: ChartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [{
      data: [65, 59, 80],
      label: 'Poll Results',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  };


  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

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
    public notificationsService: NotificationsService,
    public alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
    private afAuth: AngularFireAuth,
    private bookmarkService: BookmarkService
  ) {
    this.post = {reactionType: '', addedByUser: {}, data: {}, date: firebase.firestore.Timestamp.now(), reviewMedia: []};
    this.pollOptionForm = new UntypedFormGroup({
      selected_poll_option: new UntypedFormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ionViewDidEnter() {
    this.loggedInUserId = firebase.auth().currentUser.uid;
    
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
  
      // Get Posts with snapshot changes to get real-time updates
      this.dataProvider.getCurrentUser().then((u) => {
        u.get({ source: 'server' }).subscribe((user) => { // Force server fetch
          const userData = user.data() as UserDocument;
          if (userData) {
            this.userNotifications = userData.userNotifications || [];
            this.loggedInUser = userData;
            this.userBookmarks = userData.userBookmarks || [];
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
        p.reactions = [];
        p.key = post.id;
        p.checkins = []; // Initialize empty array
        p.totalCheckinCount = 0; // Initialize count
        this.title = post.data().title;
        let totalReactionCount = 0;
        let totalReviewCount = 0;
        
        // Initialize totalCommentCount if it doesn't exist
        if (p.totalCommentCount === undefined) {
          p.totalCommentCount = 0;
        }

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
                this.loadingProvider.showToast('Error fetching reactions. Please try again.');
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
            this.loadingProvider.showToast('Error fetching reactions. Please try again.'); 
           }
         });
         p.isBookmarked = this.userBookmarks?.includes(post.id) || false;
        // poll related data
        if (p.type === 'poll') {
          this.initializePollData(p)
        }
        this.post = p;
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
          this.imageProvider.uploadPostReactionPhoto(this.postId, this.loggedInUserId, CameraSource.Camera).then((url) => {
            this.reviewMedia.push(url);
            this.uploadingImage = false;
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          this.uploadingImage = true;
          this.imageProvider.uploadPostReactionPhoto(this.postId, this.loggedInUserId, CameraSource.Photos).then((url) => {
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
    
    // Initialize members array if it doesn't exist
    if (!this.post.data.pollOptions[pollOptionIndex].members) {
      this.post.data.pollOptions[pollOptionIndex].members = [];
    }
    
    // Add current user to members
    this.post.data.pollOptions[pollOptionIndex].members.push(this.loggedInUserId);
    
    // Set voted flag
    this.voted = true;
    
    // Update poll in database
    this.dataProvider.updatePollMembers(this.postId, this.post.data);
    
    // Manually update the chart data
    const labels: string[] = [];
    const data: number[] = [];
    
    // Process poll options
    this.post.data.pollOptions.forEach((option: PollOption) => {
      if (option) {
        const voteCount = option.members?.length || 0;
        labels.push(option.name);
        data.push(voteCount);
      }
    });
    
    // Update chart data
    this.chartData = {
      labels: labels,
      datasets: [{
        data: data,
        label: 'Votes',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };
    
    // Show success message
    this.loadingProvider.showToast('Your vote has been recorded');
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
      this.submitReactionPost(data.post, data.emoji.value);
    }
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
    const p = this.post;
    if (p.reactions && p.reactions.length > 0) {
      const reaction = p.reactions.find(
        el => el.addedByUser.addedByKey === this.loggedInUserId);

      if (reaction && reaction.reactionType === reactionType && reaction.id) {
        this.dataProvider.removePostReaction(post.key, reaction.id);
      } 
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
        shareText += (shareText ? ': ' : '') + (post.data.message.length > 100 ? 
          post.data.message.substring(0, 100) + '...' : post.data.message);
      }
      
      // Use the Web Share API if available
      if (navigator.share) {
        try {
          await navigator.share({
            title: post.title || 'Check out this post',
            text: shareText,
            url: shareUrl
          });
        } catch (shareError) {
          // Only show error if it's not an AbortError (user canceled)
          if (!(shareError instanceof DOMException && shareError.name === 'AbortError')) {
            console.error('Share error:', shareError);
          }
        }
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
        // Update the bookmark service
        this.bookmarkService.userBookmarks.next([...this.userBookmarks]);
      } else {
        await userRef.update({
          userBookmarks: firebase.firestore.FieldValue.arrayRemove(post.key)
        });
        // Update the bookmark service
        this.bookmarkService.userBookmarks.next([...this.userBookmarks]);
      }
    } catch (error) {
      // Revert UI state if operation fails
      post.isBookmarked = !post.isBookmarked;
      console.error('Error toggling bookmark:', error);
    }
  }
  
  private initializePollData(p: any) {
    if (p.type !== 'poll') return;

    try {
      // Create new arrays for labels and data
      const labels: string[] = [];
      const data: number[] = [];

      // Process poll options
      p.data.pollOptions.forEach((option: PollOption) => {
        if (option) {
          const voteCount = option.members?.length || 0;
          
          labels.push(option.name);
          data.push(voteCount);
        }
      });

      // Update chart data
      this.chartData = {
        labels: labels,
        datasets: [{
          data: data,
          label: 'Votes',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      };

      // Check if user has voted
      this.voted = p.data.pollOptions.some((option: PollOption) => 
        option.members?.includes(this.loggedInUserId)
      );

      // Check if poll is closed
      const today = new Date();
      const pollEndDate = p.data.dateEnding.toDate();
      this.pollClosed = pollEndDate < today;

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

    // Add the comment
    await this.firestore
      .collection('comments')
      .add(commentData);

    // Update the post's comment count in Firestore
    await this.firestore.collection('posts').doc(this.post.key).update({
      totalCommentCount: firebase.firestore.FieldValue.increment(1),
      totalReviewCount: firebase.firestore.FieldValue.increment(1)
    });

    // Clear input after successful submission
    this.newComment = '';
    
    // Update comment count in local post object
    this.post.totalReviewCount = (this.post.totalReviewCount || 0) + 1;
    this.post.totalCommentCount = (this.post.totalCommentCount || 0) + 1;

    // add Notifications
    await this.notificationsService.createNotification({
      type:  'comment' as const,  // use type assertion,
      fromUser: {
        userId: this.loggedInUserId,
        username: this.loggedInUser.username,
        userImg: this.loggedInUser.img
      },
      toUserId: this.post.addedByUser.addedByKey,
      postId: this.postId,
      content: 'commented on your post'
    });
     
    this.loadComments();
  } catch (error) {
    this.loadingProvider.showToast('Error submitting comments. Please try again.');
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
      
      // Update the comment count in the post object and in Firestore
      const commentCount = allComments.length;
      this.post.totalReviewCount = commentCount;
      
      // Update the count in Firestore if it doesn't match
      this.firestore.collection('posts').doc(this.post.key).update({
        totalCommentCount: commentCount
      });
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


