import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-blockedlist',
  templateUrl: './blockedlist.page.html',
  styleUrls: ['./blockedlist.page.scss'],
})
export class BlockedlistPage implements OnInit {

  blockedList: any = [];

  constructor(
    private afAuth: AngularFireAuth,
    private dataProvider: DataService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.dataProvider.getBlockedLists().get().then((conversations => {
      let tmp = [];
      conversations.forEach(conversation => {
        // fetch blocked conversation & user info
        this.dataProvider.getUser(conversation.id).snapshotChanges().subscribe((data: any) => {
          tmp.push({ key: conversation.id, name: data.name, img: data.img });
        });
      })
      console.log(tmp);
      this.blockedList = tmp;
    }));
  }

  unblock(uid) {
    console.log(uid);
    this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid + '/conversations/' + uid).update({
      blocked: false
    });
    // this.afdb.object('accounts/' + this.afAuth.auth.currentUser.uid + '/conversations/' + uid).update({
    //   blocked: false
    // })
  }

}
