import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-new-category-modal',
  templateUrl: './new-category-modal.page.html',
  styleUrls: ['./new-category-modal.page.scss'],
})
export class NewCategoryModalPage implements OnInit {
  categoryForm: UntypedFormGroup;
  name: string;
  description: string;
  img: string;
 
  constructor(
    private formBuilder: UntypedFormBuilder,
    private firestore: AngularFirestore,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.categoryForm = this.formBuilder.group({
      name: new UntypedFormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      description: new UntypedFormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      img: new UntypedFormControl('')
    });
  }

  async submit() {
    if (this.categoryForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Creating category...',
        spinner: 'crescent'
      });
      await loading.present();

      // Set default image if none provided
      const defaultImage = 'https://ionicframework.com/docs/img/demos/card-media.png';
      
      const category = {
        name: this.categoryForm.value.name,
        description: this.categoryForm.value.description,
        dateCreated: new Date(),
        img: this.categoryForm.value.img || defaultImage,
        sort: 999 // Add sort field with high value to place at end
      };

      try {
        await this.firestore.collection('categories').add(category);
        loading.dismiss();
        this.presentToast('Category created successfully');
        this.router.navigate(['/admin-categories']);
      } catch (error) {
        loading.dismiss();
        console.error('Error creating category:', error);
        this.presentToast('Error creating category. Please try again.');
      }
    } else {
      this.markFormGroupTouched(this.categoryForm);
      this.presentToast('Please fill in all required fields correctly.');
    }
  }

  // Helper method to mark all controls in a form group as touched
  private markFormGroupTouched(formGroup: UntypedFormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof UntypedFormGroup) {
        this.markFormGroupTouched(control);
      }
    });
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
