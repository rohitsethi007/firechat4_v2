import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  private eventId: any;
  private event: any = [];
  private title: any;
  private review: any;
  private reviews: any = [];

  private loggedInUserIsMember: any = 'true';
  
  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private angularfire: AngularFireDatabase
  ) { }

  ionViewDidEnter() {
    this.getEventDetails();
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
        this.event = event.payload.val();
        this.title = event.payload.val().name;

        if (this.event.reviews !== undefined) {
          this.reviews = [];
          Object.keys(this.event.reviews).forEach((key) => {
            this.reviews.push(this.event.reviews[key]);
          });
          this.reviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        }
      }

      this.loadingProvider.hide();
    });
  }

  bookmarEvent() {
    this.loadingProvider.show();
    let currentUserName: any;
    // update user collection with the event that was just bookmarked
    this.dataProvider.getFromStorageAsync('currentUser').then((account) => {
        currentUserName = account.username;

        // update event collection with the user who bookmarked it
        if (this.event.bookmarkedBy === undefined) {
          console.log("this.event.bookmarkedBy is null, userId : " + account.userId);
          this.event.bookMarkedBy = [];
          this.event.bookMarkedBy.push(account.userId);
          console.log(this.event.bookMarkedBy);
          this.angularfire.object('/events/' + this.eventId).update({
            bookmarkedBy: this.event.bookMarkedBy
          });

        } else {
          this.angularfire.list('/events/' + this.eventId + '/bookMarkedBy/').push(account.userId);
        }

        // update user collection with the event that was just bookmarked

        if (account.bookmarkedEvents === null) {
            account.bookmarkedEvents = [];
            account.bookmarkedEvents.push(this.eventId);
            this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid).update({
            bookmarkedEvents: account.bookmarkedEvents
          });
      } else {
        this.angularfire.list('/accounts/' + account.userId + '/bookmarkedEvents/').push(this.eventId);
      }

    });
    this.loadingProvider.hide();
  }
} 
