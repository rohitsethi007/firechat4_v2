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

  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
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
    this.post = {showSmiley: false, showHug: false, addedByUser: {}, data: {}};
    this.getPostDetails();
  }

  ionViewDidEnter() {

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
          console.log('p.reviews', p.reviews);
          totalReviewCount = p.reviews.length;
          p.totalReviewCount = totalReviewCount;

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

         this.dataProvider.updatePostReviews(this.postId, review);
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

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
