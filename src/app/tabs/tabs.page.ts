import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  unreadMessagesCount: any;
  friendRequestCount: any;
  unreadGroupMessagesCount: any;
  groupList: any;
  groupsInfo: any;
  conversationList: any;
  conversationsInfo: any;
  // TabsPage
  // This is the page where we set our tabs.
  constructor(
    public dataProvider: DataService,
    public storage: Storage) {
  }

  ionViewDidEnter() {
    // Get friend requests count.
    this.dataProvider.getRequests(this.dataProvider.getCurrentUserId()).snapshotChanges().subscribe((requestsRes: any) => {
      if (requestsRes.payload.exists
        && requestsRes.payload.data().friendRequests !== null) {
        this.friendRequestCount = requestsRes.payload.data().friendRequests.length;
      } else { this.friendRequestCount = null; }
      });
  }
}
