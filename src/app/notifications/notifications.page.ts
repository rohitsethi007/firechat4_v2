// notifications.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Notification } from '../models/interfaces';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  loading = true;
  private notificationsSub: Subscription;

  constructor(
    private notificationsService: NotificationsService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadNotifications();
  }

  ngOnDestroy() {
    if (this.notificationsSub) {
      this.notificationsSub.unsubscribe();
    }
  }

  loadNotifications() {
    this.loading = true;
    this.notificationsSub = this.notificationsService.getUserNotifications()
      .subscribe({
        next: (notifications) => {
          this.notifications = notifications;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading notifications:', error);
          this.loading = false;
        }
      });
  }

  async handleNotificationClick(notification: Notification) {
    await this.notificationsService.markAsRead(notification.id);
    
    switch(notification.type) {
      case 'comment':
      case 'reaction':
        this.router.navigate(['/post', notification.postId]);
        break;
      case 'message':
        this.router.navigate(['/chat', notification.fromUser.userId]);
        break;
    }
  }

// notifications.page.ts
async clearAll() {
  const alert = await this.alertCtrl.create({
    header: 'Clear Notifications',
    message: 'Are you sure you want to clear all notifications?',
    cssClass: 'custom-alert',
    buttons: [
      {
        text: 'Cancel',
        cssClass: 'alert-button-cancel',
        role: 'cancel'
      },
      {
        text: 'Clear',
        cssClass: 'alert-button-delete',
        handler: () => {
          this.notificationsService.clearAllNotifications();
        }
      }
    ]
  });

  await alert.present();
}


  doRefresh(event) {
    this.loadNotifications();
    event.target.complete();
  }
}
