import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  private eventId: any;
  private event: any;
  private title: any;
  private review: any;
  private eventReviews: any;
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
    this.event = {showSmiley: false, showCheckin: false, addedByUser: {}}; 
    this.getEventDetails();
    }

  ionViewDidEnter() {

  }

  ngOnInit() {
  }

  async openReviewModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewModalPage,
      componentProps: { data: this.event }
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

            if (this.event.reviews === undefined) {
              let reviews = [];
              reviews.push(review);
              this.dataProvider.addFirstEventReview(this.eventId, review);
            } else {
              this.dataProvider.updateEventReviews(this.eventId, review);
            }
            //this.ngOnInit();
          }});
      }
    });
 
    return await modal.present();
  }
  
  getEventDetails() {
    this.loadingProvider.show();
    // Get group details
    this.eventId = this.route.snapshot.params.id;
    this.dataProvider.getEventDetails(this.eventId).snapshotChanges().subscribe((event: any) => {
      if (event.payload.exists()) {
        let p = event.payload.val();
        p.key = event.payload.key;
        this.title = event.payload.val().title;
        console.log("oye" + p);
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
        // Check for Checkin
        let foundCheckin = false;
        if (p.reactions !== undefined) {
           let values = Object.keys(p.reactions).map(function(e) {
            p.reactions[e].key = e;
            return p.reactions[e];
           });
           foundCheckin = values.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                            && el.reactionType === 'Checkin');
         }
        if (foundCheckin) {
          p.showCheckin = true;
         } else {
          p.showCheckin = false;
         }
         
        p.totalReactionCount = totalReactionCount;
        p.totalReviewCount = totalReviewCount;

        if (p.reviews !== undefined) {
          this.eventReviews = [];
          let values = Object.keys(p.reviews).map(function(e) {
            p.reviews[e].key = e;
            return p.reviews[e];
           });
          this.eventReviews = values;
          this.eventReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        }
        this.event = p;
      }

      this.loadingProvider.hide();
    });
  }

  submitReactionEvent(event, reactionType) {
    switch (reactionType) {
      case 'Checkin': {
        if (!event.showCheckin) {
          this.addEventReaction(event, reactionType);
          event.showCheckin = true;
          event.totalReactionCount += 1;
        } else {
          this.removeEventReaction(event, reactionType);
          event.showCheckin = false;
          event.totalReactionCount -= 1;
        }
        break;
      }

      case 'Thanks': {
        if (!event.showSmiley) {
          this.addEventReaction(event, reactionType);
          event.showSmiley = true;
          event.totalReactionCount += 1;
        } else {
          this.removeEventReaction(event, reactionType);
          event.showSmiley = false;
          event.totalReactionCount -= 1;
        }
        break;
      }
    }
  }

  addEventReaction(event, reactionType) {
    const reaction = {
      dateCreated: new Date().toString(),
      reactionType
    };

    if (event.reactions === undefined) {
        this.dataProvider.addFirstEventReactions(event.key, reaction);
      } else {
        this.dataProvider.updateEventReactions(event.key, reaction);
      }

  }

  removeEventReaction(event,reactionType) {
      let values = Object.keys(event.reactions).map(function(e) {
        return event.reactions[e];
      });
      const reactionIndex = values.find(
                                el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
                                && el.reactionType === reactionType);
      this.dataProvider.removeEventReaction(event.key, reactionIndex.key);
  }

  
async showEventReactionsList(event) {
  if (event.totalReactionCount === 0) {
    return;
  }
  const modal = await this.modalCtrl.create({
    component: ReactionListModalPage,
    componentProps: {
      reactions: event.reactions
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

      if (this.event.reviews === undefined) {
       this.dataProvider.addFirstEventReview(this.eventId, review);
      } else {
        this.dataProvider.updateEventReviews(this.eventId, review);
      }

      this.message = '';
     }});
}
}
