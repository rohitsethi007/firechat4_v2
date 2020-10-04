import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.page.html',
  styleUrls: ['./feed-search.page.scss'],
})
export class FeedSearchPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onCancel(event) {
    this.router.navigateByUrl('/app/tabs/tab1');
  }
}
