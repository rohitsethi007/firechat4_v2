import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
    private userBookmarks = new BehaviorSubject<string[]>([]);
    userBookmarks$ = this.userBookmarks.asObservable();
    
  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  // Get user's bookmarks
  getUserBookmarks(userId: string) {
    return this.afs
      .collection('accounts')
      .doc(userId)
      .collection('bookmarks', ref => 
        ref.orderBy('createdAt', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  async toggleBookmark(post: any, userId: string, currentBookmarks: string[]) {
    try {
      const userRef = this.afs.collection('accounts').doc(userId);
      const isCurrentlyBookmarked = currentBookmarks?.includes(post.key);

      if (isCurrentlyBookmarked) {
        await userRef.update({
          bookmarks: firebase.firestore.FieldValue.arrayRemove(post.key)
        });
        // Update local state
        this.userBookmarks.next(currentBookmarks.filter(id => id !== post.key));
      } else {
        await userRef.update({
          bookmarks: firebase.firestore.FieldValue.arrayUnion(post.key)
        });
        // Update local state
        this.userBookmarks.next([...currentBookmarks, post.key]);
      }

      return !isCurrentlyBookmarked;
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      return false;
    }
  }
  isBookmarked(postId: string, bookmarks?: string[]): boolean {
    return bookmarks?.includes(postId) || false;
  }

  // Get bookmark count for a post
  getBookmarkCount(postId: string) {
    return this.afs
      .collection('posts')
      .doc(postId)
      .valueChanges()
      .pipe(
        map((post: any) => post?.bookmarkCount || 0)
      );
  }
}
