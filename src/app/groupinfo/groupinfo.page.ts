import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-groupinfo',
  templateUrl: './groupinfo.page.html',
  styleUrls: ['./groupinfo.page.scss'],
})
export class GroupinfoPage implements OnInit {

  groupId: any;
  group: any;
  groupMembers: any = [];
  alert: any;
  user: any;
  groupPosts: any = [];

  // GroupInfoPage
  // This is the page where the user can view group information, change group information, add members, and leave/delete group.
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public dataProvider: DataService,
    public firestore: AngularFirestore,
    public loadingProvider: LoadingService,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Initialize

    this.groupId = this.route.snapshot.params.id;

    // Get group details.
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((p: any) => {
      let group = p.payload.data();
      group.key = p.key;
      if (group != null) {
        this.loadingProvider.show();
        this.group = group;
        group.members.forEach((memberId) => {
            this.dataProvider.getUser(memberId).snapshotChanges().subscribe((memberRes: any) => {
              let member = { $key: memberRes.payload.id, ...memberRes.payload.data() };
              this.addUpdateOrRemoveMember(member);
            });
          });

        // get group Posts
        if (this.group.posts) {
          this.firestore.collection('posts').ref
          .where(firebase.firestore.FieldPath.documentId(), 'in', this.group.posts)
          .get().then((po: any) => {
            this.groupPosts = [];
            this.loadEachPostData(po);
          });
        }
        this.loadingProvider.hide();
      } else {
        this.router.navigateByUrl('/');
      }
    });

    // Get user details.
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accounts: any) => {
      let account = accounts.payload.data();
      this.user = { $key: account.userId, ...account };
    });
  }

  loadEachPostData(po: any) {
    po.forEach(p => {
      let post: any;
      post = p.data();
      post.key = p.id;
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
    
      if (!this.groupPosts) {
        this.groupPosts = [post];
      } else {
        let index = -1;
        for (let i = 0; i < this.groupPosts.length; i++) {
          if (this.groupPosts[i].key == post.key) {
            index = i;
          }
        }
        if (index > -1) {
          this.groupPosts[index] = post;
        } else {
          this.groupPosts.push(post);
        }
      }
    });
  }

  // Check if user exists in the group then add/update user.
  // If the user has already left the group, remove user from the list.
  addUpdateOrRemoveMember(member) {
    if (this.group) {
      if (this.group.members.indexOf(member.$key) > -1) {
        // User exists in the group.
        if (!this.groupMembers) {
          this.groupMembers = [member];
        } else {
          var index = -1;
          for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key == member.$key) {
              index = i;
            }
          }
          // Add/Update User.
          if (index > -1) {
            this.groupMembers[index] = member;
          } else {
            this.groupMembers.push(member);
          }
        }
      } else {
        // User already left the group, remove member from list.
        var index1 = -1;
        for (var j = 0; j < this.groupMembers.length; j++) {
          if (this.groupMembers[j].$key == member.$key) {
            index1 = j;
          }
        }
        if (index1 > -1) {
          this.groupMembers.splice(index1, 1);
        }
      }
    }
  }

  // View user info.
  viewUser(userId) {
    if (this.dataProvider.getCurrentUserId !== userId) {
      this.router.navigateByUrl('/userinfo/' + userId);
    }
  }

  // Leave group.
  leaveGroup() {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Leave',
      message: 'Are you sure you want to leave this group?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Leave',
          handler: data => {
            this.loadingProvider.show();
            // Remove member from group.
            this.group.members.splice(this.group.members.indexOf(this.user.$key), 1);
            // Add system message.
            this.group.messages.push({
              date: new Date().toString(),
              sender: this.user.$key,
              type: 'system',
              message: this.user.name + ' has left this group.',
              icon: 'md-log-out'
            });
            // Update group on database.
            this.dataProvider.getGroup(this.groupId).update({
              members: this.group.members,
              messages: this.group.messages
            }).then((success) => {
              // Remove group from user's group list.
              this.firestore.doc('/accounts/' + this.dataProvider.getCurrentUserId + '/groups/' + this.groupId).delete().then(() => {
                // Pop this view because user already has left this group.
                this.group = null;
                setTimeout(() => {
                  this.loadingProvider.hide();
                  this.router.navigateByUrl('/')
                }, 300);
              });
            }).catch((error) => {
              this.loadingProvider.showToast("Something went wrong")

            });
          }
        }
      ]
    }).then(r => r.present());
  }

}
