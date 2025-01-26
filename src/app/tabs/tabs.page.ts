import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
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
  isSuperAdmin: false;
  loggedInUserId: any;
  // TabsPage
  // This is the page where we set our tabs.
  constructor(
    public dataProvider: DataService,
    public storage: Storage,
    private router: Router,
    private afAuth: AngularFireAuth
    ) {

  // Get friend requests count.
  this.afAuth.currentUser.then(user => {
    this.loggedInUserId = user?.uid;
    console.info('this.afAuth.currentUser', this.loggedInUserId)
    this.dataProvider.getRequests(this.loggedInUserId).snapshotChanges().subscribe((requestsRes: any) => {
      if (requestsRes.payload != null) {
      const requests = requestsRes.payload.data();
      if (requests != null) {
        if (requests.friendRequests != null && requests.friendRequests !== undefined) {
          this.friendRequestCount = requests.friendRequests.length;
        } else { this.friendRequestCount = 0; }
      } else { this.friendRequestCount = 0; }
    }
    });
  });
  }

  ionViewDidEnter() {
  

  }

  viewProfile() {
    this.router.navigateByUrl('/profile/' + this.dataProvider.getCurrentUserId());
  }

  // getFriendRequests() {
  //   this.friendRequests = [];
  //   // Get user info
  //   this.dataProvider.getCurrentUser().then((u) => {
  //     u.snapshotChanges().subscribe((accountRes: any) => {
  //       this.account = accountRes.payload.data();
  //       // Get friendRequests and requestsSent of the user.
  //       this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe((requestsRes: any) => {
  //         // friendRequests.
  //         let requests = requestsRes.payload.data();
  //         if (requests != null) {
  //           if (requests.friendRequests != null && requests.friendRequests !== undefined) {
  //             this.friendRequests = [];
  //             this.friendRequestCount = requests.friendRequests.length;
  //             requests.friendRequests.forEach((userId) => {
  //               this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender: any) => {
  //                 sender = { $key: sender.payload.data().userId, ...sender.payload.data() };
  //                 this.addOrUpdateFriendRequest(sender);
  //               });
  //             });
  //           } else {
  //             this.friendRequests = [];
  //           }
  //           // requestsSent.
  //           if (requests.requestsSent != null && requests.requestsSent != undefined) {
  //             this.requestsSent = [];
  //             requests.requestsSent.forEach((userId) => {
  //               this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver: any) => {
  //                 receiver = { $key: receiver.payload.data().userId, ...receiver.payload.data() };
  //                 this.addOrUpdateRequestSent(receiver);
  //               });
  //             });
  //           } else {
  //             this.requestsSent = [];
  //           }
  //         }
  //         this.loadingProvider.hide();
  //       });
  
  //   });
  //   })
  // }
  
}
