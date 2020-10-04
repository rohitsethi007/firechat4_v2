import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-category-modal',
  templateUrl: './new-category-modal.page.html',
  styleUrls: ['./new-category-modal.page.scss'],
})
export class NewCategoryModalPage implements OnInit {
  categoryForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dateCreated:  new Date(),
      description: Validators.compose([
        Validators.required
      ]),
      img: ''
    });
  }

  submit() {
    const category = {
      name: this.categoryForm.value.name,
      description: this.categoryForm.value.description,
      dateCreated: new Date(),
      country: 'India',
      img: this.categoryForm.value.img
    };

    this.firestore.collection('categories').add(category);
  }
}
