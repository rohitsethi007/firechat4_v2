// // test-data.service.ts
// import { Injectable } from '@angular/core';

// import { DataService } from './data.service';
// import { LoginService } from './login.service';
// import { LoadingService } from './loading.service';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import firebase from 'firebase/compat/app';

// @Injectable({
//   providedIn: 'root'
// })
// export class TestDataService {
//   private testUsers: any[] = [];
//   private testGroups: Map<string, string[]> = new Map(); // userId -> groupIds
//   private testPosts: Map<string, string[]> = new Map(); // userId -> postIds

//   constructor(
//     private afAuth: AngularFireAuth,
//     public firestore: AngularFirestore,
//     private dataService: DataService,
//     private loginService: LoginService,
//     private loadingService: LoadingService
//   ) {}

//   async loadTestData() {
//     try {
//       this.loadingService.showToast('Creating test data...');
      
//       // Create 10 test users
//       for (let i = 0; i < 10; i++) {
//         this.loadingService.showToast(`Creating test user ${i + 1}/10...`);
//         const user = await this.createTestUser(i);
        
//         // Join random groups for this user
//         this.loadingService.showToast(`Joining groups for user ${i + 1}...`);
//         await this.joinRandomGroups(user.uid);
        
//         // Create posts for this user
//         this.loadingService.showToast(`Creating posts for user ${i + 1}...`);
//         await this.createTestPosts(user.uid);
//       }
      
//       this.loadingService.hide();
//       this.loadingService.showToast('Test data created successfully!');
//     } catch (error) {
//       console.error('Error loading test data:', error);
//       this.loadingService.hide();
//       this.loadingService.showToast('Error creating test data');
//     }
//   }

//   async clearTestData() {
//     try {
//       this.loadingService.showToast('Clearing test data...');
      
//       // Delete posts for each user
//       for (const [userId, postIds] of this.testPosts) {
//         this.loadingService.showToast(`Deleting posts for user...`);
//         await this.deleteTestPosts(userId, postIds);
//       }
      
//       // Remove users from their groups
//       for (const [userId, groupIds] of this.testGroups) {
//         this.loadingService.showToast(`Removing user from groups...`);
//         await this.leaveTestGroups(userId, groupIds);
//       }
      
//       // Delete all test users
//       for (const user of this.testUsers) {
//         this.loadingService.showToast(`Deleting test user...`);
//         await this.deleteTestUser(user.uid);
//       }
      
//       this.loadingService.hide();
//       this.loadingService.showToast('Test data cleared successfully!');
//     } catch (error) {
//       console.error('Error clearing test data:', error);
//       this.loadingService.hide();
//       this.loadingService.showToast('Error clearing test data');
//     }
//   }

//   private async createTestUser(index: number) {
//     const timestamp = Date.now();
//     const testUser = {
//       email: `testuser${index}_${timestamp}@test.com`,
//       password: 'Test123!',
//       name: `Test User ${index}`,
//       username: `testuser${index}_${timestamp}`,
//       bio: `This is test user ${index}'s account`,
//       uid: '' // Will be set after registration
//     };

//     // Register user using your existing register function
//     const userCredential = await this.loginService.register(testUser.name, testUser.username, testUser.email, testUser.password) as { uid: string };
//     testUser.uid = userCredential.uid;
//     this.testUsers.push(testUser);
//     return testUser;
//   }

//   private async joinRandomGroups(userId: string) {
//     // Get all available groups
//     const allGroups = []
//     var user:any;
//     this.dataService.getUser(userId).snapshotChanges().subscribe((user: any) => {
//        user = user.payload.data();
//       });

//     this.dataService.getGroups().snapshotChanges().subscribe((groups: any) => {
//         groups.forEach(element => {
//             let group = element.payload.doc.data();
//             group.key = element.payload.doc.id;

//             allGroups.push(group);
//         });
//     });
    
//     // Randomly select 3 groups
//     const selectedGroups = this.shuffleArray(allGroups).slice(0, 3);
//     const groupIds: string[] = [];
    
//     // Join each group
//     for (const group of selectedGroups) {
//         user.groups.push(group.groupId)
//         // Update group data on the database.
//         this.dataService.getUser(userId).update({
//         groups: user.groups
//         }).then(() => {
//         // Add friend as members of the group.
//         group.members.push(userId);

//         // Update group data on the database.
//         this.dataService.getGroup(group.groupId).update({
//             members: group.members,
//             messages: group.messages
//         });
//         })
//     }
    
//     this.testGroups.set(userId, groupIds);
//   }

//   private async createTestPosts(userId: string) {
//     const postIds: string[] = [];
//     var userGroups: [];
//     var group: any;

//     this.dataService.getUser(userId).snapshotChanges().subscribe((user: any) => {
//         user = user.payload.data();
//         userGroups = user.groups;
//        });

//     // Create 10 posts of each type
//     for (let i = 0; i < 10; i++) {
//       // General post
//       var generalPost: any;
//       generalPost.date = new Date();
//       generalPost.title = 'Test Post';
//       generalPost.data.message = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure';
//       generalPost.postTags = [];
//       generalPost.groupId = this.shuffleArray(userGroups).slice(0, 1);
//       generalPost.type = 'general';
    
//       this.dataService.addPost(generalPost).then((success) => {
//         const postId = success.id;
 
//         this.dataService.getGroup(generalPost.groupId).snapshotChanges().subscribe((group) => {
//             group = group.payload.data();
//         });

//         // Update group data on the database.
//         if (group.posts === undefined) {
//           group.posts = [];
//         }
//         group.posts.push(postId);
//         this.dataService.getGroup(generalPost.groupId).update({
//           posts: group.posts
//         });


//         var userNotifications: string[];
//         userNotifications.push(postId);
//         this.dataService.getUser(userId).update({
//           userNotifications: userNotifications
//         });

//         // Update user activity.

//         var userPosts: string[];
//         userPosts.push(postId);
//         this.dataService.getUser(userId).update({
//           userPosts: userPosts
//         });

      
//     }

//     //   // Event post
//     //   const eventPost = {
//     //     content: `Test Event ${i + 1}`,
//     //     type: 'event',
//     //     eventDate: new Date(Date.now() + (i + 1) * 86400000), // Future dates
//     //     eventLocation: `Test Location ${i + 1}`,
//     //     eventDescription: `This is test event ${i + 1} by user ${userId}`
//     //   };
//     //   const eventPostRef = await this.firebaseService.createEventPost(eventPost);
//     //   postIds.push(eventPostRef.id);

//     //   // Poll post
//     //   const pollPost = {
//     //     content: `Test Poll Question ${i + 1}`,
//     //     type: 'poll',
//     //     options: [
//     //       `Option 1 for poll ${i + 1}`,
//     //       `Option 2 for poll ${i + 1}`,
//     //       `Option 3 for poll ${i + 1}`
//     //     ],
//     //     endDate: new Date(Date.now() + (i + 1) * 86400000)
//     //   };
//     //   const pollPostRef = await this.firebaseService.createPollPost(pollPost);
//     //   postIds.push(pollPostRef.id);
//     // }
    

//   }
// }

// //   private async deleteTestPosts(userId: string, postIds: string[]) {
// //     for (const postId of postIds) {
// //       await this.firestore.doc(`posts/${postId}`).delete();
// //     }
// //     this.testPosts.delete(userId);
// //   }

// //   private async leaveTestGroups(userId: string, groupIds: string[]) {
// //     for (const groupId of groupIds) {
// //       await this.firebaseService.leaveGroup(groupId);
// //     }
// //     this.testGroups.delete(userId);
// //   }

// //   private async deleteTestUser(userId: string) {
// //     // Delete user data
// //     await this.firestore.doc(`accounts/${userId}`).delete();
// //     // Delete auth user
// //     const user = await this.afAuth.currentUser;
// //     if (user && user.uid === userId) {
// //       await user.delete();
// //     }
// //   }

//   private shuffleArray(array: any[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
// }
