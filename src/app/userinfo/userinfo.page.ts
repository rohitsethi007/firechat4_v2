import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController, ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {


  user: any;
  userId: any;
  friendRequests: any;
  requestsSent: any;
  friends: any;
  alert: any;
  // UserInfoPage
  // This is the page where the user can view user information, and do appropriate actions based on their relation to the current logged in user.
  constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    private router: Router,
    public modalCtrl: ModalController,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    public alertCtrl: AlertController,
    public firebaseProvider: FirebaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.userId = this.navParams.get('userId');
    this.userId = this.route.snapshot.params.id;
    console.log(this.userId);
    this.loadingProvider.show();
    // Get user info.
    this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user: any) => {
      this.user = { $key: user.key, ...user.payload.data() };
      console.log(this.user);
      this.loadingProvider.hide();
    });
    // Get friends of current logged in user.
    this.dataProvider.getUser(firebase.default.auth().currentUser.uid).snapshotChanges().subscribe((user: any) => {
      if (user.payload.data() != null)
        this.friends = user.payload.data().friends;
    });
    // Get requests of current logged in user.
    this.dataProvider.getRequests(firebase.default.auth().currentUser.uid).snapshotChanges().subscribe(((requests: any) => {
      console.log(requests.payload.data())
      if (requests.payload.data() != null) {
        this.friendRequests = requests.payload.data().friendRequests;
        this.requestsSent = requests.payload.data().requestsSent;
      }
    }));
  }

  block() {
    this.loadingProvider.show();
    console.log("block function");
    firebase.default.database().ref('accounts/' + firebase.default.auth().currentUser.uid + '/conversations/' + this.userId).update({
      blocked: true
    }).then(() => {
      this.loadingProvider.hide();
      this.loadingProvider.showToast("User Blocked");
      this.router.navigateByUrl('/');
    }).catch(() => {
      this.loadingProvider.hide();
      this.loadingProvider.showToast("Something went wrong");
    });

  }

  // Enlarge user's profile image.
  enlargeImage(img) {
    // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
    // imageModal.present();
  }

  // Accept friend request.
  acceptFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Friend Request',
      message: 'Do you want to accept <b>' + this.user.name + '</b> as your friend?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Accept',
          handler: () => {
            this.firebaseProvider.acceptFriendRequest(this.userId);
          }
        }
      ]
    }).then(r => r.present());
  }

  // Deny friend request.
  rejectFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Reject Friend Request',
      message: 'Do you want to reject <b>' + this.user.name + '</b> as your friend?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Reject',
          handler: () => {
            this.firebaseProvider.deleteFriendRequest(this.userId);
          }
        }
      ]
    }).then(r => r.present());
  }

  // Cancel friend request sent.
  cancelFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Friend Request Pending',
      message: 'Do you want to delete your friend request to <b>' + this.user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Delete',
          handler: () => {
            this.firebaseProvider.cancelFriendRequest(this.userId);
          }
        }
      ]
    }).then(r => r.present());
  }

  // Send friend request.
  sendFriendRequest() {
    this.alert = this.alertCtrl.create({
      header: 'Send Friend Request',
      message: 'Do you want to send friend request to <b>' + this.user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Send',
          handler: () => {
            this.firebaseProvider.sendFriendRequest(this.userId);
          }
        }
      ]
    }).then(r => r.present());
  }

  // Open chat with this user.
  sendMessage() {
    this.router.navigateByUrl('/message/' + this.userId);
    // this.navCtrl.push(MessagePage, { userId: this.userId });
  }

  // Check if user can be added, meaning user is not yet friends nor has sent/received any friend requests.
  canAdd() {
    if (this.friendRequests) {
      if (this.friendRequests.indexOf(this.userId) > -1) {
        return false;
      }
    }
    if (this.requestsSent) {
      if (this.requestsSent.indexOf(this.userId) > -1) {
        return false;
      }
    }
    if (this.friends) {
      if (this.friends.indexOf(this.userId) > -1) {
        return false;
      }
    }
    return true;
  }

}
