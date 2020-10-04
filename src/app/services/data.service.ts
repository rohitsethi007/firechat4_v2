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
  getCurrentUser() {
    return this.getUser(this.afAuth.auth.currentUser.uid);
  }

  getCurrentUserId() {
   return this.afAuth.auth.currentUser.uid;
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
  getConversations() {
    return this.firestore.doc('accounts/' + this.getCurrentUserId()).collection('conversations');
    // return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid + '/conversations');
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

  getBlockedLists() {
    return this.firestore.doc('accounts/' + this.afAuth.auth.currentUser.uid).collection('conversations').ref.where('blocked','==', true);
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
      const increment = firebase.firestore.FieldValue.increment(1);
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
    return new Promise(resolve => {
    this.imageProvider.uploadPostPhotos(post.postMedia).then((postMediaUrls) => {
      post.postMedia = [];

      if (postMediaUrls) {
        post.postMedia = postMediaUrls;
      }
      return resolve(this.firestore.collection('posts').add(post));
      });
    });
  }

  addEvent(event) {
    return this.firestore.collection('events').add(event);
  }

  updateResourceReviews(resourceKey, review) {
   // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
   this.firestore.doc('resources/' + resourceKey).collection('reviews').add(review);
   // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
  }

  addFirstResourceReview(resourceKey, review) {
    let r = [];

    this.firestore.doc('resources/' + resourceKey).update({
      reviews: r
    });
    // this.afdb.object('/resources/' + resourceKey).update( {
    //   reviews: r
    // });
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
 
  addFirstEventReview(eventKey, review) {
    let r = [];
    this.firestore.doc('events/' + eventKey).update({
      reviews: r
    });
    this.updateEventReviews(eventKey, review);
  }
 
  addPostReactions(postKey, reaction) {
    return this.firestore.collection('posts').doc(postKey).collection('reactions').add(reaction).then(() => {
      const increment = firebase.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(postKey).update({
        totalReactionCount : increment
      });
    });
  }

  updatePostReactions(postKey, reaction, removed) {
    return this.firestore.collection('posts').doc(postKey).collection('reactions').doc(reaction.key).update(reaction).then(() => {
      let inc: number;
      if (removed) {
        inc = -1;
      } else {
        inc = 1;
      }
      const increment = firebase.firestore.FieldValue.increment(inc);
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
