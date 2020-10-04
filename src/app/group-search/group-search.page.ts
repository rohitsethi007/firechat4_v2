import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.page.html',
  styleUrls: ['./group-search.page.scss'],
})
export class GroupSearchPage implements OnInit {
  groupSearch: any;
  category: any;
  groups: any;
  loggedInUserId: any;
  searchGroup: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {
    this.category = this.router.getCurrentNavigation().extras.state.category;
    this.loggedInUserId = this.dataProvider.getCurrentUserId();
  }
 
  ngOnInit() {
    this.firestore.collection('groups').ref
    .where('categoryId', '==', this.category.key)
    .get().then((groupsRes: any) => {
      this.groups = [];
      groupsRes.forEach(f => {
        let group: any;
        group = f.data();
        group.key = f.id;

        if (group.members.some(e => e === this.loggedInUserId )) {
          group.isUserMember = true;
        } else {
          group.isUserMember = false;
        }
        this.groups.push(group);
      });
    });
  }

  onCancel() {
    this.navCtrl.back();
  }

  // Open Group Chat.
  viewGroup(groupId) {
    this.router.navigateByUrl('group/' + groupId);
  }
}
