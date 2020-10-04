import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss', './groups.shell.scss'],
})
export class GroupsPage implements OnInit {
  groups: any;
  searchGroup: any;
  categories: any = [];
  updateDateTime: any;
  unreadMessagesCount: any;
  loggedInUserId: any;
  // GroupsPage
  // This is the page where the user can add, view and search for groups.
  constructor(
    private router: Router,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private firestore: AngularFirestore) {
      this.loggedInUserId = this.dataProvider.getCurrentUserId();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Initialize
    this.searchGroup = '';
    this.loadingProvider.show();
    this.loadAllCategories();
    // Get groups
    this.dataProvider.getGroups().snapshotChanges().subscribe((groups: any) => {

      this.groups = [];
      groups.forEach(element => {
        let group = element.payload.doc.data();
        group.key = element.payload.doc.id;
        if (group.members.some(e => e === this.loggedInUserId )) {
          group.isUserMember = true;
        } else {
          group.isUserMember = false;
        }
        this.groups.push(group);
      });
    });
  }

  loadAllCategories() {
    this.firestore.collection('categories').ref.orderBy('sort', 'asc').onSnapshot((catsRes: any) => {
      if (catsRes) {
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.data();
          category.key = cat.id;
          console.log('category', category);
          this.categories.push(category);
        });
      }
    });
  }

  // Open Group Chat.
  viewGroup(group) {
    if (group.isUserMember) {
      this.router.navigateByUrl('group/' + group.key);
    }
  }
  
  searchGroupByCategory(category) {
    const groupSearch = {category};
    // this.router.navigateByUrl('group-search/' + groupSearch);
    this.router.navigateByUrl('/group-search', { state: groupSearch });
    // this.router.navigateByUrl(['group-search', {state: {data: {category}}});
  }

  joinGroup(groupId) {
    this.router.navigateByUrl('group-join/' + groupId);
  }
}
