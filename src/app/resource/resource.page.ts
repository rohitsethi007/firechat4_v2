import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss'],
})
export class ResourcePage implements OnInit {
  private resourceId: any;
  private resource: any;

  constructor(
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController
  ) { 
      this.resourceId = this.route.snapshot.params.id;
      console.log('Resource Id: ' + this.resourceId);
        // Get group information
      this.dataProvider.getResourceDetails(this.resourceId).snapshotChanges().subscribe((group) => {
        this.resource = group.payload.val();
        console.log(this.resource);
      });
  }


  ngOnInit() {
  }

}
