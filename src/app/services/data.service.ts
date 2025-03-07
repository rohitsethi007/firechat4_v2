import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
// import * as firebase from 'firebase';
import * as firebase from 'firebase/app';
import { ImageService } from './image.service';

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
  ) { }


  // Get all users
  getUsers() {
    return this.firestore.collection('accounts');
  }

  // Get user with username
  getUserWithUsername(username) {
    return this.firestore.collection('accounts').ref.where('username', '==', username);
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

  // Get friend requests given the userId.
  getFriendRequests(userId) {
    return this.firestore.doc('requests/' + userId);

    // return this.afdb.list('/requests', ref => ref.orderByChild('receiver').equalTo(userId));
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

  // Get Polls of the logged in user.
  getGroupPolls(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('polls');
  }

  // Get Resources of the logged in user.
  getGroupResources(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('resources');
    // return this.afdb.object('/groups/' + groupId + '/resources/');
  }

  // Get Events of the logged in user.
  getGroupEvents(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('events');
    // return this.afdb.object('/groups/' + groupId + '/events/');
  }

  // Get Resource details of the logged in user.
  getResourceDetails(rId) {
    return this.firestore.doc('posts/' + rId);
  }

  // Get Post details of the logged in user.
  getPostDetails(pId) {
    return this.firestore.doc('posts/' + pId);
  }
  
  // Get Events details of the logged in user.
  getEventDetails(eId) {
    return this.firestore.doc('posts/' + eId);
  }
  // Get Polls of the logged in user.
  getGroupMembers(groupId) {
    return this.firestore.doc('groups/' + groupId).collection('members');
    // return this.afdb.object('/groups/' + groupId + '/members/');
  }

  updatePollMembers(pollKey, pollData) {
    this.firestore.doc('posts/' + pollKey).update ({
      data: pollData
    }).then(() => {
      const increment = firebase.default.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(pollKey).update({
        totalPollCount : increment
      });
    });
  }

  updatePollComments(pollKey, comments) {
    this.firestore.doc('polls/' + pollKey).update ({
      comments
    });
  }

  addPoll(poll) {
    return this.firestore.collection('polls').add(poll);
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

  addResource(resource) {
    return this.firestore.collection('resources').add(resource);
  }

  addPost(post): Promise<any> {
    // add searchable data
    // Extract text from different fields
    let searchKeywords: string;
    const searchableText = [
      post.title || '',
      post.data?.message || ''
    ].join(' ').toLowerCase();

    // Generate keywords including phrases
    const keywords = this.generateSearchKeywords(searchableText);

    if (post.type !== 'general') {
      const searchableText = `${post.title}`.toLowerCase();
    } else {
      const searchableText = `${post.title} ${post.data.message}`.toLowerCase();
    }
    post.searchableText = searchableText;
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

  // Helper method to generate n-gram phrases (not used atm)
  private generatePhrases(words: string[], maxGramLength: number = 3): string[] {

    const phrases: string[] = [];
    
    for (let i = 0; i < words.length; i++) {
      let phrase = words[i];
      phrases.push(phrase);
      
      for (let j = 1; j < maxGramLength && i + j < words.length; j++) {
        phrase += ' ' + words[i + j];
        phrases.push(phrase);
      }
    }
    
    return phrases;
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
            const phrase = `${words[i]} ${words[i + 1]}`;
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
  

  addEvent(event) {
    return this.firestore.collection('events').add(event);
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
      const increment = firebase.default.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReviewCount : increment
      });
    });
   }

  updateEventReviews(eventKey, review) {
    this.firestore.doc('events/' + eventKey).collection('reviews').add(review);
  }
 
  addFirstEventReview(eventKey, review) {
    let r = [];
    this.firestore.doc('events/' + eventKey).update({
      reviews: r
    });
    this.updateEventReviews(eventKey, review);
  }
 
  addPostReactions(postKey, reaction) {
    return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
      const increment = firebase.default.firestore.FieldValue.increment(1);
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
      const increment = firebase.default.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount : increment
      });
    });
  }

  removePostReaction(postKey, reactionKey) {
    this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reactionKey).delete().then(() => {
      const decrement = firebase.default.firestore.FieldValue.increment(-1);
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

  addFirstResourceReactions(resourceKey, reaction) {
    let r = [];
    this.firestore.doc('resources/' + resourceKey).update({
      reactions: r
    });
    // this.afdb.object('/resources/' + resourceKey).update( {
    //   reactions: r
    // });
    return this.updateResourceReactions(resourceKey, reaction);
  }

  
  removeEventReaction(eventKey, reactionKey) {
    this.firestore.doc('/events/' + eventKey + '/reactions/' + reactionKey).delete();
    // var adaRef = this.afdb.database.ref('/events/' + eventKey + '/reactions/' + reactionKey);
    // adaRef.remove()
    //   .then(function() {
    //     console.log("Remove succeeded.")
    //   })
    //   .catch(function(error) {
    //     console.log("Remove failed: " + error.message)
    //   });  
    }

  updateEventReactions(eventKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/events/' + eventKey).collection('/reactions/').add(reaction);
    // var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
    // return newRef.key;
  }

  addFirstEventReactions(eventKey, reaction) {
    let r = [];
    this.firestore.doc('events/' + eventKey).update({
      reactions: r
    });
    // this.afdb.object('/events/' + eventKey).update( {
    //   reactions: r
    // });
    return this.updateEventReactions(eventKey, reaction);
  }

  removeResourceReaction(resourceKey, reactionKey) {
    this.firestore.doc('/resources/' + resourceKey + '/reactions/' + reactionKey).delete();
    // var adaRef = this.afdb.database.ref('/resources/' + resourceKey + '/reactions/' + reactionKey);
    // adaRef.remove()
    //   .then(function() {
    //     console.log("Remove succeeded.")
    //   })
    //   .catch(function(error) {
    //     console.log("Remove failed: " + error.message)
    //   });
    }

  updatePollReviews(pollId, review) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.firestore.doc('/polls/' + pollId).collection('/reviews/').add(review);
//    this.afdb.list('/polls/' + pollId + '/reviews/').push(review);
   }
 
   addFirstPollReview(pollId, review) {
     let r = [];
     this.firestore.doc('polls/' + pollId).update({
      reactions: r
    });
     this.updatePollReviews(pollId, review);
   }
 
   async getFromStorageAsync(section) {
     console.log('inside getFromStorageAsync');
     return await this.storage.get(section).then((val) => val);
   }
  
   // Get messages of the group given the Id.
   getGroupPosts(groupId) {
     return this.firestore.doc('groups/' + groupId).collection('posts');
  }
}
