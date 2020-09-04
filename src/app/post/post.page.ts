import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
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
import * as firebase from 'firebase/app'

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
    this.post = {showSmiley: false, showHug: false, addedByUser: {}, data: {}, date: firebase.firestore.Timestamp.now(), reviewMedia: []};
    this.getPostDetails();
  }

  ionViewDidEnter() {
    this.loggedInUserId = firebase.auth().currentUser.uid;
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

        // get reactions list
        this.firestore.collection('posts').doc(post.id).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
          this.post.reactions = [];
          reactions.forEach(element => {
          let reaction = element.payload.doc.data();
          reaction.key = element.payload.doc.id;
          p.reactions.push(reaction);
        });

          // Check for Thanks
          if (reactions) {
          totalReactionCount = p.reactions.length;
          let foundSmiley = false;
          if (p.reactions !== undefined) {
              foundSmiley = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                            && el.reactionType === 'Thanks');
            }
          if (foundSmiley) {
              p.showSmiley = true;
            } else {
              p.showSmiley = false;
            }
            // Check for Hugs
          let foundHug = false;
          if (p.reactions !== undefined) {
              foundHug = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                          && el.reactionType === 'Hug');
            }
          if (foundHug) {
              p.showHug = true;
            } else {
              p.showHug = false;
            }

          p.totalReactionCount = totalReactionCount;
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

        this.post = p;
      }
      this.loadingProvider.hide();
    });
  }

  submitReactionSmile() {
    const reaction = this.post.reactions.find(
      el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
      && el.reactionType === 'Thanks');
    if (reaction === undefined) {
      this.dataProvider.getCurrentUser().get().subscribe((account: any) => {
        if (account) {
          const currentUserName = account.data().username;
          let reaction = {
            key: '',
            dateCreated: new Date(),
            addedByUser: {
                          addedByKey: this.dataProvider.getCurrentUserId(),
                          addedByUsername: account.data().username,
                          addedByImg: account.data().img
                        },
            reactionType: 'Thanks'
          };

          this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
            this.post.showSmiley = true;
          });

      }
  });
    } else {
      this.post.showSmiley = false;
      this.dataProvider.removePostReaction(this.post.key, reaction.key);
    }
  }

  submitReactionHug() {
    const reaction = this.post.reactions.find(
      el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
      && el.reactionType === 'Hug');
    if (reaction === undefined) {
      this.dataProvider.getCurrentUser().get().subscribe((account: any) => {
        if (account) {
          const currentUserName = account.data().username;
          let reaction = {
            key: '',
            dateCreated: new Date(),
            addedByUser: {
                          addedByKey: this.dataProvider.getCurrentUserId(),
                          addedByUsername: account.data().username,
                          addedByImg: account.data().img
                        },
            reactionType: 'Hug'
          };

          this.dataProvider.updatePostReactions(this.post.key, reaction).then(() => {
            this.post.showHug = true;
          });

      }
  });
    } else {
      this.post.showHug = false;
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
    this.dataProvider.getCurrentUser().get().subscribe((account: any) => {
       if (account) {
         currentUserName = account.data().username;
 
         review = {
           dateCreated: new Date(),
           addedByUser: {
              addedByKey: this.dataProvider.getCurrentUserId(),
              addedByUsername: account.data().username,
              addedByImg: account.data().img
            },
           review: this.message,
           reviewMedia: this.reviewMedia
         };

         this.dataProvider.updatePostReviews(this.postId, review);
         this.message = '';
        }});
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
      cssClass: 'GroupAction',
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
}
