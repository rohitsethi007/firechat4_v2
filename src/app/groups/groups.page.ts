import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss', './groups.shell.scss'],
})
export class GroupsPage implements OnInit {
  groups: any[] = [];
  filteredGroups: any[] = []; // Add this for search functionality
  searchTerm: string = ''; // Add this for search functionality
  searchGroup: any;
  categories: any = [];
  updateDateTime: any;
  unreadMessagesCount: any;
  loggedInUserId: any;
  slideOpts = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true
  };


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private firestore: AngularFirestore,
    private alertController: AlertController,
  ) {}

  ionViewWillEnter() {
    console.log('Entering feed view');
    
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      console.log('Current user:', this.loggedInUserId);
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
        console.info('group', group.members)
        console.info('loggedInUserId', this.loggedInUserId)
        if (group.members.some(e => e === this.loggedInUserId )) {
          group.isUserMember = true;
        } else {
          group.isUserMember = false;
        }
        this.groups.push(group);
      });
      this.filteredGroups = this.groups; // Initialize filtered groups
      this.loadingProvider.hide(); // Hide loading after groups are loaded
    });
    });
  }
  ngOnInit() {}
  // Add this new method for search functionality
  filterGroups() {
    if (!this.searchTerm?.trim()) {
      this.filteredGroups = this.groups;
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase().trim();
    this.filteredGroups = this.groups.filter(group => {
      return (
        group.name.toLowerCase().includes(searchTermLower) ||
        (group.description && group.description.toLowerCase().includes(searchTermLower))
      );
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
  async confirmLeaveGroup(group: any) {
    const alert = await this.alertController.create({
      header: 'Leave Group',
      message: 'Are you sure you want to leave this group? Your posts will remain in the group but you will no longer have access to group content.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Leave Group',
          role: 'destructive',
          handler: () => {
            this.leaveGroup(group);
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  leaveGroup(group: any) {
    // Remove user from group members
    const updatedMembers = group.members.filter(memberId => memberId !== this.loggedInUserId);
    
    this.firestore.collection('groups').doc(group.key).update({
      members: updatedMembers
    }).then(() => {
      // Update local group data
      group.isUserMember = false;
      group.members = updatedMembers;
    }).catch(error => {
      console.error('Error leaving group:', error);
      // Handle error (maybe show a toast message)
    });
  }
}
