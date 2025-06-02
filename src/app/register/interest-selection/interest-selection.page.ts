import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-interest-selection',
  templateUrl: './interest-selection.page.html',
  styleUrls: ['./interest-selection.page.scss'],
})
export class InterestSelectionPage implements OnInit {
  categories: any[] = [];
  groups: any[] = [];
  filteredGroups: any[] = [];
  selectedCategories: string[] = [];
  selectedGroups: string[] = [];
  loggedInUserId: string;

  constructor(
    private router: Router,
    private loadingProvider: LoadingService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.loadingProvider.show();
    
    try {
      // Get current user
      const user = await this.afAuth.currentUser;
      if (!user) {
        // If no user is found, redirect to login
        this.router.navigateByUrl('/login', { replaceUrl: true });
        this.loadingProvider.hide();
        return;
      }
      
      this.loggedInUserId = user.uid;
      
      // Store user in local storage for auth guard
      await this.firestore.collection('accounts').doc(user.uid).get().toPromise()
        .then(async (doc) => {
          if (doc.exists) {
            const userData = doc.data();
            // Store user data in local storage
            localStorage.setItem('currentUser', JSON.stringify(userData));
          }
        });
      
      // Load categories
      await this.loadCategories();
      
      // Load groups
      await this.loadGroups();
      
      this.loadingProvider.hide();
    } catch (error) {
      console.error('Error loading data:', error);
      this.loadingProvider.hide();
      // Redirect to login on error
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  loadCategories() {
    return new Promise<void>((resolve) => {
      this.firestore.collection('categories').ref.orderBy('sort', 'asc')
        .get().then((snapshot) => {
          this.categories = [];
          snapshot.forEach(doc => {
            const category = doc.data();
            category['key'] = doc.id;
            this.categories.push(category);
          });
          resolve();
        });
    });
  }

  loadGroups() {
    return new Promise<void>((resolve) => {
      this.firestore.collection('groups').ref
        .get().then((snapshot) => {
          this.groups = [];
          snapshot.forEach(doc => {
            const group = doc.data();
            group['key'] = doc.id;
            group['selected'] = false;
            this.groups.push(group);
          });
          this.filteredGroups = [...this.groups];
          resolve();
        });
    });
  }

  toggleCategory(category) {
    const index = this.selectedCategories.indexOf(category.key);
    
    if (index > -1) {
      // Remove category
      this.selectedCategories.splice(index, 1);
    } else {
      // Add category
      this.selectedCategories.push(category.key);
    }
    
    // Filter groups based on selected categories
    this.filterGroupsByCategories();
  }

  filterGroupsByCategories() {
    if (this.selectedCategories.length === 0) {
      // If no categories selected, show all groups
      this.filteredGroups = [...this.groups];
    } else {
      // Filter groups by selected categories
      this.filteredGroups = this.groups.filter(group => 
        group.categoryId && this.selectedCategories.includes(group.categoryId)
      );
    }
  }

  updateSelectedGroups() {
    this.selectedGroups = this.groups
      .filter(group => group.selected)
      .map(group => group.key);
    
    // If more than 5 groups are selected, show warning
    if (this.selectedGroups.length > 5) {
      this.loadingProvider.showToast('Maximum 5 groups allowed');
    }
  }

  async confirmSelection() {
    if (this.selectedGroups.length === 0) {
      this.loadingProvider.showToast('Please select at least 1 group');
      return;
    }
    
    if (this.selectedGroups.length > 5) {
      this.loadingProvider.showToast('Please select a maximum of 5 groups');
      return;
    }
    
    this.loadingProvider.show();
    
    try {
      // Update user's groups in Firestore
      await this.firestore.collection('accounts').doc(this.loggedInUserId).update({
        groups: this.selectedGroups
      });
      
      // Add user to each group's members array
      const batch = this.firestore.firestore.batch();
      
      this.selectedGroups.forEach(groupId => {
        const groupRef = this.firestore.collection('groups').doc(groupId).ref;
        batch.update(groupRef, {
          members: firebase.firestore.FieldValue.arrayUnion(this.loggedInUserId)
        });
      });
      
      await batch.commit();
      
      // Navigate to feed page
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
    } catch (error) {
      console.error('Error saving group selections:', error);
      this.loadingProvider.showToast('Error saving your selections. Please try again.');
    } finally {
      this.loadingProvider.hide();
    }
  }

  // Skip selection method removed as it's no longer needed
}