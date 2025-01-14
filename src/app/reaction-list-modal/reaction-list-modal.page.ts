import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-reaction-list-modal',
  templateUrl: './reaction-list-modal.page.html',
  styleUrls: ['./reaction-list-modal.page.scss'],
})
export class ReactionListModalPage implements OnInit {
  items: any = [];

  constructor(
    private modal: ModalController,
    private navParam: NavParams
  ) {
    let r = this.navParam.data.reactions;
  
    this.items = Object.keys(r).map(function(e) {
      return r[e];
    });

  }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss();
  }


}
