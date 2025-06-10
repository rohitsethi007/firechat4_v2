import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../services/data.service';
import { NavController, AlertController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.page.html',
  styleUrls: ['./group-search.page.scss'],
})
export class GroupSearchPage implements OnInit {
  groupSearch: any;
  category: any;
  groups: any[] = [];
  loggedInUserId: string = '';
  searchGroup: string = '';

  constructor(
    private router: Router,
    public dataProvider: DataService,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private loadingProvider: LoadingService
  ) {
    this.category = this.router.getCurrentNavigation()?.extras?.state?.category;
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid || '';
    });
  }
 
  ngOnInit() {
    // First get the user's groups
    this.dataProvider.getCurrentUser().then((userRef) => {
      userRef.get().subscribe((userData: any) => {
        const userGroups = userData.data()?.groups || [];
        
        // Then get the filtered groups by category
        this.firestore.collection('groups').ref
        .where('categoryId', '==', this.category.key)
        .get().then((groupsRes: any) => {
          this.groups = [];
          groupsRes.forEach((f: any) => {
            let group: any = f.data();
            group.key = f.id;
            
            // Check if the user is a member using the user's groups array
            if (Array.isArray(userGroups) && userGroups.includes(group.key)) {
              group.isUserMember = true;
            } else {
              // Double-check with the group's members array as a fallback
              if (group.members && Array.isArray(group.members) && group.members.includes(this.loggedInUserId)) {
                group.isUserMember = true;
              } else {
                group.isUserMember = false;
              }
            }
            this.groups.push(group);
          });
        });
      });
    });
  }

  onCancel() {
    this.navCtrl.back();
  }

  // Open Group Chat.
  viewGroup(group: any) {
    if (group.isUserMember) {
      this.router.navigateByUrl('groupinfo/' + group.key);
    } else {
      // If user is not a member, redirect to join page
      this.joinGroup(group.key);
    }
  }
  
  joinGroup(groupId: string) {
    // Store the current URL to detect when we return
    const currentUrl = this.router.url;
    
    // Navigate to join page
    this.router.navigateByUrl('group-join/' + groupId);
    
    // Set up one-time listener for navigation back to this page
    const subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // If we've returned to the search page
        if (event.url === currentUrl) {
          // Refresh the data
          this.ngOnInit();
          // Unsubscribe to avoid memory leaks
          subscription.unsubscribe();
        }
      });
  }

  async confirmLeaveGroup(group: any) {
    // Count how many groups the user is a member of
    const userGroups = this.groups.filter(g => g.isUserMember);
    
    // If user is only in one group, don't allow leaving
    if (userGroups.length <= 1) {
      const alert = await this.alertController.create({
        header: 'Cannot Leave Group',
        message: 'You must be a member of at least one group. Please join another group before leaving this one.',
        buttons: ['OK'],
        cssClass: 'custom-alert'
      });
      
      await alert.present();
      return;
    }
    
    // Otherwise show the normal leave confirmation
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
    this.loadingProvider.show();
    
    // Remove user from group members
    const updatedMembers = group.members.filter((memberId: string) => memberId !== this.loggedInUserId);
    
    // Create a batch write to update both documents
    const batch = this.firestore.firestore.batch();
    
    // Reference to group document
    const groupRef = this.firestore.collection('groups').doc(group.key).ref;
    
    // Reference to user's account document
    const userRef = this.firestore.collection('accounts').doc(this.loggedInUserId).ref;
    
    // Update group members
    batch.update(groupRef, { members: updatedMembers });
    
    // Update user's groups array using arrayRemove
    batch.update(userRef, {
      groups: firebase.firestore.FieldValue.arrayRemove(group.key)
    });
  
    // Commit the batch
    batch.commit()
      .then(() => {
        // Update the local group data
        group.isUserMember = false;
        group.members = updatedMembers;
        
        // Show success message
        this.loadingProvider.showToast('You have left the group');
        this.loadingProvider.hide();
      })
      .catch(error => {
        console.error('Error leaving group:', error);
        this.loadingProvider.showToast('Error leaving group. Please try again.');
        this.loadingProvider.hide();
      });
  }
}