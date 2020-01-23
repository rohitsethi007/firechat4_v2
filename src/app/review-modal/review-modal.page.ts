import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.page.html',
  styleUrls: ['./review-modal.page.scss'],
})
export class ReviewModalPage implements OnInit {
  private resource: any;
  private ratingForm: FormGroup;
  private title: any;
  private review: any;

  constructor(
    private modal: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private dataProvider: DataService,
    private navParam: NavParams,
    public loadingProvider: LoadingService
  ) {
    this.resource = this.navParam.data.resource;
    this.title = this.resource.title;
    this.ratingForm = new FormGroup({
      review: new FormControl('', Validators.compose([
        Validators.required
      ])),
      rating: new FormControl('')
    });
   }


  ngOnInit() {
    this.review = {
      review: '',
      rating: ''
    }
  }


  async submitReview() {
    this.loadingProvider.show();
    this.review.review = this.ratingForm.value['review'];
    this.review.rating = this.ratingForm.value['rating'];

    this.loadingProvider.hide();
    await this.modal.dismiss(this.review);
  }
}
