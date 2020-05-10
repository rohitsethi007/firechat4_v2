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
  private reviews: any;
  subscription: any;
  private message: any;
  
  private loggedInUserIsMember: any = 'true';

  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private angularfire: AngularFireDatabase
  ) {
    this.resource = {showSmiley: false, showBookmark: false, addedByUser: {}, type: ''}; 
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
            currentUserName = account.payload.val().username; 

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
    this.subscription = this.dataProvider.getResourceDetails(this.resourceId).snapshotChanges().subscribe((resource: any) => {
      if (resource.payload.exists()) {
        let p = resource.payload.val();
        p.key = resource.payload.key;
        this.title = resource.payload.val().title;
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
        // Check for Bookmark
        let foundBookmark = false;
        if (p.reactions !== undefined) {
           let values = Object.keys(p.reactions).map(function(e) {
            p.reactions[e].key = e;
            return p.reactions[e];
           });
           foundBookmark = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                            && el.reactionType === 'Bookmark');
         }
        if (foundBookmark) {
          p.showBookmark = true;
         } else {
          p.showBookmark = false;
         }

        p.totalReactionCount = totalReactionCount;
        p.totalReviewCount = totalReviewCount;

        if (p.reviews !== undefined) {
          this.resourceReviews = [];
          let values = Object.keys(p.reviews).map(function(e) {
            p.reviews[e].key = e;
            return p.reviews[e];
           });
          this.resourceReviews = values;
          this.resourceReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        }
        this.resource = p;
      }

      this.loadingProvider.hide();
    });
  }

  submitReactionResource(resource, reactionType) {
    switch (reactionType) {
      case 'Bookmark': {
        if (!resource.showBookmark) {
          this.addResourceReaction(resource, reactionType);
          resource.showBookmark = true;
          resource.totalReactionCount += 1;
        } else {
          this.removeResourceReaction(resource, reactionType);
          resource.showBookmark = false;
          resource.totalReactionCount -= 1;
        }
        break;
      }
  
      case 'Thanks': {
        if (!resource.showSmiley) {
          this.addResourceReaction(resource, reactionType);
          resource.showSmiley = true;
          resource.totalReactionCount += 1;
        } else {
          this.removeResourceReaction(resource, reactionType);
          resource.showSmiley = false;
          resource.totalReactionCount -= 1;
        }
        break;
      }
    }
  
  }
  
  addResourceReaction(resource, reactionType) {
    const reaction = {
      dateCreated: new Date().toString(),
      reactionType
    };

    if (resource.reactions === undefined) {
        this.dataProvider.addFirstResourceReactions(resource.key, reaction);
      } else {
        this.dataProvider.updateResourceReactions(resource.key, reaction);
      }

  }
  
  removeResourceReaction(resource, reactionType) {
    if (resource.reactions !== undefined) {
      let values = Object.keys(resource.reactions).map(function(e) {
        return resource.reactions[e];
      });
  
      const reactionIndex = values.find(
                                el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === reactionType);
      if (reactionIndex === undefined) {
        // this shouldn't have happened, so set the smiley to false for now
        // post.showSmiley = false;
      } else {
        console.log('remove reaction now : ' + resource.key + ' : ' + reactionIndex.key);
        this.dataProvider.removeResourceReaction(resource.key, reactionIndex.key);
      }
  }
  }
  
  async showResourceReactionsList(resource) {
    if (resource.totalReactionCount === 0) {
      return;
    }
    const modal = await this.modalCtrl.create({
      component: ReactionListModalPage,
      componentProps: {
        reactions: resource.reactions
      }
    });
    return await modal.present();
  
  }

  submitReply() {
    let review: any;
    let currentUserName: any;
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      if (account.payload.exists()) {
        currentUserName = account.payload.val().username;
  
        review = {
          dateCreated: new Date().toString(),
          review: this.message
        };
  
        if (this.resource.reviews === undefined) {
         this.dataProvider.addFirstResourceReview(this.resourceId, review);
        } else {
          this.dataProvider.updateResourceReviews(this.resourceId, review);
        }
  
        this.message = '';
       }});
  }
}
