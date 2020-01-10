import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-modal',
  templateUrl: './tag-modal.page.html',
  styleUrls: ['./tag-modal.page.scss'],
})
export class TagModalPage implements OnInit {
  private groupTags;
  private form = [];

  constructor(
    private modal: ModalController,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.form = [];

    this.groupTags = this.route.snapshot.params.groupTags;
    this.form = this.groupTags;
  }

  ngOnInit() {
  }

  closeModal() {
    const data = [];
    this.form.forEach(element => {
 
        data.push(element);
    });
    this.modal.dismiss(data,null,null);
  }
}
