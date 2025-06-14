import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.page.html',
  styleUrls: ['./admin-categories.page.scss'],
})
export class AdminCategoriesPage implements OnInit {
  isSuperAdmin: true;
  categories: any = [];
  isLoading: boolean = true;

  constructor(
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.isLoading = true;
    this.firestore.collection('categories').snapshotChanges().subscribe((catsRes: any) => {
      if (catsRes) {
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.payload.doc.data();
          category.key = cat.payload.doc.id;
          this.categories.push(category);
        });
        this.isLoading = false;
      }
    }, error => {
      console.error('Error loading categories:', error);
      this.isLoading = false;
      this.presentToast('Error loading categories. Please try again.');
    });
  }

  async editCategory(category) {
    const alert = await this.alertController.create({
      header: 'Edit Category',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: category.name,
          placeholder: 'Category Name'
        },
        {
          name: 'description',
          type: 'textarea',
          value: category.description || '',
          placeholder: 'Category Description'
        },
        {
          name: 'img',
          type: 'text',
          value: category.img || '',
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
              this.updateCategory(category.key, data);
              return true;
            } else {
              this.presentToast('Category name is required');
              return false;
            }
          }
        }
      ]
    });

    await alert.present();
  }

  updateCategory(categoryId: string, data: any) {
    this.firestore.doc(`categories/${categoryId}`).update({
      name: data.name,
      description: data.description,
      img: data.img
    })
    .then(() => {
      this.presentToast('Category updated successfully');
    })
    .catch(error => {
      console.error('Error updating category:', error);
      this.presentToast('Error updating category. Please try again.');
    });
  }

  async deleteCategory(category) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: `Are you sure you want to delete the category "${category.name}"? This action cannot be undone.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.firestore.doc(`categories/${category.key}`).delete()
              .then(() => {
                this.presentToast('Category deleted successfully');
              })
              .catch(error => {
                console.error('Error deleting category:', error);
                this.presentToast('Error deleting category. Please try again.');
              });
          }
        }
      ]
    });

    await alert.present();
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
