import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private postId: any;
  private post: any = [];
  private title: any;
  private review: any;
  private reviews: any;
  private subscription: any;

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
              let reviews = [];
              reviews.push(review);
              this.dataProvider.addFirstPostReview(this.postId, review);
            } else {
              this.dataProvider.updatePostReviews(this.postId, review);
            }
            //this.ngOnInit();
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
        this.post = post.payload.val();
        this.title = post.payload.val().name;

        if (this.post.reviews !== undefined) {
          this.reviews = [];
          Object.keys(this.post.reviews).forEach((key) => {
            this.reviews.push(this.post.reviews[key]);
          });
          this.reviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        }
      }

      this.loadingProvider.hide();
    });
  }
}
