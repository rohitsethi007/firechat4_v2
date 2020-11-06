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
    this.dataProvider.getBlockedLists().then((conversations => {
      let tmp = [];
      conversations.get().then((conversation) => {
        conversation.forEach(conversation => {
          // fetch blocked conversation & user info
          this.dataProvider.getUser(conversation.id).snapshotChanges().subscribe((data: any) => {
            tmp.push({ key: conversation.id, name: data.name, img: data.img });
          });
        })
      })
      console.log(tmp);
      this.blockedList = tmp;
    }));
  }

  async unblock(uid) {
    console.log(uid);
    let fuid = await this.afAuth.currentUser.then((data) => { return data.uid });
    this.firestore.doc('accounts/' + fuid + '/conversations/' + uid).update({
      blocked: false
    });
  }

}
