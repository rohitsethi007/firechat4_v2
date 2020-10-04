import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.page.html',
  styleUrls: ['./admin-categories.page.scss'],
})
export class AdminCategoriesPage implements OnInit {
  isSuperAdmin: true;
  categories: any = [];

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.firestore.collection('categories').snapshotChanges().subscribe((catsRes: any) => {
      if (catsRes) {
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.payload.doc.data();
          category.key = cat.payload.doc.id;
          console.log('category', category);
          this.categories.push(category);
        });
      }
    });
  }
}
