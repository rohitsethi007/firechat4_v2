import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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
    private firestore: Firestore,
    public navCtrl: NavController
  ) {
    this.groupId = this.route.snapshot.params.id;
    console.info('groupId', this.groupId);
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggedInUserId = user.uid;
        this.loggedInUser = user;
        console.info('userId', user);
      } else {
        this.loggedInUserId = null;
        this.loggedInUser = null;
        console.info('userId', user);
      }
    });
  }

  ngOnInit() {
    this.getGroupData();
  }

  getGroupData() {
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((p: any) => {
      let group = p.payload.data();
      group.key = p.payload.id;
      
      // Check if user is already a member
      if (group.members && Array.isArray(group.members) && group.members.includes(this.loggedInUserId)) {
        group.isUserMember = true;
      } else {
        group.isUserMember = false;
      }
      
      this.group = group;
    });
  }

  joinGroup() {
    console.info('loggedinuser', this.loggedInUser)
    
    // First check if user is already a member of this group
    if (this.group.members && this.group.members.includes(this.loggedInUserId)) {
      // User is already a member, just navigate back
      this.navCtrl.back();
      return;
    }
    
    // Add group to user's groups
    if (this.loggedInUser.groups) {
      if (!this.loggedInUser.groups.includes(this.groupId)) {
        this.loggedInUser.groups.push(this.groupId);
      }
    } else {
      this.loggedInUser.groups = [this.groupId];
    }

    // Update group data on the database.
    this.dataProvider.getUser(this.loggedInUserId).update({
      groups: this.loggedInUser.groups
    }).then(() => {
      // Initialize members array if it doesn't exist
      if (!this.group.members) {
        this.group.members = [];
      }
      
      // Add user as member of the group if not already a member
      if (!this.group.members.includes(this.loggedInUserId)) {
        this.group.members.push(this.loggedInUserId);
      }

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
