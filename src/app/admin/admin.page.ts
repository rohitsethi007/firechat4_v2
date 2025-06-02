import { Component, OnInit } from '@angular/core';
import { DataCleanupService } from '../services/data-cleanup.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    private dataCleanupService: DataCleanupService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async confirmDataCleanup() {
    const alert = await this.alertController.create({
      header: 'Confirm Data Cleanup',
      message: 'This will delete ALL data except groups. This action cannot be undone. Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes, Delete Data',
          role: 'destructive',
          handler: () => {
            this.clearAllDataExceptGroups();
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  async clearAllDataExceptGroups() {
    try {
      await this.dataCleanupService.clearAllDataExceptGroups();
      console.log('Data cleanup completed');
    } catch (error) {
      console.error('Error during data cleanup:', error);
    }
  }
}