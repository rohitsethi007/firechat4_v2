import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss', './resource.shell.scss'],
})
export class ResourcePage implements OnInit {
  private resourceId: any;
  private resource: any;
  private title: any;
  private review: any;
  private resourceReviews: any;
  private postReviews: any;
  subscription: any;
  private message: any;

  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private firestore: AngularFirestore
  ) {
    this.resource = {showSmiley: false, showBookmark: false, addedByUser: {}, data: {}, date: firebase.firestore.Timestamp.now()  };
    this.getResourceDetails();
  }

  ionViewDidEnter() {

  }

  ngOnInit() {}

  async openReviewModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewModalPage,
      componentProps: { data: this.resource }
    });

    modal.onDidDismiss().then((data) => {
      if (data !== null) {
        let review: any;
        let currentUserName: any;
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
          if (account.payload.exists()) {
            currentUserName = account.payload.data().username;

            review = {
              dateCreated: new Date().toString(),
              addedBy: this.dataProvider.getCurrentUserId(),
              addedByUsername: currentUserName,
              review: data.data.review,
              rating: data.data.rating
            };

            if (this.resource.reviews === undefined) {
              let reviews = [];
              reviews.push(review);
              this.dataProvider.addFirstResourceReview(this.resourceId, review);
            } else {
              this.dataProvider.updateResourceReviews(this.resourceId, review);
            }
            //this.ngOnInit();
          }});
      }
    });

    return await modal.present();
  }


  getResourceDetails() {
    this.loadingProvider.show();
    // Get group details
    this.resourceId = this.route.snapshot.params.id;
    this.resource.reactions = [];
    this.resource.reviews = [];
    this.subscription = this.dataProvider.getResourceDetails(this.resourceId).get().subscribe((resource: any) => {
      if (resource) {
        let p = resource.data();
        p.reactions = [];
        p.key = resource.id;
        this.title = resource.data().title;
        let totalReactionCount = 0;
        let totalReviewCount = 0;
        p.postTags = p.postTags.filter(x => x.isChecked !== false);

        // get reactions list
        this.firestore.collection('posts').doc(resource.id).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
          this.resource.reactions = [];
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
            // Check for Bookmark
          let foundBookmark = false;
          if (p.reactions !== undefined) {
            foundBookmark = p.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                          && el.reactionType === 'Bookmark');
            }
          if (foundBookmark) {
              p.showBookmark = true;
            } else {
              p.showBookmark = false;
            }

          p.totalReactionCount = totalReactionCount;
        }

        });

        // get reviews list
        this.firestore.collection('posts').doc(resource.id).collection('reviews')
        .ref.orderBy("dateCreated", "desc").onSnapshot((reviews: any) => {
          this.resource.reviews = [];
          p.reviews = [];
          reviews.forEach(element => {
            let review = element.data();
            review.key = element.id;
            p.reviews.push(review);
          });
          totalReviewCount = p.reviews.length;
          p.totalReviewCount = totalReviewCount;
          this.postReviews = p.reviews;
        });
        this.resource = p;
      }

      this.loadingProvider.hide();
    });
  }

  submitReactionSmile() {
    const reaction = this.resource.reactions.find(
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

          this.dataProvider.updatePostReactions(this.resource.key, reaction).then(() => {
            this.resource.showSmiley = true;
          });
      }
  });
    } else {
      this.resource.showSmiley = false;
      this.dataProvider.removePostReaction(this.resource.key, reaction.key);
    }
  }

  submitReactionBookmark() {
    const reaction = this.resource.reactions.find(
      el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
      && el.reactionType === 'Bookmark');
      console.log('reaction:', reaction);
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
            reactionType: 'Bookmark'
          };

          this.dataProvider.updatePostReactions(this.resource.key, reaction).then(() => {
            this.resource.showBookark = true;
          });

      }
  });
    } else {
      console.log('i exist:', this.resource.key, reaction.key);
      this.resource.showBookmark = false;
      this.dataProvider.removePostReaction(this.resource.key, reaction.key);
    }
  }

  async showReactionsList() {
    if (this.resource.totalReactionCount === 0) {
      return;
    }
    const p = this.resource;
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
    console.log('this.message', JSON.stringify(this.message));
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
           review: this.message
         };

         this.dataProvider.updatePostReviews(this.resourceId, review);
         this.message = '';
        }});
  }

  attach() {
  //   this.actionSheet.create({
  //     header: 'Choose attachments',
  //     buttons: [{
  //       text: 'Camera',
  //       handler: () => {
  //         this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.CAMERA).then((url) => {
  //           this.message = url;
  //           this.submitReply('image');
  //         });
  //       }
  //     }, {
  //       text: 'Photo Library',
  //       handler: () => {
  //         this.imageProvider.uploadPhotoMessage(this.conversationId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
  //           this.message = url;
  //           this.submitReply('image');
  //         });
  //       }
  //     },
  //     {
  //       text: 'Video',
  //       handler: () => {
  //         this.imageProvider.uploadVideoMessage(this.conversationId).then(url => {
  //           this.message = url;
  //           this.submitReply('video');
  //         });
  //       }
  //     }
  //       , {
  //       text: 'Location',
  //       handler: () => {
  //         this.geolocation.getCurrentPosition({
  //           timeout: 5000
  //         }).then(res => {
  //           let locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude;
  //           let mapUrl = '<a href=\'https://www.google.com/maps/search/' 
  //           + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

  //           let confirm = this.alertCtrl.create({
  //             header: 'Your Location',
  //             message: locationMessage,
  //             buttons: [{
  //               text: 'cancel',
  //               handler: () => {
  //                 console.log('canceled');
  //               }
  //             }, {
  //               text: 'Share',
  //               handler: () => {
  //                 this.message = locationMessage + '<br>' + mapUrl;
  //                 this.submitReply('location');
  //               }
  //             }]
  //           }).then(r => r.present());
  //         }, locationErr => {
  //           console.log('Location Error' + JSON.stringify(locationErr));
  //         });
  //       }
  //     }, {
  //       text: 'Contact',
  //       handler: () => {
  //         this.contacts.pickContact().then(data => {
  //           let name;
  //           if (data.displayName !== null) { name = data.displayName; }
  //           else { name = data.name.givenName + ' ' + data.name.familyName; }
  //           this.message = '<b>Name:</b> ' + name + '<br><b>Mobile:</b> <a href=\'tel:'
  //               + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';
  //           this.submitReply('contact');
  //         }, err => {
  //           console.log(err);
  //         })
  //       }
  //     }, {
  //       text: 'cancel',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('cancelled');
  //       }
  //     }]
  //   }).then(r => r.present());
  // }
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
