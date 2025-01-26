import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-group-join',
  templateUrl: './group-join.page.html',
  styleUrls: ['./group-join.page.scss'],
})
export class GroupJoinPage implements OnInit {
  loggedInUser: any;
  groupId: any;
  group: any = {};
  termsAgreed = false;
  loggedInUserId: any;

  constructor(
    private dataProvider: DataService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public navCtrl: NavController
  ) {
    this.groupId = this.route.snapshot.params.id;
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      this.loggedInUser = user;
      console.info('userId', user)
    })
  }

  ngOnInit() {
    this.getGroupData();
  }

  getGroupData() {
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((p: any) => {
      let group = p.payload.data();
      group.key = p.key;
      this.group = group;
    });
  }

  joinGroup() {
    console.info('loggedinuser', this.loggedInUser)
    if (this.loggedInUser.groups) {
      this.loggedInUser.groups.push(this.groupId);
    } else {
      this.loggedInUser.groups = [this.groupId];
    }

     // Update group data on the database.
    this.dataProvider.getUser(this.loggedInUserId).update({
      groups: this.loggedInUser.groups
    }).then(() => {
      // Add friend as members of the group.
      this.group.members.push(this.loggedInUserId);

      // Update group data on the database.
      this.dataProvider.getGroup(this.groupId).update({
        members: this.group.members,
        messages: this.group.messages
      });
    }).then(() => {
      this.navCtrl.back();
    });
  }
}
