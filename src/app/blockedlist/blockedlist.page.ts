import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-blockedlist',
  templateUrl: './blockedlist.page.html',
  styleUrls: ['./blockedlist.page.scss'],
})
export class BlockedlistPage implements OnInit {

  blockedList: any = [];

  constructor(
    private afAuth: AngularFireAuth,
    private dataProvider: DataService,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadBlockedUsers();
  }
  
  loadBlockedUsers() {
    this.blockedList = [];
    
    this.afAuth.currentUser.then(user => {
      if (user) {
        const userId = user.uid;
        
        // Get all conversations for the current user
        this.firestore.collection(`accounts/${userId}/conversations`).get().subscribe(snapshot => {
          snapshot.forEach(doc => {
            // Check if the conversation is blocked
            const data = doc.data() as { blocked?: boolean };
            if (data.blocked) {
              const blockedUserId = doc.id;
              
              // Get the blocked user's data
              this.firestore.doc(`accounts/${blockedUserId}`).get().subscribe(userDoc => {
                if (userDoc.exists) {
                  const userData = userDoc.data() as any;
                  this.blockedList.push({
                    key: blockedUserId,
                    name: userData.name || 'Unknown User',
                    img: userData.img || '',
                    description: userData.description || ''
                  });
                }
              });
            }
          });
        });
      }
    });
  }

  async unblock(uid) {
    console.log(uid);
    let fuid = await this.afAuth.currentUser.then((data) => { return data.uid });
    this.firestore.doc('accounts/' + fuid + '/conversations/' + uid).update({
      blocked: false
    }).then(() => {
      // Remove the unblocked user from the list
      this.blockedList = this.blockedList.filter(user => user.key !== uid);
    });
  }
  
  viewUser(userId: string) {
    this.router.navigate(['/profile', userId]);
  }

}
