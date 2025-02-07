// notifications.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';
import { Notification } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  // Create a new notification
  async createNotification(notification: Partial<Notification>) {
    const notificationRef = this.firestore.collection('notifications').doc();
    await notificationRef.set({
      ...notification,
      id: notificationRef.ref.id,  // Use ref.id instead of just id
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      read: false
    });
  }

  // Get user's notifications
  getUserNotifications() {
    console.info('getting notifications')
    return this.firestore
      .collection('notifications', ref => 
        ref.where('toUserId', '==', firebase.auth().currentUser.uid)
           .orderBy('createdAt', 'desc')
           .limit(50)
      )
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Notification;
          return { ...data };
        }))
      );
  }

  // Mark notification as read
  async markAsRead(notificationId: string) {
    await this.firestore
      .doc(`notifications/${notificationId}`)
      .update({ read: true });
  }

  // Mark all notifications as read
  async markAllAsRead() {
    const batch = this.firestore.firestore.batch();
    const notifications = await this.firestore
      .collection('notifications')
      .ref
      .where('toUserId', '==', firebase.auth().currentUser.uid)
      .where('read', '==', false)
      .get();

    notifications.docs.forEach(doc => {
      batch.update(doc.ref, { read: true });
    });

    await batch.commit();
  }

  // Delete a notification
  async deleteNotification(notificationId: string) {
    await this.firestore
      .doc(`notifications/${notificationId}`)
      .delete();
  }

  // Clear all notifications
  async clearAllNotifications() {
    const batch = this.firestore.firestore.batch();
    const notifications = await this.firestore
      .collection('notifications')
      .ref
      .where('toUserId', '==', firebase.auth().currentUser.uid)
      .get();

    notifications.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  }
}
