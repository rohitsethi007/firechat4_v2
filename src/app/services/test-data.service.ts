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
    
    // Create admin account first
    try {
      const adminEmail = 'test2011@test.com';
      const password = 'test123';
      
      // Create admin user in Firebase Auth
      let adminUserId;
      try {
        const adminCredential = await this.auth.createUserWithEmailAndPassword(adminEmail, password);
        adminUserId = adminCredential.user.uid;
      } catch (error) {
        // If admin already exists, get the user ID
        const existingAdmin = await this.auth.signInWithEmailAndPassword(adminEmail, password);
        adminUserId = existingAdmin.user.uid;
      }
      
      // Create admin profile in Firestore
      const adminData = {
        userId: adminUserId,
        email: adminEmail,
        name: 'Admin',
        username: 'admin',
        img: 'https://randomuser.me/api/portraits/men/0.jpg',
        dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
        groups: [],
        userReactions: [],
        userNotifications: [],
        userBookmarks: [],
        publicVisibility: true,
        showOnline: true,
        isAdmin: true
      };
      
      await this.firestore.doc(`accounts/${adminUserId}`).set(adminData, { merge: true });
      
      users.push({
        id: adminUserId,
        ...adminData
      });
      
      console.log(`Created/updated admin user: ${adminEmail}`);
    } catch (adminError) {
      console.error('Error creating admin user:', adminError);
    }
    
    // Create regular test users
    for (let i = 1; i <= 10; i++) {
      const email = `test${i}@test.com`;
      const password = 'test123';
      
      try {
        // Create user in Firebase Auth
        const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
        const userId = userCredential.user.uid;
        
        // Real names for test users
        const names = [
          'Emma Johnson',
          'James Smith',
          'Olivia Williams',
          'Noah Brown',
          'Sophia Jones',
          'Liam Garcia',
          'Ava Miller',
          'William Davis',
          'Isabella Martinez',
          'Mason Wilson'
        ];
        
        // Create user profile in Firestore
        const userData = {
          userId: userId,
          email: email,
          name: names[i-1],
          username: `${names[i-1].toLowerCase().replace(' ', '')}`,
          img: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`,
          dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
          groups: [],
          userReactions: [],
          userNotifications: [],
          userBookmarks: [],
          publicVisibility: true,
          showOnline: true,
          isAdmin: false
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
    // Generate content relevant to the group
    const groupMessages = {
      default: `This is a discussion about ${groupName}. I'd like to share some thoughts on our recent activities and get your feedback.`,
      'Sports': `Just finished an amazing game with the ${groupName} team! The energy was incredible and everyone played their best. Looking forward to our next match!`,
      'Technology': `Check out this new tech trend related to ${groupName}! The innovation in this space is moving so quickly. What do you all think about these developments?`,
      'Education': `I found some great resources for our ${groupName} study group. These materials should help everyone prepare for the upcoming session.`,
      'Music': `Just discovered an amazing artist that would be perfect for our ${groupName} playlist! Their sound is exactly what we've been looking for.`,
      'Art': `I'm working on a new piece inspired by our ${groupName} discussions. The creative process has been so fulfilling and I can't wait to share the final result.`,
      'Food': `Tried a new recipe that would be perfect for our next ${groupName} meetup! It's delicious, easy to make, and fits our theme perfectly.`,
      'Travel': `Planning a trip related to our ${groupName} interests. Has anyone been to these locations before? Looking for recommendations!`,
      'Business': `Found some interesting insights about ${groupName} market trends. This could be valuable for our next strategy discussion.`,
      'Health': `Discovered a new approach to wellness that aligns with our ${groupName} philosophy. It's been working great for me!`
    };
    
    // Find the most relevant message based on group name
    let message = groupMessages.default;
    for (const [category, text] of Object.entries(groupMessages)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        message = text;
        break;
      }
    }
    
    // Create relevant title
    const titles = {
      default: `Discussion about ${groupName}`,
      'Sports': `Game day with ${groupName}!`,
      'Technology': `Latest ${groupName} innovations`,
      'Education': `Resources for ${groupName} study`,
      'Music': `New discoveries for ${groupName} playlist`,
      'Art': `Creative inspiration from ${groupName}`,
      'Food': `Recipe idea for ${groupName}`,
      'Travel': `Trip planning for ${groupName} enthusiasts`,
      'Business': `${groupName} market insights`,
      'Health': `Wellness approach for ${groupName}`
    };
    
    // Find the most relevant title
    let title = titles.default;
    for (const [category, text] of Object.entries(titles)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        title = text;
        break;
      }
    }
    
    // Generate relevant tags
    const tags = ['discussion'];
    if (groupName.toLowerCase().includes('tech')) tags.push('technology');
    if (groupName.toLowerCase().includes('sport')) tags.push('sports');
    if (groupName.toLowerCase().includes('music')) tags.push('music');
    if (groupName.toLowerCase().includes('art')) tags.push('creative');
    if (groupName.toLowerCase().includes('food')) tags.push('recipe');
    if (groupName.toLowerCase().includes('travel')) tags.push('adventure');
    if (groupName.toLowerCase().includes('business')) tags.push('professional');
    if (groupName.toLowerCase().includes('health')) tags.push('wellness');
    if (tags.length < 3) tags.push('community');
    
    const postData = {
      addedByUser: {
        addedByKey: user.id,
        addedByUsername: user.username
      },
      date: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      data: {
        message: message
      },
      postTags: tags,
      groupId: groupId,
      groupName: groupName,
      type: 'general',
      totalReactionCount: 0,
      totalReviewCount: 0,
      searchableText: `${title} ${message} ${tags.join(' ')}`,
      searchKeywords: [...tags, 'post', groupName.toLowerCase()]
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
    
    // Define poll questions and options based on group type
    const pollQuestions = {
      default: `What would you like to see more of in ${groupName}?`,
      'Sports': `What's your favorite ${groupName} activity?`,
      'Technology': `Which ${groupName} topic should we focus on next?`,
      'Education': `What learning format works best for ${groupName}?`,
      'Music': `What genre should we explore next in ${groupName}?`,
      'Art': `What medium should our next ${groupName} project use?`,
      'Food': `What cuisine should we try at the next ${groupName} meetup?`,
      'Travel': `What destination should ${groupName} plan for next?`,
      'Business': `What skill is most valuable for ${groupName} members?`,
      'Health': `What wellness practice has helped you most in ${groupName}?`
    };
    
    // Find the most relevant question
    let question = pollQuestions.default;
    for (const [category, text] of Object.entries(pollQuestions)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        question = text;
        break;
      }
    }
    
    // Define poll options based on group type
    const pollOptions = {
      default: [
        { name: 'Discussion topics', members: [] },
        { name: 'Group activities', members: [] },
        { name: 'Resource sharing', members: [] },
        { name: 'Community events', members: [] }
      ],
      'Sports': [
        { name: 'Team games', members: [] },
        { name: 'Individual sports', members: [] },
        { name: 'Watching events together', members: [] },
        { name: 'Training sessions', members: [] }
      ],
      'Technology': [
        { name: 'Coding projects', members: [] },
        { name: 'New frameworks', members: [] },
        { name: 'Hardware discussions', members: [] },
        { name: 'Industry trends', members: [] }
      ],
      'Education': [
        { name: 'Study groups', members: [] },
        { name: 'Online courses', members: [] },
        { name: 'Book discussions', members: [] },
        { name: 'Practical workshops', members: [] }
      ],
      'Music': [
        { name: 'Live performances', members: [] },
        { name: 'Music production', members: [] },
        { name: 'Playlist sharing', members: [] },
        { name: 'Instrument practice', members: [] }
      ],
      'Art': [
        { name: 'Painting', members: [] },
        { name: 'Digital art', members: [] },
        { name: 'Sculpture', members: [] },
        { name: 'Photography', members: [] }
      ],
      'Food': [
        { name: 'Cooking classes', members: [] },
        { name: 'Restaurant outings', members: [] },
        { name: 'Recipe exchanges', members: [] },
        { name: 'Food photography', members: [] }
      ],
      'Travel': [
        { name: 'Local trips', members: [] },
        { name: 'International travel', members: [] },
        { name: 'Virtual tours', members: [] },
        { name: 'Travel planning', members: [] }
      ],
      'Business': [
        { name: 'Networking events', members: [] },
        { name: 'Skill workshops', members: [] },
        { name: 'Market analysis', members: [] },
        { name: 'Mentorship programs', members: [] }
      ],
      'Health': [
        { name: 'Fitness activities', members: [] },
        { name: 'Nutrition discussions', members: [] },
        { name: 'Mental wellness', members: [] },
        { name: 'Outdoor activities', members: [] }
      ]
    };
    
    // Find the most relevant options
    let options = pollOptions.default;
    for (const [category, opts] of Object.entries(pollOptions)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        options = opts;
        break;
      }
    }
    
    // Generate relevant tags
    const tags = ['poll', 'question'];
    if (groupName.toLowerCase().includes('tech')) tags.push('technology');
    if (groupName.toLowerCase().includes('sport')) tags.push('sports');
    if (groupName.toLowerCase().includes('music')) tags.push('music');
    if (groupName.toLowerCase().includes('art')) tags.push('creative');
    if (groupName.toLowerCase().includes('food')) tags.push('cuisine');
    if (groupName.toLowerCase().includes('travel')) tags.push('destinations');
    if (groupName.toLowerCase().includes('business')) tags.push('professional');
    if (groupName.toLowerCase().includes('health')) tags.push('wellness');
    if (tags.length < 3) tags.push('feedback');
    
    const pollData = {
      addedByUser: {
        addedByKey: user.id,
        addedByUsername: user.username
      },
      date: firebase.firestore.FieldValue.serverTimestamp(),
      title: `Poll: ${question}`,
      data: {
        pollOptions: options,
        dateEnding: firebase.firestore.Timestamp.fromDate(endDate)
      },
      postTags: tags,
      groupId: groupId,
      groupName: groupName,
      type: 'poll',
      totalReactionCount: 0,
      totalReviewCount: 0,
      totalPollCount: 0,
      searchableText: `poll ${question} ${options.map(o => o.name).join(' ')} ${tags.join(' ')}`,
      searchKeywords: [...tags, 'poll', groupName.toLowerCase()]
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
    
    // Define event titles based on group type
    const eventTitles = {
      default: `${groupName} Monthly Meetup`,
      'Sports': `${groupName} Game Day`,
      'Technology': `${groupName} Tech Workshop`,
      'Education': `${groupName} Study Session`,
      'Music': `${groupName} Listening Party`,
      'Art': `${groupName} Creative Workshop`,
      'Food': `${groupName} Tasting Event`,
      'Travel': `${groupName} Trip Planning`,
      'Business': `${groupName} Networking Event`,
      'Health': `${groupName} Wellness Session`
    };
    
    // Find the most relevant title
    let title = eventTitles.default;
    for (const [category, text] of Object.entries(eventTitles)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        title = text;
        break;
      }
    }
    
    // Define event descriptions based on group type
    const eventDescriptions = {
      default: `Join us for our monthly ${groupName} meetup! We'll discuss recent developments and future plans. Everyone is welcome!`,
      'Sports': `Let's get together for a fun ${groupName} session! All skill levels welcome. Bring your equipment and enthusiasm!`,
      'Technology': `Join us for an interactive workshop on the latest ${groupName} technologies. We'll have demos and hands-on activities.`,
      'Education': `Time to boost our knowledge of ${groupName}! This study session will focus on key concepts and practical applications.`,
      'Music': `Experience new sounds with our ${groupName} listening party! We'll explore different artists and genres together.`,
      'Art': `Express yourself at our ${groupName} workshop! We'll be exploring different techniques and sharing our creative processes.`,
      'Food': `Taste and share at our ${groupName} event! Bring a dish or just your appetite - all food enthusiasts welcome.`,
      'Travel': `Let's plan our next ${groupName} adventure! We'll discuss destinations, logistics, and travel tips.`,
      'Business': `Expand your professional network at our ${groupName} event. Great opportunity to connect with like-minded professionals.`,
      'Health': `Focus on wellbeing at our ${groupName} session. We'll practice techniques for physical and mental wellness.`
    };
    
    // Find the most relevant description
    let description = eventDescriptions.default;
    for (const [category, text] of Object.entries(eventDescriptions)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        description = text;
        break;
      }
    }
    
    // Define locations based on group type
    const locations = {
      default: 'Virtual Meeting',
      'Sports': 'Local Sports Center',
      'Technology': 'Tech Hub Coworking Space',
      'Education': 'Community Library',
      'Music': 'Sound Studio',
      'Art': 'Creative Space Gallery',
      'Food': 'Community Kitchen',
      'Travel': 'Travel Agency Meeting Room',
      'Business': 'Business Center',
      'Health': 'Wellness Center'
    };
    
    // Find the most relevant location
    let location = locations.default;
    for (const [category, place] of Object.entries(locations)) {
      if (groupName.toLowerCase().includes(category.toLowerCase())) {
        location = place;
        break;
      }
    }
    
    // Generate relevant tags
    const tags = ['event', 'meetup'];
    if (groupName.toLowerCase().includes('tech')) tags.push('technology');
    if (groupName.toLowerCase().includes('sport')) tags.push('sports');
    if (groupName.toLowerCase().includes('music')) tags.push('concert');
    if (groupName.toLowerCase().includes('art')) tags.push('creative');
    if (groupName.toLowerCase().includes('food')) tags.push('cuisine');
    if (groupName.toLowerCase().includes('travel')) tags.push('adventure');
    if (groupName.toLowerCase().includes('business')) tags.push('networking');
    if (groupName.toLowerCase().includes('health')) tags.push('wellness');
    if (location.toLowerCase().includes('virtual')) tags.push('virtual');
    else tags.push('in-person');
    
    const eventData = {
      addedByUser: {
        addedByKey: user.id,
        addedByUsername: user.username
      },
      date: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      data: {
        eventDate: firebase.firestore.Timestamp.fromDate(eventDate),
        eventTime: firebase.firestore.Timestamp.fromDate(eventTime),
        location: location,
        videoLink: location === 'Virtual Meeting' ? 'https://meet.google.com/test-link' : null,
        message: description
      },
      postTags: tags,
      groupId: groupId,
      groupName: groupName,
      type: 'event',
      totalReactionCount: 0,
      totalReviewCount: 0,
      totalCheckinCount: 0,
      searchableText: `${title} ${description} ${location} ${tags.join(' ')}`,
      searchKeywords: [...tags, 'event', groupName.toLowerCase()]
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