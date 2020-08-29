import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { DataService } from './data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public firestore: AngularFirestore,
    public loadingProvider: LoadingService,
    private afAuth: AngularFireAuth,
    private dataProvider: DataService) { }

  // Send friend request to userId.
  sendFriendRequest(userId) {
    const loggedInUserId = this.afAuth.auth.currentUser.uid;
    this.loadingProvider.show();

    let requestsSent;
    // Use take(1) so that subscription will only trigger once.
    this.dataProvider.getRequests(loggedInUserId).get().subscribe((requests: any) => {
      if (requests.data() != null
        && requests.data().requestsSent != null) {
        requestsSent = requests.data().requestsSent;
      }

      if (requestsSent == null || requestsSent === undefined) {
        requestsSent = [userId];
      } else {
        if (requestsSent.indexOf(userId) === -1) {
          requestsSent.push(userId);
        }
      }

      // Add requestsSent information.
      this.firestore.collection('requests').doc(loggedInUserId).set({
        requestsSent
      }).then((success) => {
        let friendRequests;
        // tslint:disable-next-line: no-shadowed-variable
        this.dataProvider.getRequests(userId).get().subscribe((requests: any) => {
          if (requests.data() != null
            && requests.data().friendRequests != null) {
            friendRequests = requests.data().friendRequests;
          }

          if (friendRequests == null) {
            friendRequests = [loggedInUserId];
          } else {
            if (friendRequests.indexOf(userId) === -1) {
              friendRequests.push(loggedInUserId);
            }
          }
          // Add friendRequest information.
          this.firestore.collection('requests').doc(userId).set({
            friendRequests
          }).then((succ) => {
            this.loadingProvider.hide();
            this.loadingProvider.showToast('Friend Request Sent');
          }).catch((error) => {
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        console.log('error', error);
        this.loadingProvider.hide();
      });
    });
  }

  // Cancel friend request sent to userId.
  cancelFriendRequest(userId) {
    const loggedInUserId = this.afAuth.auth.currentUser.uid;
    this.loadingProvider.show();

    let requestsSent = [];
    this.dataProvider.getRequests(loggedInUserId).get().subscribe((requests: any) => {
      requestsSent = requests.data().requestsSent;
      requestsSent.splice(requestsSent.indexOf(userId), 1);
      // Update requestSent information.
      this.firestore.collection('requests').doc(loggedInUserId).set({
        requestsSent
      }).then((success) => {
        let friendRequests;
        this.dataProvider.getRequests(userId).get().subscribe((req: any) => {
          friendRequests = req.data().friendRequests;
          console.log(friendRequests);
          friendRequests.splice(friendRequests.indexOf(loggedInUserId), 1);
          // Update friendRequests information.
          this.firestore.collection('requests').doc(userId).set({
            friendRequests
          }).then((succ) => {
            console.log(succ);
            this.loadingProvider.hide();
            this.loadingProvider.showToast('Removed Friend Request');
          }).catch((error) => {
            console.log(error);
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        console.log(error);
        this.loadingProvider.hide();
      });
    });
  }

  // Delete friend request.
  deleteFriendRequest(userId) {
    const loggedInUserId = this.afAuth.auth.currentUser.uid;
    this.loadingProvider.show();

    let friendRequests = [];
    this.dataProvider.getRequests(loggedInUserId).get().subscribe((requests: any) => {
      friendRequests = requests.data().friendRequests;
      friendRequests = friendRequests.filter(u => u !== userId);
      // Update friendRequests information.
      this.firestore.collection('requests').doc(loggedInUserId).set({
        friendRequests
      }).then((success) => {
        let requestsSent;
        this.dataProvider.getRequests(userId).get().subscribe((req: any) => {
          requestsSent = req.data().requestsSent;
          requestsSent.splice(requestsSent.indexOf(loggedInUserId), 1);
          console.log('requestsSent:', requestsSent, loggedInUserId, requestsSent.indexOf(userId), 1);
          // Update requestsSent information.
          this.firestore.collection('requests').doc(userId).set({
            requestsSent
          }).then((succ) => {
            console.log(succ);
            this.loadingProvider.hide();

          }).catch((error) => {
            console.log(error);
            this.loadingProvider.hide();
          });
        });
      }).catch((err) => {
        console.log(err);
        this.loadingProvider.hide();
      });
    });
  }

  // Accept friend request.
  acceptFriendRequest(userId) {
    const loggedInUserId = this.afAuth.auth.currentUser.uid;
    // Delete friend request.
    this.deleteFriendRequest(userId);

    this.loadingProvider.show();
    this.dataProvider.getUser(loggedInUserId).get().subscribe((account: any) => {
      let friends = account.data().friends; 
      if (!friends) {
        friends = [userId];
      } else {
        friends.push(userId);
      }
      // Add both users as friends.
      this.dataProvider.getUser(loggedInUserId).update({
        friends
      }).then((success) => {
        this.dataProvider.getUser(userId).get().subscribe((acc: any) => {
          let friends = acc.data().friends;
          if (!friends) {
            friends = [loggedInUserId];
          } else {
            friends.push(loggedInUserId);
          }
          this.dataProvider.getUser(userId).update({
            friends
          }).then((succ) => {
            this.loadingProvider.hide();
          }).catch((error) => {
            this.loadingProvider.hide();
          });
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }
}
