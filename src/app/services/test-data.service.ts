// test-data.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './firebase.service';
import { DataService } from './data.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  private testUsers: any[] = [];
  private testGroups: Map<string, string[]> = new Map(); // userId -> groupIds
  private testPosts: Map<string, string[]> = new Map(); // userId -> postIds

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private firebaseService: FirebaseService,
    private dataService: DataService,
    private loadingService: LoadingService
  ) {}

  async loadTestData() {
    try {
      this.loadingService.show('Creating test data...');
      
      // Create 10 test users
      for (let i = 0; i < 10; i++) {
        this.loadingService.show(`Creating test user ${i + 1}/10...`);
        const user = await this.createTestUser(i);
        
        // Sign in as this user
        await this.firebaseService.login(user.email, user.password);
        
        // Join random groups for this user
        this.loadingService.show(`Joining groups for user ${i + 1}...`);
        await this.joinRandomGroups(user.uid);
        
        // Create posts for this user
        this.loadingService.show(`Creating posts for user ${i + 1}...`);
        await this.createTestPosts(user.uid);
      }
      
      this.loadingService.hide();
      this.loadingService.showToast('Test data created successfully!');
    } catch (error) {
      console.error('Error loading test data:', error);
      this.loadingService.hide();
      this.loadingService.showToast('Error creating test data');
    }
  }

  async clearTestData() {
    try {
      this.loadingService.show('Clearing test data...');
      
      // Delete posts for each user
      for (const [userId, postIds] of this.testPosts) {
        this.loadingService.show(`Deleting posts for user...`);
        await this.deleteTestPosts(userId, postIds);
      }
      
      // Remove users from their groups
      for (const [userId, groupIds] of this.testGroups) {
        this.loadingService.show(`Removing user from groups...`);
        await this.leaveTestGroups(userId, groupIds);
      }
      
      // Delete all test users
      for (const user of this.testUsers) {
        this.loadingService.show(`Deleting test user...`);
        await this.deleteTestUser(user.uid);
      }
      
      this.loadingService.hide();
      this.loadingService.showToast('Test data cleared successfully!');
    } catch (error) {
      console.error('Error clearing test data:', error);
      this.loadingService.hide();
      this.loadingService.showToast('Error clearing test data');
    }
  }

  private async createTestUser(index: number) {
    const timestamp = Date.now();
    const testUser = {
      email: `testuser${index}_${timestamp}@test.com`,
      password: 'Test123!',
      name: `Test User ${index}`,
      username: `testuser${index}_${timestamp}`,
      bio: `This is test user ${index}'s account`,
      uid: '' // Will be set after registration
    };

    // Register user using your existing register function
    const userCredential = await this.firebaseService.register(testUser);
    testUser.uid = userCredential.user.uid;
    this.testUsers.push(testUser);
    return testUser;
  }

  private async joinRandomGroups(userId: string) {
    // Get all available groups
    const groupsSnapshot = await this.firestore.collection('groups').get().toPromise();
    const allGroups = groupsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // Randomly select 3 groups
    const selectedGroups = this.shuffleArray(allGroups).slice(0, 3);
    const groupIds: string[] = [];
    
    // Join each group
    for (const group of selectedGroups) {
      await this.firebaseService.joinGroup(group.id);
      groupIds.push(group.id);
    }
    
    this.testGroups.set(userId, groupIds);
  }

  private async createTestPosts(userId: string) {
    const postIds: string[] = [];
    
    // Create 10 posts of each type
    for (let i = 0; i < 10; i++) {
      // General post
      const generalPost = {
        content: `Test general post ${i + 1} by user ${userId}`,
        type: 'text',
        timestamp: Date.now() + i
      };
      const generalPostRef = await this.firebaseService.createPost(generalPost);
      postIds.push(generalPostRef.id);

      // Event post
      const eventPost = {
        content: `Test Event ${i + 1}`,
        type: 'event',
        eventDate: new Date(Date.now() + (i + 1) * 86400000), // Future dates
        eventLocation: `Test Location ${i + 1}`,
        eventDescription: `This is test event ${i + 1} by user ${userId}`
      };
      const eventPostRef = await this.firebaseService.createEventPost(eventPost);
      postIds.push(eventPostRef.id);

      // Poll post
      const pollPost = {
        content: `Test Poll Question ${i + 1}`,
        type: 'poll',
        options: [
          `Option 1 for poll ${i + 1}`,
          `Option 2 for poll ${i + 1}`,
          `Option 3 for poll ${i + 1}`
        ],
        endDate: new Date(Date.now() + (i + 1) * 86400000)
      };
      const pollPostRef = await this.firebaseService.createPollPost(pollPost);
      postIds.push(pollPostRef.id);
    }
    
    this.testPosts.set(userId, postIds);
  }

  private async deleteTestPosts(userId: string, postIds: string[]) {
    for (const postId of postIds) {
      await this.firestore.doc(`posts/${postId}`).delete();
    }
    this.testPosts.delete(userId);
  }

  private async leaveTestGroups(userId: string, groupIds: string[]) {
    for (const groupId of groupIds) {
      await this.firebaseService.leaveGroup(groupId);
    }
    this.testGroups.delete(userId);
  }

  private async deleteTestUser(userId: string) {
    // Delete user data
    await this.firestore.doc(`accounts/${userId}`).delete();
    // Delete auth user
    const user = await this.afAuth.currentUser;
    if (user && user.uid === userId) {
      await user.delete();
    }
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
