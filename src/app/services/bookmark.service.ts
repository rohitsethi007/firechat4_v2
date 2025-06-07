import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';



@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
    public userBookmarks = new BehaviorSubject<string[]>([]);
    userBookmarks$ = this.userBookmarks.asObservable();
    
  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    // Initialize bookmarks from current user
    this.auth.authState.subscribe(user => {
      if (user) {
        this.afs.doc(`accounts/${user.uid}`).valueChanges()
          .subscribe((userData: any) => {
            if (userData && userData.userBookmarks) {
              this.userBookmarks.next(userData.userBookmarks);
            }
          });
      }
    });
  }

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
          userBookmarks: firebase.firestore.FieldValue.arrayRemove(post.key)
        });
        // Update local state
        const updatedBookmarks = currentBookmarks.filter(id => id !== post.key);
        this.userBookmarks.next(updatedBookmarks);
        return false;
      } else {
        await userRef.update({
          userBookmarks: firebase.firestore.FieldValue.arrayUnion(post.key)
        });
        // Update local state
        const updatedBookmarks = [...(currentBookmarks || []), post.key];
        this.userBookmarks.next(updatedBookmarks);
        return true;
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      return currentBookmarks?.includes(post.key) || false;
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
  
// In src/app/services/bookmark.service.ts
getBookmarkedPosts(): Observable<any[]> {
  return this.userBookmarks$.pipe(
    switchMap(bookmarkIds => {
      if (!bookmarkIds || bookmarkIds.length === 0) {
        return of([]);
      }
      
      return this.afs.collection('posts', ref => 
        ref.where(firebase.firestore.FieldPath.documentId(), 'in', 
          bookmarkIds.length > 10 ? bookmarkIds.slice(0, 10) : bookmarkIds)
      ).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as object;
          const id = a.payload.doc.id;
          return { id, ...(data as object), key: a.payload.doc.id };
        }))
      );
    })
  );
}

}