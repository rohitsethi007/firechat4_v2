import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private postId: any;
  private post: any;
  private title: any;
  private review: any;
  private postReviews: any;
  private subscription: any;
  private message: any;

  private loggedInUserIsMember: any = 'true';

  private commentBox: any = false;

  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private angularfire: AngularFireDatabase
  ) {
    this.post = {showSmiley: false, showHug: false}; 
  }

  ionViewDidEnter() {
    this.getPostDetails();
  }

  ngOnInit() {
  }

  async openReviewModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewModalPage,
      componentProps: { data: this.post }
    });

    modal.onDidDismiss().then((data) => {
      if (data !== null) {
        let review: any;
        let currentUserName: any;
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
          if (account.payload.exists()) {
            currentUserName = account.payload.val().username;

            review = {
              dateCreated: new Date().toString(),
              addedBy: this.dataProvider.getCurrentUserId(),
              addedByUsername: currentUserName,
              review: data.data.review,
              rating: data.data.rating
            };

            if (this.post.reviews === undefined) {
              const reviews = [];
              reviews.push(review);
              this.dataProvider.addFirstPostReview(this.postId, review);
            } else {
              this.dataProvider.updatePostReviews(this.postId, review);
            }
            // this.ngOnInit();
          }});
      }
    });

    return await modal.present();
  }

  getPostDetails() {
    this.loadingProvider.show();
    // Get group details
    this.postId = this.route.snapshot.params.id;
    this.subscription = this.dataProvider.getPostDetails(this.postId).snapshotChanges().subscribe((post: any) => {
      if (post.payload.exists()) {
        let p = post.payload.val();
        p.key = post.payload.key;
        this.title = post.payload.val().title;

         // Check for Thanks
        let totalReactionCount = 0;
        let totalReviewCount = 0;

        if (p.reviews !== undefined) {
          let rev = Object.keys(p.reviews).map(function(e) {
            totalReviewCount += 1;
         });
        }

        let foundSmiley = false;
        if (p.reactions !== undefined) {
           let values = Object.keys(p.reactions).map(function(e) {
            p.reactions[e].key = e;
            totalReactionCount += 1;
            return p.reactions[e];
           });
           // tslint:disable-next-line: max-line-length
           foundSmiley = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks');
         }
        if (foundSmiley) {
          p.showSmiley = true;
         } else {
          p.showSmiley = false;
         }
         // Check for Hugs
        let foundHug = false;
        if (p.reactions !== undefined) {
           let values = Object.keys(p.reactions).map(function(e) {
            p.reactions[e].key = e;
            return p.reactions[e];
           });
           foundHug = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() && el.reactionType === 'Hug');
         }
        if (foundHug) {
          p.showHug = true;
         } else {
          p.showHug = false;
         }

        p.totalReactionCount = totalReactionCount;
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

        this.post = p;
      }
      console.log("RS Reviews:" + this.postReviews);
      this.loadingProvider.hide();
    });
  }

  submitReview(reviewKey) {
    let review: any;
    let currentUserName: any;
    console.log('reviewkey:' + reviewKey);
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      if (account.payload.exists()) {
        currentUserName = account.payload.val().username;

        review = {
          dateCreated: new Date().toString(),
          addedBy: this.dataProvider.getCurrentUserId(),
          addedByUsername: currentUserName,
          review
        };

        // this.dataProvider.addPostReview(this.postId, reviewKey, review);
      }});
  }


  submitReactionSmile() {
    if (!this.post.showSmiley) {
      this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
        if (account.payload.exists()) {
          const currentUserName = account.payload.val().username;
  
          const reaction = {
            key: '',
            dateCreated: new Date().toString(),
            // tslint:disable-next-line: max-line-length
            addedByUser: {
                          addedByKey: this.dataProvider.getCurrentUserId(),
                          addedByUsername: account.payload.val().username,
                          addedByImg: account.payload.val().img
                        },
            reactionType: 'Thanks'
          };

          if (this.post.reactions === undefined) {
              const key = this.dataProvider.addFirstPostReactions(this.post.key, reaction);
              reaction.key = key;
            } else {
              let key = this.dataProvider.updatePostReactions(this.post.key, reaction);
              reaction.key = key;
            }
          this.post.showSmiley = true;
          this.post.totalReactionCount += 1;

        }});
      } else {
        const found = false;
        if (this.post.reactions !== undefined) {
          let r = this.post.reactions;
          let values = Object.keys(r).map(function(e) {
            return r[e];
          });
  
          const reactionIndex = values.find(
                                    el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                    && el.reactionType === 'Thanks');
          if (reactionIndex === undefined) {
            // this shouldn't have happened, so set the smiley to false for now
            this.post.showSmiley = false;
          } else {
            this.dataProvider.removePostReaction(this.post.key, reactionIndex.key);
            this.post.showSmiley = false;
            this.post.totalReactionCount -= 1;
          }
      }
    }
    }
  
  submitReactionHug() {
   if (!this.post.showHug) {
     this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
       if (account.payload.exists()) {
         const currentUserName = account.payload.val().username;
  
         const reaction = {
           key: '',
           dateCreated: new Date().toString(),
           // tslint:disable-next-line: max-line-length
           addedByUser: {
                          addedByKey: this.dataProvider.getCurrentUserId(),
                          addedByUsername: account.payload.val().username,
                          addedByImg: account.payload.val().img
                        },
           reactionType: 'Hug'
         };
         if (this.post.reactions === undefined) {
            // TODO : After saving, get the key back and add!!!
            const key = this.dataProvider.addFirstPostReactions(this.post.key, reaction);
          } else {
            let key = this.dataProvider.updatePostReactions(this.post.key, reaction);
          }
         this.post.showHug = true;
         this.post.totalReactionCount += 1;

       }});
     } else {
       const found = false;
       if (this.post.reactions !== undefined) {
        let r = this.post.reactions;
        let values = Object.keys(r).map(function(e) {
           return r[e];
         });

        const reactionIndex = values.find(
          el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
          && el.reactionType === 'Hug');

        if (reactionIndex === undefined) {
           // this shouldn't have happened, so set the smiley to false for now
           this.post.showHug = false;
         } else {
           this.dataProvider.removePostReaction(this.post.key, reactionIndex.key);
           this.post.showHug = false;
           this.post.totalReactionCount -= 1;
         }
     }
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
     console.log('Message Typed : ' + this.message);
     let review: any;
     let currentUserName: any;
     this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
       if (account.payload.exists()) {
         currentUserName = account.payload.val().username;
 
         review = {
           dateCreated: new Date().toString(),
           addedByUser: {
              addedByKey: this.dataProvider.getCurrentUserId(),
              addedByUsername: account.payload.val().username,
              addedByImg: account.payload.val().img
            },
           review: this.message
         };

         if (this.post.reviews === undefined) {
          this.dataProvider.addFirstPostReview(this.postId, review);
         } else {
           this.dataProvider.updatePostReviews(this.postId, review);
         }

         this.message = '';
        }});
   }
}
