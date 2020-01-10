import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  template: `
    <button ion-item (click)="close()">Tag it as a Resource</button>
    `
})
export class PopoverPage implements OnInit {
  private message : any;
  private groupId : any;

  constructor(private route: ActivatedRoute, public popCtrl: PopoverController) { 
    this.message = this.route.snapshot.params.message;
    this.groupId = this.route.snapshot.params.groupId;
  }

  ngOnInit() {
  }
  
  close() {
    //this.app.getRootNav().push(NewResourcePage, { message: this.message, groupId: this.groupId });
    this.popCtrl.dismiss();
  }
}
