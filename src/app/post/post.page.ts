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
import { ImagemodalPage } from '../imagemodal/imagemodal.page';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as firebase from 'firebase/app';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmojiPickerComponentModule } from '../components/emoji-picker/emoji-picker.module';
import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker.component';
import { AngularFireAuth } from '@angular/fire/auth';
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
// Add interface for user data
interface UserDocument {
  userReactions: any[];
  userNotifications: any[];
  username: string;
  img: string;
  groups: string[];
  // add other properties as needed
}
interface PollOption {
  name: string;
  members: string[] | null;
}

interface PollData {
  pollOptions: PollOption[];
  dateEnding: any; // Replace 'any' with proper Firebase Timestamp type if available
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
  loggedInUser: UserDocument | null = null;
  userNotifications: any[] = [];

  // Poll related fields
  private poll: any;
  private pollId: any;
  private pollOptionForm: FormGroup;
  private optionsArray: string[];
  chartData: any[] = [
    {
      data: [],
      label: 'Votes'
    }
  ];
  chartLabels: string[] = [];
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  };
  chartColors = [
    {
      backgroundColor: 'rgba(66, 133, 244, 0.3)',
      borderColor: 'rgb(66, 133, 244)',
      borderWidth: 2
    }
  ];
  showLegend = false;
  chartType = 'pie';

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
    private afAuth: AngularFireAuth
  ) {
   // this.reviewMedia.push('https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/images%2Fposts%2FkjD2RUnc.jpg?alt=media&token=d0073c88-58cf-4fc0-9e5c-c6a491bb2673');
    this.post = {reactionType: '', addedByUser: {}, data: {}, date: firebase.default.firestore.Timestamp.now(), reviewMedia: []};
    this.pollOptionForm = new FormGroup({
      selected_poll_option: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.getPostDetails();
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
        this.title = post.data().title;
        let totalReactionCount = 0;
        let totalReviewCount = 0;
        // p.postTags = p.postTags.filter(x => x.isChecked !== false);

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

        // poll related data
        if (p.type === 'poll') {
          console.log('inside poll');
          this.initializePollData(p)
        }
        this.post = p;
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

  submitReply() {
    this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br>');
    let review: any;
    let currentUserName: any;
    console.info('submitReview', this.message)
    this.dataProvider.getCurrentUser().then((u) => {

      u.get().subscribe((account: any) => {
        if (account) {
          currentUserName = account.data().username;
          console.info('submitReview1', currentUserName)
          review = {
            dateCreated: new Date(),
            addedByUser: {
               addedByKey: this.loggedInUserId,
               addedByUsername: account.data().username,
               addedByImg: account.data().img
             },
            review: this.message,
            reviewMedia: this.reviewMedia
          };
 
          this.dataProvider.updatePostReviews(this.postId, review);
          this.message = '';
          this.reviewMedia = [];
         }});
    })
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
  
  toggleBookmark(post: any) {
    post.isBookmarked = !post.isBookmarked;
    // Implement your bookmark logic here
  }
  
  private initializePollData(p: any) {
    if (p.type !== 'poll') return;
  
    console.log('Initializing poll data');
  
    try {
      // Initialize chart arrays
      this.chartLabels = [];
      this.chartData[0].data = [];
  
      // Process poll options
      p.data.pollOptions.forEach((option: PollOption, index: number) => {
        if (option) {
          // Add vote count
          const voteCount = option.members?.length || 0;
          this.chartData[0].data.push(voteCount);
  
          // Add label
          this.chartLabels.push(option.name);
        }
      });
  
      // Check if poll is closed
      const today = new Date();
      const pollEndDate = p.data.dateEnding.toDate();
      this.pollClosed = pollEndDate < today;
  
      // Check if user has voted
      this.voted = p.data.pollOptions.some((option: PollOption) => 
        option.members?.includes(this.loggedInUserId)
      );
  
      // Reset selected option
      this.selectedOption = '';
  
      // Optional: Log chart data for debugging
      console.log('Chart Data:', {
        labels: this.chartLabels,
        data: this.chartData[0].data,
        voted: this.voted,
        closed: this.pollClosed
      });
  
    } catch (error) {
      console.error('Error initializing poll data:', error);
      // Handle error appropriately
    }
  }
}
