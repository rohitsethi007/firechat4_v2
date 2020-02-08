import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ReviewModalPage } from '../review-modal/review-modal.page';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss', './resource.shell.scss'],
})
export class ResourcePage implements OnInit {
  private resourceId: any;
  private resource: any = [];
  private title: any;
  private review: any;
  private reviews: any;
  subscription: any;
  
  private loggedInUserIsMember: any = 'true';

  constructor(
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ionViewDidEnter() {
    this.getResourceDetails();
  }

  ngOnInit() {}

  async openReviewModal() {
    const modal = await this.modalCtrl.create({
      component: ReviewModalPage,
      componentProps: { resource: this.resource }
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
        this.resource = resource.payload.val();
        this.title = resource.payload.val().name;

        if (this.resource.reviews !== undefined) {
          this.reviews = [];
          Object.keys(this.resource.reviews).forEach((key) => {
            this.reviews.push(this.resource.reviews[key]);
          });
          this.reviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        }
      }

      this.loadingProvider.hide();
    });
  }
}
