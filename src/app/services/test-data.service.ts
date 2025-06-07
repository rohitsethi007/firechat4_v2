import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingService } from './loading.service';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private loadingProvider: LoadingService
  ) { }

  async generateTestData(): Promise<void> {
    try {
      this.loadingProvider.show();
      
      // Step 1: Get all available groups
      const groupsSnapshot = await this.firestore.collection('groups').get().toPromise();
      if (!groupsSnapshot || groupsSnapshot.empty) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast('No groups found. Please create groups first.');
        return;
      }
      
      const groups = groupsSnapshot.docs.map(doc => {
        const data = doc.data() as Record<string, any>;
        return {
          id: doc.id,
          name: data.name || 'Unknown Group'
        };
      });
      
      console.log(`Found ${groups.length} groups`);
      
      // Step 2: Create 10 test users
      const users = await this.createTestUsers();
      console.log(`Created/found ${users.length} test users`);
      
      // Step 3: Join users to random groups
      await this.assignUsersToGroups(users, groups);
      
      // Step 4: Create posts for each user in their groups
      await this.createTestPosts(users, groups);
      
      this.loadingProvider.hide();
      this.loadingProvider.showToast('Test data generated successfully!');
      
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error generating test data:', error);
      this.loadingProvider.showToast('Error generating test data. Check console for details.');
    }
  }
  
  private async createTestUsers(): Promise<any[]> {
    const users = [];
    
    for (let i = 1; i <= 10; i++) {
      const email = `test${i}@test.com`;
      const password = 'test123';
      
      try {
        // Create user in Firebase Auth
        const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
        const userId = userCredential.user.uid;
        
        // Create user profile in Firestore
        const userData = {
          userId: userId,
          email: email,
          name: `Test User ${i}`,
          username: `testuser${i}`,
          img: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`,
          dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
          groups: [],
          userReactions: [],
          userNotifications: [],
          userBookmarks: [],
          publicVisibility: true,
          showOnline: true
        };
        
        await this.firestore.doc(`accounts/${userId}`).set(userData);
        
        users.push({
          id: userId,
          ...userData
        });
        
        console.log(`Created test user: ${email}`);
      } catch (error) {
        console.error(`Error creating test user ${email}:`, error);
        // If user already exists, try to get their data
        try {
          const existingUser = await this.auth.signInWithEmailAndPassword(email, password);
          const userId = existingUser.user.uid;
          const userDoc = await this.firestore.doc(`accounts/${userId}`).get().toPromise();
          
          if (userDoc.exists) {
            const userData = userDoc.data() as Record<string, any>;
            users.push({
              id: userId,
              ...userData
            });
            console.log(`Using existing test user: ${email}`);
          }
        } catch (signInError) {
          console.error(`Error signing in as existing user ${email}:`, signInError);
        }
      }
    }
    
    return users;
  }
  
  private async assignUsersToGroups(users: any[], groups: any[]): Promise<void> {
    for (const user of users) {
      // Select 5 random groups for each user
      const shuffledGroups = [...groups].sort(() => 0.5 - Math.random());
      const selectedGroups = shuffledGroups.slice(0, Math.min(5, groups.length));
      
      const groupIds = selectedGroups.map(group => group.id);
      
      // Update user's groups array
      await this.firestore.doc(`accounts/${user.id}`).update({
        groups: groupIds
      });
      
      // Update each group's members array
      for (const group of selectedGroups) {
        const groupRef = this.firestore.doc(`groups/${group.id}`);
        const groupDoc = await groupRef.get().toPromise();
        
        if (groupDoc.exists) {
          const groupData = groupDoc.data() as Record<string, any>;
          const members = groupData?.members as string[] || [];
          
          if (!members.includes(user.id)) {
            members.push(user.id);
            await groupRef.update({ members });
          }
        }
      }
      
      console.log(`Assigned user ${user.username} to ${groupIds.length} groups`);
    }
  }
  
  private async createTestPosts(users: any[], groups: any[]): Promise<void> {
    let postCount = 0;
    
    for (const user of users) {
      if (!user.groups || user.groups.length === 0) {
        console.log(`User ${user.username} has no groups, assigning default groups`);
        // If user has no groups, assign some default ones
        if (groups.length > 0) {
          const shuffledGroups = [...groups].sort(() => 0.5 - Math.random());
          const selectedGroups = shuffledGroups.slice(0, Math.min(3, groups.length));
          user.groups = selectedGroups.map(g => g.id);
          
          // Update user's groups in database
          await this.firestore.doc(`accounts/${user.id}`).update({
            groups: user.groups
          });
        }
      }
      
      // For each group the user is in, create different types of posts
      for (const groupId of user.groups) {
        // Find group in our groups array
        const group = groups.find(g => g.id === groupId);
        if (!group) {
          console.log(`Group ${groupId} not found, skipping`);
          continue;
        }
        
        const groupName = group.name;
        
        try {
          // Create a general post
          await this.createGeneralPost(user, groupId, groupName);
          postCount++;
          
          // Create a poll
          await this.createPollPost(user, groupId, groupName);
          postCount++;
          
          // Create an event
          await this.createEventPost(user, groupId, groupName);
          postCount++;
        } catch (error) {
          console.error(`Error creating posts for user ${user.username} in group ${groupName}:`, error);
        }
      }
    }
    
    console.log(`Created a total of ${postCount} posts`);
  }
  
  private async createGeneralPost(user: any, groupId: string, groupName: string): Promise<void> {
    const postData = {
      addedByUser: {
        addedByKey: user.id,
        addedByUsername: user.username,
        addedByImg: user.img
      },
      date: firebase.firestore.FieldValue.serverTimestamp(),
      title: `General post by ${user.username}`,
      data: {
        message: `This is a test general post created in the ${groupName} group. It contains some sample text content that would typically be found in a social media post.`
      },
      postTags: ['test', 'general', 'sample'],
      groupId: groupId,
      groupName: groupName,
      type: 'general',
      totalReactionCount: 0,
      totalReviewCount: 0,
      searchableText: `general post by ${user.username} test general sample`,
      searchKeywords: ['general', 'post', 'test', 'sample']
    };
    
    const result = await this.firestore.collection('posts').add(postData);
    console.log(`Created general post with ID ${result.id} for user ${user.username} in group ${groupName}`);
    
    // Update group's posts array
    const groupRef = this.firestore.doc(`groups/${groupId}`);
    const groupDoc = await groupRef.get().toPromise();
    
    if (groupDoc.exists) {
      const groupData = groupDoc.data() as Record<string, any>;
      const posts = groupData?.posts as string[] || [];
      
      posts.push(result.id);
      await groupRef.update({ posts });
    }
  }
  
  private async createPollPost(user: any, groupId: string, groupName: string): Promise<void> {
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(now.getDate() + 7); // Poll ends in 7 days
    
    const pollData = {
      addedByUser: {
        addedByKey: user.id,
        addedByUsername: user.username,
        addedByImg: user.img
      },
      date: firebase.firestore.FieldValue.serverTimestamp(),
      title: `Poll: What's your favorite feature?`,
      data: {
        pollOptions: [
          { name: 'Chat', members: [] },
          { name: 'Groups', members: [] },
          { name: 'Posts', members: [] },
          { name: 'Events', members: [] }
        ],
        dateEnding: firebase.firestore.Timestamp.fromDate(endDate)
      },
      postTags: ['poll', 'question', 'feedback'],
      groupId: groupId,
      groupName: groupName,
      type: 'poll',
      totalReactionCount: 0,
      totalReviewCount: 0,
      totalPollCount: 0,
      searchableText: `poll what's your favorite feature chat groups posts events`,
      searchKeywords: ['poll', 'favorite', 'feature', 'chat', 'groups', 'posts', 'events']
    };
    
    const result = await this.firestore.collection('posts').add(pollData);
    console.log(`Created poll post with ID ${result.id} for user ${user.username} in group ${groupName}`);
    
    // Update group's polls array
    const groupRef = this.firestore.doc(`groups/${groupId}`);
    const groupDoc = await groupRef.get().toPromise();
    
    if (groupDoc.exists) {
      const groupData = groupDoc.data() as Record<string, any>;
      const polls = groupData?.polls as string[] || [];
      const posts = groupData?.posts as string[] || [];
      
      polls.push(result.id);
      posts.push(result.id);
      await groupRef.update({ polls, posts });
    }
  }
  
  private async createEventPost(user: any, groupId: string, groupName: string): Promise<void> {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 14); // Event in 14 days
    
    const eventTime = new Date();
    eventTime.setHours(18, 0, 0, 0); // 6:00 PM
    
    const eventData = {
      addedByUser: {
        addedByKey: user.id,
        addedByUsername: user.username,
        addedByImg: user.img
      },
      date: firebase.firestore.FieldValue.serverTimestamp(),
      title: `${groupName} Meetup Event`,
      data: {
        eventDate: firebase.firestore.Timestamp.fromDate(eventDate),
        eventTime: firebase.firestore.Timestamp.fromDate(eventTime),
        location: 'Virtual Meeting',
        videoLink: 'https://meet.google.com/test-link',
        message: `Join us for a virtual meetup to discuss ${groupName} topics. Everyone is welcome!`
      },
      postTags: ['event', 'meetup', 'virtual'],
      groupId: groupId,
      groupName: groupName,
      type: 'event',
      totalReactionCount: 0,
      totalReviewCount: 0,
      totalCheckinCount: 0,
      searchableText: `${groupName} meetup event virtual meeting`,
      searchKeywords: ['event', 'meetup', 'virtual', groupName.toLowerCase()]
    };
    
    const result = await this.firestore.collection('posts').add(eventData);
    console.log(`Created event post with ID ${result.id} for user ${user.username} in group ${groupName}`);
    
    // Update group's posts array
    const groupRef = this.firestore.doc(`groups/${groupId}`);
    const groupDoc = await groupRef.get().toPromise();
    
    if (groupDoc.exists) {
      const groupData = groupDoc.data() as Record<string, any>;
      const posts = groupData?.posts as string[] || [];
      
      posts.push(result.id);
      await groupRef.update({ posts });
    }
  }
}