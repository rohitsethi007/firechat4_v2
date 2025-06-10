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
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.loggedInUserId = user.uid;
        this.loggedInUser = user;
      } else {
        this.loggedInUserId = null;
        this.loggedInUser = null;
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
    // First check if user is already a member of this group
    if (this.group.members && this.group.members.includes(this.loggedInUserId)) {
      // User is already a member, just navigate back
      this.navCtrl.back();
      return;
    }
    
    // Get the current user data from Firestore to ensure we have the latest groups array
    this.dataProvider.getCurrentUser().then((userRef) => {
      userRef.get().subscribe((userData: any) => {
        const currentUserData = userData.data();
        let userGroups = currentUserData?.groups || [];
        
        // Add the new group if not already in the array
        if (!userGroups.includes(this.groupId)) {
          userGroups.push(this.groupId);
        }
        
        // Update user's groups in Firestore
        this.dataProvider.getUser(this.loggedInUserId).update({
          groups: userGroups
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
            members: this.group.members
          }).then(() => {
            this.navCtrl.back();
          });
        });
      });
    });
  }
}
