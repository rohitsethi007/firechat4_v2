import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.page.html',
  styleUrls: ['./admin-groups.page.scss'],
})
export class AdminGroupsPage implements OnInit {
  groups: any = [];
  categories: any = [];
  isLoading: boolean = true;
  filteredGroups: any = [];
  selectedCategoryFilter: string = 'all';

  constructor(
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loadAllGroups();
    this.loadAllCategories();
  }

  loadAllGroups() {
    this.isLoading = true;
    this.firestore.collection('groups').snapshotChanges().subscribe((groupsRes: any) => {
      if (groupsRes) {
        this.groups = [];
        groupsRes.forEach(group => {
          let groupData = group.payload.doc.data();
          groupData.key = group.payload.doc.id;
          this.groups.push(groupData);
        });
        this.filteredGroups = [...this.groups];
        this.isLoading = false;
      }
    }, error => {
      console.error('Error loading groups:', error);
      this.isLoading = false;
      this.presentToast('Error loading groups. Please try again.');
    });
  }

  loadAllCategories() {
    this.firestore.collection('categories').snapshotChanges().subscribe((catsRes: any) => {
      if (catsRes) {
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.payload.doc.data();
          category.key = cat.payload.doc.id;
          this.categories.push(category);
        });
      }
    });
  }

  filterByCategory(event: any) {
    const categoryId = event.detail.value;
    this.selectedCategoryFilter = categoryId;
    
    if (categoryId === 'all') {
      this.filteredGroups = [...this.groups];
    } else {
      this.filteredGroups = this.groups.filter(group => {
        // Debug logging
        console.log('Group:', group.name, 'CategoryId:', group.categoryId, 'Selected:', categoryId);
        
        // Handle case where categoryId might be missing, null, or of different type
        if (!group.categoryId) {
          return false;
        }
        
        return group.categoryId.toString() === categoryId.toString();
      });
    }
  }

  async presentNewGroupModal() {
    // First, check if we have categories
    if (this.categories.length === 0) {
      this.presentToast('Please create categories first');
      return;
    }

    // Create a list of category options for the alert
    const categoryInputs = this.categories.map((category, index) => ({
      name: 'categoryId',
      type: 'radio',
      label: category.name,
      value: category.key,
      checked: index === 0
    }));
    
    // First alert to select category
    const categoryAlert = await this.alertController.create({
      header: 'Select Category',
      inputs: categoryInputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Next',
          handler: (categoryId) => {
            this.showGroupDetailsAlert(categoryId);
            return true;
          }
        }
      ]
    });
    
    await categoryAlert.present();
  }
  
  async showGroupDetailsAlert(categoryId: string) {
    const alert = await this.alertController.create({
      header: 'New Group Details',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Group Name'
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'Group Description'
        },
        {
          name: 'img',
          type: 'text',
          placeholder: 'Image URL (optional)'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.name) {
              // Combine the data with the selected categoryId
              const groupData = {
                ...data,
                categoryId: categoryId
              };
              this.createGroup(groupData);
              return true;
            } else {
              this.presentToast('Group name is required');
              return false;
            }
          }
        }
      ]
    });
    
    await alert.present();
  }

  async createGroup(data) {
    const loading = await this.loadingController.create({
      message: 'Creating group...',
      spinner: 'crescent'
    });
    await loading.present();

    const selectedCategory = this.categories.find(cat => cat.key === data.categoryId);
    
    // Default image for groups if none provided
    const defaultImage = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';
    
    const group = {
      name: data.name,
      description: data.description || '',
      categoryId: data.categoryId,
      categoryName: selectedCategory ? selectedCategory.name : '',
      dateCreated: new Date(),
      members: [],
      posts: [],
      polls: [],
      img: data.img || defaultImage
    };

    this.firestore.collection('groups').add(group)
      .then(() => {
        loading.dismiss();
        this.presentToast('Group created successfully');
      })
      .catch(error => {
        loading.dismiss();
        console.error('Error creating group:', error);
        this.presentToast('Error creating group. Please try again.');
      });
  }

  async editGroup(group) {
    // Create a list of category options for the alert
    const categoryInputs = this.categories.map(category => ({
      name: 'categoryId',
      type: 'radio',
      label: category.name,
      value: category.key,
      checked: category.key === group.categoryId
    }));
    
    // First alert to select category
    const categoryAlert = await this.alertController.create({
      header: 'Select Category',
      inputs: categoryInputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Next',
          handler: (categoryId) => {
            this.showEditGroupDetailsAlert(group, categoryId);
            return true;
          }
        }
      ]
    });
    
    await categoryAlert.present();
  }
  
  async showEditGroupDetailsAlert(group, categoryId: string) {
    const alert = await this.alertController.create({
      header: 'Edit Group Details',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: group.name,
          placeholder: 'Group Name'
        },
        {
          name: 'description',
          type: 'textarea',
          value: group.description || '',
          placeholder: 'Group Description'
        },
        {
          name: 'img',
          type: 'text',
          value: group.img || '',
          placeholder: 'Image URL'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.name) {
              // Combine the data with the selected categoryId
              const groupData = {
                ...data,
                categoryId: categoryId
              };
              this.updateGroup(group.key, groupData);
              return true;
            } else {
              this.presentToast('Group name is required');
              return false;
            }
          }
        }
      ]
    });
    
    await alert.present();
  }

  async updateGroup(groupId, data) {
    const loading = await this.loadingController.create({
      message: 'Updating group...',
      spinner: 'crescent'
    });
    await loading.present();

    const selectedCategory = this.categories.find(cat => cat.key === data.categoryId);
    
    // Default image for groups if none provided
    const defaultImage = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';

    this.firestore.doc(`groups/${groupId}`).update({
      name: data.name,
      description: data.description || '',
      categoryId: data.categoryId,
      categoryName: selectedCategory ? selectedCategory.name : '',
      img: data.img || defaultImage
    })
    .then(() => {
      loading.dismiss();
      this.presentToast('Group updated successfully');
    })
    .catch(error => {
      loading.dismiss();
      console.error('Error updating group:', error);
      this.presentToast('Error updating group. Please try again.');
    });
  }

  async deleteGroup(group) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete the group "${group.name}"? This action cannot be undone.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.confirmDeleteGroup(group);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmDeleteGroup(group) {
    const loading = await this.loadingController.create({
      message: 'Deleting group...',
      spinner: 'crescent'
    });
    await loading.present();

    this.firestore.doc(`groups/${group.key}`).delete()
      .then(() => {
        loading.dismiss();
        this.presentToast('Group deleted successfully');
      })
      .catch(error => {
        loading.dismiss();
        console.error('Error deleting group:', error);
        this.presentToast('Error deleting group. Please try again.');
      });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.key === categoryId);
    return category ? category.name : 'Uncategorized';
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }
}