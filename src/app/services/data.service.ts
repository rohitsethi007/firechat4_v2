import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ImageService } from './image.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  private addedByUser: any;
  public loggedInUserId: 'nouser';

  constructor(
    private afAuth: AngularFireAuth,
    private storage: Storage,
    private firestore: AngularFirestore,
    public imageProvider: ImageService
  ) { 
    this.initStorage();
  }


  // Get all users
  getUsers() {
    return this.firestore.collection('accounts');
  }

  // Get logged in user data
  async getCurrentUser() {
    const loggedInUserId = await this.afAuth.currentUser.then((data) => { return data.uid});
    console.info('loggedInUserId', loggedInUserId)
    return this.getUser(loggedInUserId);
  }

  async getCurrentUserId() {
    const loggedInUserId = await this.afAuth.currentUser.then((data) => { return data.uid});
   return loggedInUserId;
  }

  // Get user by their userId
  getUser(userId) {
    return this.firestore.doc('accounts/' + userId);
  }

  // Get requests given the userId.
  getRequests(userId) {
    return this.firestore.doc('requests/' + userId);
    // return this.afdb.object('/requests/' + userId);
  }

  // Get conversation given the conversationId.
  getConversation(conversationId) {
    return this.firestore.doc('conversations/' + conversationId);
    // return this.afdb.object('/conversations/' + conversationId);
  }

  // Get conversations of the current logged in user.
  getConversations(userId) {
    return this.firestore.doc('accounts/' + userId).collection('conversations');
    // return this.afdb.list('/accounts/' + this.afAuth.currentUser.uid + '/conversations');
  }

  // Get messages of the conversation given the Id.
  getConversationMessages(conversationId) {
    return this.firestore.doc('conversations/' + conversationId);
    // return this.afdb.object('/conversations/' + conversationId + '/messages');
  }

  // Get messages of the group given the Id.
  getGroupMessages(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('messages');
    // return this.afdb.object('/groups/' + groupId + '/messages');
  }

  getGroup(groupId) {
    return this.firestore.doc('groups/' + groupId);
  }

  async getBlockedLists() {
    const loggedInUserId = await this.afAuth.currentUser.then((data) => { return data.uid});
    return this.firestore.doc('accounts/' + loggedInUserId).collection('conversations').ref.where('blocked','==', true);
  }

  // Get Polls of the logged in user.
  getPollDetails(pId) {
    return this.firestore.doc('posts/' + pId);
  }

  // Get Resource details of the logged in user.
  getResourceDetails(rId) {
    return this.firestore.doc('posts/' + rId);
  }

  // Get Post details of the logged in user.
  getPostDetails(pId) {
    return this.firestore.doc('posts/' + pId);
  }

  // Get Polls of the logged in user.
  getGroupMembers(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('members');
    // return this.afdb.object('/groups/' + groupId + '/members/');
  }

  updatePollMembers(pollKey, pollData) {
    return this.firestore.doc('posts/' + pollKey).update ({
      data: pollData
    }).then(() => {
      const increment = firebase.firestore.FieldValue.increment(1);
      return this.firestore.collection('posts').doc(pollKey).update({
        totalPollCount : increment
      });
    });
  }

  // Get all groups.
  getGroups() {
    return this.firestore.collection('groups');
  }

  addReports(userId, post) {
    const report = {
      reportedBy: userId,
      postId: post.key
    }
    return this.firestore.collection('reports').add(report);
  }

  addPost(post): Promise<any> {
    // add searchable data
    // Extract text from different fields
    let searchKeywords: string;
    const searchableText = [
      post.title || '',
      (post.data && post.data.message) || ''
    ].join(' ').toLowerCase();

    // Generate keywords including phrases
    const keywords = this.generateSearchKeywords(searchableText);

    let finalSearchableText;
    if (post.type !== 'general') {
      finalSearchableText = post.title.toLowerCase();
    } else {
      finalSearchableText = (post.title + ' ' + post.data.message).toLowerCase();
    }
    post.searchableText = finalSearchableText;
    post.searchKeywords = Array.from(new Set(keywords)); // Remove duplicates;


    return new Promise((resolve, reject) => {
      this.firestore.collection('posts').add(post)
        .then(success => {
          let postId = success.id;
          // If there are images to upload
          if (post.postMediaImgs && post.postMediaImgs.length > 0) {
            this.imageProvider.uploadPostPhotos(postId, post.postMediaImgs)
              .then((postMediaUrls) => {
                post.postMediaImgs = [];
                if (postMediaUrls) {
                  post.postMediaImgs = postMediaUrls;
                  return this.firestore.doc('posts/' + postId).update({
                    postMediaImgs: postMediaUrls
                  });
                } else {
                  return null;
                }
              })
              .then(() => {
                resolve(success);
              })
              .catch(error => {
                reject(error);
              });
          } else {
            // Important: Resolve immediately if no images to upload
            resolve(success);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  private generateSearchKeywords(text: string): string[] {
    // Common English stop words that should be ignored in search
    let stopWords = new Set([
      'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for',
      'from', 'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on',
      'that', 'the', 'to', 'was', 'were', 'will', 'with', 'the',
      'this', 'but', 'they', 'have', 'had', 'what', 'when', 'where',
      'who', 'which', 'why', 'how', 'all', 'any', 'both', 'each',
      'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
      'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very'
    ]);
    // Remove special characters and extra spaces
    const cleanText = text
      .replace(/[^\w\s]/gi, '') // Remove special characters
      .toLowerCase()
      .trim();
    
    // Split into words
    const words = cleanText.split(/\s+/)
      .filter(word => {
        return word.length > 0 && 
               !stopWords.has(word) && // Remove stop words
               !/^\d+$/.test(word);         // Remove pure numbers
      });
    
    const keywords = new Set<string>();
    
    words.forEach(word => {
      // Only process words with minimum length of 3
      if (word.length >= 3) {
        // Add full word
        keywords.add(word);
        
        // Add important word combinations (phrases)
        for (let i = 0; i < words.length - 1; i++) {
          if (words[i] === word) {
            const phrase = words[i] + ' ' + words[i + 1];
            keywords.add(phrase);
          }
        }

        // Add partial words for prefix search (min 3 chars)
        for (let i = 3; i <= word.length; i++) {
          keywords.add(word.substring(0, i));
        }
      }
    });

    return Array.from(keywords);
  }

  updateResourceReviews(resourceKey, review) {
   this.firestore.doc('resources/' + resourceKey).collection('reviews').add(review);
  }

  addFirstResourceReview(resourceKey, review) {
    let r = [];

    this.firestore.doc('resources/' + resourceKey).update({
      reviews: r
    });
    this.updateResourceReviews(resourceKey, review);
  }

  updatePostReviews(postKey, review) {
    return this.firestore.collection('posts').doc(postKey).collection('reviews').add(review).then(() => {
      const increment = firebase.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReviewCount : increment
      });
    });
   }

  updateEventReviews(eventKey, review) {
    this.firestore.doc('events/' + eventKey).collection('reviews').add(review);
  }
 
  addPostReactions(postKey, reaction) {
    return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
      const increment = firebase.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount : increment
      });
    });
  }

  updatePostReactions(postKey, reaction) {
    console.info('reaction', reaction)
    console.info('postkey', postKey)
    return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
      console.info('reaction added')
      const increment = firebase.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount : increment
      });
    });
  }

  removePostReaction(postKey, reactionKey) {
    this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey).delete().then(() => {
      const decrement = firebase.firestore.FieldValue.increment(-1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount : decrement
      });
    });
  }

  updateResourceReactions(resourceKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/resources/' + resourceKey).collection('/reactions/').add(reaction);
    // var newRef = this.afdb.list('/resources/' + resourceKey + '/reactions/').push(reaction);
    // return newRef.key;
  }

  updateEventReactions(eventKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction);
    // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
    // return newRef.key;
  }

  updatePollReviews(pollId, review) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review);
//    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
   }
 
   async getFromStorageAsync(section) {
     console.log('inside getFromStorageAsync');
     return await this.storage.get(section).then((val) => val);
   }

   private async initStorage() {
    await this.storage.create();
  }
}
