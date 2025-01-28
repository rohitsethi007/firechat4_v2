import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, map, switchMap } from 'rxjs/operators';

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
  private unreadSubscription: Subscription;
  totalUnreadMessages: any;

  // TabsPage
  // This is the page where we set our tabs.
  constructor(
    public dataProvider: DataService,
    public storage: Storage,
    private router: Router,
    private afAuth: AngularFireAuth,
    public firestore: AngularFirestore
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
  ngOnInit() {
    // First get the user ID, then start the messages subscription
    this.afAuth.currentUser.then(user => {
      if (user) {
        this.loggedInUserId = user.uid;
        console.info('User ID set:', this.loggedInUserId);
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
        // Only start the subscription after we have the user ID
        this.unreadSubscription = this.getUnreadUserMessagesCountStream()
          .subscribe(totalUnread => {
            console.log('Total unread messages:', totalUnread);
            this.totalUnreadMessages = totalUnread;
          });
      } 
    });
  }

  ngOnDestroy() {
    if (this.unreadSubscription) {
      this.unreadSubscription.unsubscribe();
    }
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

  // Alternative real-time version using observables
  getUnreadUserMessagesCountStream(): Observable<number> {
    if (!this.loggedInUserId) {
      console.warn('No user ID available');
      return of(0);
    }

    return this.firestore
      .collection(`accounts/${this.loggedInUserId}/conversations`)
      .snapshotChanges()
      .pipe(
        switchMap(userConvs => {
          // Get all conversation IDs and messagesRead counts
          const conversationData = userConvs.map(conv => {
            const data = conv.payload.doc.data() as any;
            return {
              conversationId: data.conversationId,
              messagesRead: data.messagesRead || 0
            };
          });

          // Get the actual conversations from root collection
          const conversationObservables = conversationData.map(conv => 
            this.firestore
              .doc(`conversations/${conv.conversationId}`)
              .snapshotChanges()
              .pipe(
                map(snapshot => {
                  const data = snapshot.payload.data() as any;
                  return {
                    messagesRead: conv.messagesRead,
                    totalMessages: data.messages?.length || 0
                  };
                })
              )
          );

          return combineLatest(conversationObservables).pipe(
            map(results => {
              return results.reduce((total, result) => {
                const unreadCount = Math.max(0, result.totalMessages - result.messagesRead);
                console.log('Messages:', result.totalMessages, 'Read:', result.messagesRead, 'Unread:', unreadCount);
                return total + unreadCount;
              }, 0);
            })
          );
        }),
        catchError(error => {
          console.error('Firestore error:', error);
          return of(0);
        })
      );
  }






}