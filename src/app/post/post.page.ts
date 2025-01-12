import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
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
  private uploadingImage: boolean;
  private reactionSubscription: Subscription;
  // Poll related fields
  private poll: any;
  private pollId: any;
  private pollOptionForm: FormGroup;
  private optionsArray: string[];
  private selectedOption: any;
  private voted: any;
  private pollClosed: any;
  private chartType = 'pie';
   // Data
   chartData: ChartDataSets[] = [{ data: [], label: 'Poll Results', backgroundColor: [
    "#f43004",
    "#decf3f",
    "#FFA500",
    "#9b59b6",
  ],
 }];
   chartLabels: Label[];

   // Options
   chartOptions =   {
    legend: {
      display: true
    },
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="0-legend">');
      var ds = this.chartData.datasets[0];
      var sum = ds.data.reduce(function add(a, b) {
        return a + b;
      }, 0);
      for (var i = 0; i < ds.data.length; i++) {
        text.push('<li>');
        var perc = Math.round(100 * ds.data[i] / sum);
        // tslint:disable-next-line: max-line-length
        text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + this.chartData.labels[i] + ' (' + ds.data[i] + ') (' + perc + '%)');
        text.push('</li>');
      }
      text.push('</ul>');
      return text.join('');
    }
  };



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
    public alertCtrl: AlertController
  ) {
   // this.reviewMedia.push('https://firebasestorage.googleapis.com/v0/b/firechat-8fb8c.appspot.com/o/images%2Fposts%2FkjD2RUnc.jpg?alt=media&token=d0073c88-58cf-4fc0-9e5c-c6a491bb2673');
    this.post = {showSmiley: false, showHug: false, addedByUser: {}, data: {}, date: firebase.default.firestore.Timestamp.now(), reviewMedia: []};
    this.pollOptionForm = new FormGroup({
      selected_poll_option: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.getPostDetails();
  }

  ionViewDidEnter() {
    this.loggedInUserId = firebase.default.auth().currentUser.uid;
  }

  ngOnInit() {
  }

  getPostDetails() {
    this.loadingProvider.show();
    this.postId = this.route.snapshot.params.id;
    this.post.reactions = [];
    this.post.reviews = [];
    this.dataProvider.getPostDetails(this.postId).get().subscribe((post: any) => {
      if (post) {
        let p = post.data(); 
        p.reactions = [];
        p.key = post.id;
        this.title = post.data().title;
        let totalReactionCount = 0;
        let totalReviewCount = 0;
        p.postTags = p.postTags.filter(x => x.isChecked !== false);

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
                  // Check for Thanks
                  p.showSmiley = reactions.some(el => {
                    const keyMatch = String(el.addedByUser?.addedByKey) === String(this.loggedInUserId);
                    const typeMatch = Array.isArray(el.reactionType) 
                      ? el.reactionType.includes('Thanks')
                      : el.reactionType === 'Thanks';
                    return keyMatch && typeMatch;
                  });
                  

                  // Check for Hugs
                  p.showHug = reactions.some(el => {
                    const keyMatch = String(el.addedByUser?.addedByKey) === String(this.loggedInUserId);
                    const typeMatch = Array.isArray(el.reactionType) 
                      ? el.reactionType.includes('Hug')
                      : el.reactionType === 'Hug';
                    return keyMatch && typeMatch;
                  });
  
                  // Check for Checkin
                  p.showCheckin = reactions.some(el => {
                    const keyMatch = String(el.addedByUser?.addedByKey) === String(this.loggedInUserId);
                    const typeMatch = Array.isArray(el.reactionType) 
                      ? el.reactionType.includes('Checkin')
                      : el.reactionType === 'Checkin';
                    return keyMatch && typeMatch;
                  });
  
                  // Check for Bookmark
                  p.showBookmark = reactions.some(el => {
                    const keyMatch = String(el.addedByUser?.addedByKey) === String(this.loggedInUserId);
                    const typeMatch = Array.isArray(el.reactionType) 
                      ? el.reactionType.includes('Bookmark')
                      : el.reactionType === 'Bookmark';
                    return keyMatch && typeMatch;
                  });
  
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
          let pollOption0Votes;
          let pollOption1Votes;
          let pollOption2Votes;
          let pollOption3Votes;

          let pollOption0Name: string;
          let pollOption1Name: string;
          let pollOption2Name: string;
          let pollOption3Name: string;

          pollOption0Name = p.data.pollOptions[0].name;
          pollOption1Name = p.data.pollOptions[1].name;

          if (p.data.pollOptions[2] != null) {
            pollOption2Name = p.data.pollOptions[2].name;
          }
          if (p.data.pollOptions[3] != null) {
            pollOption3Name = p.data.pollOptions[3].name;
          }

          if (p.data.pollOptions[0].members == null) {
            pollOption0Votes = 0;
          } else {
            pollOption0Votes = p.data.pollOptions[0].members.length;
          }

          if (p.data.pollOptions[1].members == null) {
            pollOption1Votes = 0;
          } else {
            pollOption1Votes = p.data.pollOptions[1].members.length;
          }

          if (p.data.pollOptions[2] == null || p.data.pollOptions[2].members == null) {
            pollOption2Votes = 0;
          } else {
            pollOption2Votes = p.data.pollOptions[2].members.length;
          }

          if (p.data.pollOptions[3] == null || p.data.pollOptions[3].members == null) {
            pollOption3Votes = 0;
          } else {
            pollOption3Votes = p.data.pollOptions[3].members.length;
          }

        // this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
        // this.chartData = [pollOption0Votes, pollOption1Votes, pollOption3Votes, pollOption3Votes];
          this.chartLabels = [];
          this.chartData[0].data = [];

          this.chartData[0].data.push(pollOption0Votes);
          this.chartData[0].data.push(pollOption1Votes);
          this.chartLabels.push(pollOption0Name);
          this.chartLabels.push(pollOption1Name);

          if (p.data.pollOptions[2] != null) {
            this.chartData[0].data.push(pollOption2Votes);
            this.chartLabels.push(pollOption2Name);
          }
          if (p.data.pollOptions[3] != null) {
            this.chartData[0].data.push(pollOption3Votes);
            this.chartLabels.push(pollOption3Name);
          }

          this.selectedOption = '';
          this.voted = false;

          const today = new Date();
          const de = p.data.dateEnding.toDate();
          if (de < today) {
            this.pollClosed = true;
          } else {
            this.pollClosed = false;
          }
          p.data.pollOptions.forEach(pollOption => {
            if (pollOption.members != null) {
              pollOption.members.forEach(member => {
                if (member === this.loggedInUserId) {
                  this.voted = true;
                }
              });
            }
          });
        }
        this.post = p;
      }
      this.loadingProvider.hide();
    });
  }

  submitReactionSmile() {
    const reaction = this.post.reactions.find(
      el => el.addedByUser.addedByKey === this.loggedInUserId
      && el.reactionType === 'Thanks');
      console.info('found reaction', reaction)
    if (reaction === undefined) {
      this.dataProvider.getCurrentUser().then((u) => {
        u.get().subscribe((account: any) => {
 
          let userNotifications = account.data().userNotifications;
          let userReactions = account.data().userReactions;
  
          if (!userNotifications) { userNotifications = [] as string[]; }
          if (!userReactions) { userReactions = [] as string[]; }
  
          if (account) {
            const currentUserName = account.data().username;
            let reaction = {
              key: '',
              dateCreated: new Date(),
              addedByUser: {
                            addedByKey: this.loggedInUserId,
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                          },
              reactionType: 'Thanks'
            };
  
            this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
              this.post.showSmiley = true;
            }).then(() => {
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
    });
      })
    } else {
      this.post.showSmiley = false;
      this.dataProvider.removePostReaction(this.post.key, reaction.id);
    }
  }

  submitReactionHug() {
    const reaction = this.post.reactions.find(
      el => el.addedByUser.addedByKey === this.loggedInUserId 
      && el.reactionType === 'Hug');

    if (reaction === undefined) {
      this.dataProvider.getCurrentUser().then((u) => {
        u.get().subscribe((account: any) => {
          if (account) {
            let userNotifications = account.data().userNotifications;
            let userReactions = account.data().userReactions;
    
            const currentUserName = account.data().username;
            let reaction = {
            
              dateCreated: new Date(),
              addedByUser: {
                            addedByKey: this.loggedInUserId ,
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                          },
              reactionType: 'Hug'
            };
  
            this.dataProvider.updatePostReactions(this.postId, reaction).then(() => {
              this.post.showHug = true;
            }).then(() => {
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
    });
      })
    } else {
      this.post.showHug = false;
      this.dataProvider.removePostReaction(this.post.key, reaction.id);
    }
  }

  submitReactionCheckin() {
    const reaction = this.post.reactions.find(
      el => el.addedByUser.addedByKey === this.loggedInUserId 
      && el.reactionType === 'Checkin');
    if (reaction === undefined) {
      this.dataProvider.getCurrentUser().then((u) => {
        u.get().subscribe((account: any) => {
          if (account) {
            let userNotifications = account.data().userNotifications;
            let userReactions = account.data().userReactions;
            const currentUserName = account.data().username;
            let reaction = {
              key: '',
              dateCreated: new Date(),
              addedByUser: {
                            addedByKey: this.loggedInUserId ,
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                          },
              reactionType: 'Checkin'
            };
  
            this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
              this.post.showCheckin = true;
            }).then(() => {
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
            });;
  
        }
    });
      })
    } else {
      this.post.showCheckin = false;
      this.dataProvider.removePostReaction(this.post.key, reaction.key);
    }
  }

  submitReactionBookmark() {
    const reaction = this.post.reactions.find(
      el => el.addedByUser.addedByKey === this.loggedInUserId
      && el.reactionType === 'Bookmark');
    if (reaction === undefined) {
      this.dataProvider.getCurrentUser().then((u) => {
        u.get().subscribe((account: any) => {
          if (account) {
            let userNotifications = account.data().userNotifications;
            let userReactions = account.data().userReactions;
            const currentUserName = account.data().username;
            let reaction = {
              key: '',
              dateCreated: new Date(),
              addedByUser: {
                            addedByKey: this.loggedInUserId,
                            addedByUsername: account.data().username,
                            addedByImg: account.data().img
                          },
              reactionType: 'Bookmark'
            };
  
            this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
              this.post.showBookmark = true;
            }).then(() => {
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
            });;
  
        }
    });
      })
    } else {
      this.post.showBookmark = false;
      this.dataProvider.removePostReaction(this.post.key, reaction.key);
    }
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
}
