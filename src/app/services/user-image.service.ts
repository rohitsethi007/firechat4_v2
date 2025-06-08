import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserImageService {
  private imageCache = new Map<string, Observable<string>>();
  
  constructor(private firestore: AngularFirestore) {}
  
  getUserImage(userId: string): Observable<string> {
    if (!userId) {
      return of('assets/images/default-dp.png');
    }
    
    // Check cache first
    if (this.imageCache.has(userId)) {
      return this.imageCache.get(userId);
    }
    
    // Get from Firestore and cache
    const image$ = this.firestore.doc(`accounts/${userId}`).valueChanges()
      .pipe(
        map((user: any) => user?.img || 'assets/images/default-dp.png'),
        catchError(() => of('assets/images/default-dp.png')),
        shareReplay(1)
      );
    
    this.imageCache.set(userId, image$);
    return image$;
  }
  
  clearCache(userId?: string) {
    if (userId) {
      this.imageCache.delete(userId);
    } else {
      this.imageCache.clear();
    }
  }
}