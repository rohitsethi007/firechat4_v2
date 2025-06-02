import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class DataCleanupService {

  constructor(
    private firestore: AngularFirestore,
    private loadingProvider: LoadingService
  ) { }

  async clearAllDataExceptGroups(): Promise<void> {
    try {
      this.loadingProvider.show();
      
      // Main collections to delete
      const collectionsToDelete = [
        'conversations',
        'posts',
        'reports',
        'userSearches',
        'trendingSearches',
        'notifications',
        'friendRequests',
        'events',
        'polls',
        'reactions',
        'reviews',
        'resources',
        'requests',
        'subcollections',
        'users',
        'messages',
        'comments'
      ];
      
      // Delete all accounts
      await this.cleanAccountsExceptAdmin();
      
      // Clean userSearches collection specifically
      await this.cleanUserSearches();
      
      console.log('Starting data cleanup...');
      
      // Delete all documents from each collection
      for (const collectionName of collectionsToDelete) {
        console.log(`Deleting collection: ${collectionName}`);
        const snapshot = await this.firestore.collection(collectionName).get().toPromise();
        
        if (!snapshot || snapshot.empty) {
          console.log(`No documents in ${collectionName}`);
          continue;
        }
        
        // Delete documents in batches
        const batchSize = 400;
        let batch = this.firestore.firestore.batch();
        let count = 0;
        
        for (const doc of snapshot.docs) {
          batch.delete(doc.ref);
          count++;
          
          // Commit when batch size is reached
          if (count >= batchSize) {
            await batch.commit();
            console.log(`Deleted ${count} documents from ${collectionName}`);
            batch = this.firestore.firestore.batch();
            count = 0;
          }
        }
        
        // Commit any remaining deletes
        if (count > 0) {
          await batch.commit();
          console.log(`Deleted ${count} documents from ${collectionName}`);
        }
      }
      
      // Clean up subcollections in posts
      await this.cleanSubcollections();
      
      // Clean up group attributes but keep the groups
      await this.cleanGroupAttributes();
      
      this.loadingProvider.hide();
      this.loadingProvider.showToast('Data cleanup completed successfully! Categories and groups have been preserved.');
      return Promise.resolve();
      
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error clearing data:', error);
      this.loadingProvider.showToast('Error clearing data. Check console for details.');
      return Promise.reject(error);
    }
  }
  
  // Clean specific attributes from groups but keep the groups themselves
  private async cleanGroupAttributes(): Promise<void> {
    console.log('Cleaning group attributes...');
    
    try {
      // Get all groups
      const snapshot = await this.firestore.collection('groups').get().toPromise();
      
      if (!snapshot || snapshot.empty) {
        console.log('No groups to clean');
        return;
      }
      
      // Update groups in batches
      const batchSize = 400;
      let batch = this.firestore.firestore.batch();
      let count = 0;
      
      for (const doc of snapshot.docs) {
        // Update the group document to clear specific attributes
        batch.update(doc.ref, {
          members: [],
          messages: [],
          polls: [],
          posts: []
        });
        
        count++;
        
        // Commit when batch size is reached
        if (count >= batchSize) {
          await batch.commit();
          console.log(`Updated ${count} groups`);
          batch = this.firestore.firestore.batch();
          count = 0;
        }
      }
      
      // Commit any remaining updates
      if (count > 0) {
        await batch.commit();
        console.log(`Updated ${count} groups`);
      }
      
      console.log('Group attributes cleanup completed');
      
    } catch (error) {
      console.error('Error cleaning group attributes:', error);
      throw error;
    }
  }
  
  // Clean up subcollections like comments in posts
  private async cleanSubcollections(): Promise<void> {
    try {
      console.log('Cleaning up subcollections...');
      
      // Get all posts
      const postsSnapshot = await this.firestore.collection('posts').get().toPromise();
      if (!postsSnapshot || postsSnapshot.empty) {
        console.log('No posts to clean subcollections from');
        return;
      }
      
      // For each post, delete its comments and reactions
      for (const postDoc of postsSnapshot.docs) {
        // Delete comments
        const commentsSnapshot = await this.firestore.collection(`posts/${postDoc.id}/comments`).get().toPromise();
        if (commentsSnapshot && !commentsSnapshot.empty) {
          const batch = this.firestore.firestore.batch();
          commentsSnapshot.docs.forEach(doc => {
            batch.delete(doc.ref);
          });
          await batch.commit();
          console.log(`Deleted comments for post ${postDoc.id}`);
        }
        
        // Delete reactions
        const reactionsSnapshot = await this.firestore.collection(`posts/${postDoc.id}/reactions`).get().toPromise();
        if (reactionsSnapshot && !reactionsSnapshot.empty) {
          const batch = this.firestore.firestore.batch();
          reactionsSnapshot.docs.forEach(doc => {
            batch.delete(doc.ref);
          });
          await batch.commit();
          console.log(`Deleted reactions for post ${postDoc.id}`);
        }
      }
      
      console.log('Subcollections cleanup completed');
    } catch (error) {
      console.error('Error cleaning subcollections:', error);
      throw error;
    }
  }
  
  // Delete all accounts without exceptions
  private async cleanAccountsExceptAdmin(): Promise<void> {
    console.log('Deleting all accounts...');
    
    try {
      // Get all accounts
      const snapshot = await this.firestore.collection('accounts').get().toPromise();
      
      if (!snapshot || snapshot.empty) {
        console.log('No accounts to delete');
        return;
      }
      
      // Delete accounts in batches
      const batchSize = 400;
      let batch = this.firestore.firestore.batch();
      let count = 0;
      
      for (const doc of snapshot.docs) {
        // Delete subcollections first
        await this.deleteAccountSubcollections(doc.id);
        
        // Then delete the account document
        batch.delete(doc.ref);
        count++;
        
        // Commit when batch size is reached
        if (count >= batchSize) {
          await batch.commit();
          console.log(`Deleted ${count} accounts`);
          batch = this.firestore.firestore.batch();
          count = 0;
        }
      }
      
      // Commit any remaining deletes
      if (count > 0) {
        await batch.commit();
        console.log(`Deleted ${count} accounts`);
      }
      
      console.log('Accounts cleanup completed');
      
    } catch (error) {
      console.error('Error cleaning accounts:', error);
      throw error;
    }
  }
  
  // Delete subcollections for an account
  private async deleteAccountSubcollections(accountId: string): Promise<void> {
    try {
      // Delete conversations subcollection
      const conversationsSnapshot = await this.firestore.collection(`accounts/${accountId}/conversations`).get().toPromise();
      if (conversationsSnapshot && !conversationsSnapshot.empty) {
        const batch = this.firestore.firestore.batch();
        conversationsSnapshot.docs.forEach(doc => {
          batch.delete(doc.ref);
        });
        await batch.commit();
        console.log(`Deleted conversations for account ${accountId}`);
      }
      
      // Delete any other subcollections as needed
      
    } catch (error) {
      console.error(`Error deleting subcollections for account ${accountId}:`, error);
    }
  }
  
  // Special method to clean userSearches collection and its subcollections
  private async cleanUserSearches(): Promise<void> {
    console.log('Cleaning userSearches collection...');
    
    try {
      // Get all user IDs in userSearches collection
      const userSearchesSnapshot = await this.firestore.collection('userSearches').get().toPromise();
      
      if (!userSearchesSnapshot || userSearchesSnapshot.empty) {
        console.log('No userSearches to clean');
        return;
      }
      
      // For each user document in userSearches
      for (const userDoc of userSearchesSnapshot.docs) {
        // Delete the searches subcollection first
        const searchesSnapshot = await this.firestore.collection(`userSearches/${userDoc.id}/searches`).get().toPromise();
        
        if (searchesSnapshot && !searchesSnapshot.empty) {
          const batch = this.firestore.firestore.batch();
          searchesSnapshot.docs.forEach(doc => {
            batch.delete(doc.ref);
          });
          await batch.commit();
          console.log(`Deleted searches for user ${userDoc.id}`);
        }
        
        // Then delete the user document
        await this.firestore.doc(`userSearches/${userDoc.id}`).delete();
        console.log(`Deleted userSearch document for user ${userDoc.id}`);
      }
      
      console.log('userSearches cleanup completed');
    } catch (error) {
      console.error('Error cleaning userSearches:', error);
      throw error;
    }
  }
}