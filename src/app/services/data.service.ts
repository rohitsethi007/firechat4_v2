import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  private addedByUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private storage: Storage,

  ) {
    this.getFromStorageAsync('currentUser').then((element) => {
      const addedByUser = {
        addedByKey: element.userId,
        addedByUsername: element.username,
        addedByImg: element.img
      };

      this.addedByUser = addedByUser;
   });
  }


  // Get all users
  getUsers() {
    return this.afdb.list('/accounts', ref => ref.orderByChild('name'));
  }

  // Get user with username
  getUserWithUsername(username) {
    return this.afdb.list('/accounts', ref => ref.orderByChild('username').equalTo(username));
  }

  // Get logged in user data
  getCurrentUser() {
    return this.afdb.object('/accounts/' + this.afAuth.auth.currentUser.uid);
  }

  getCurrentUserId() {
    return this.afAuth.auth.currentUser.uid;
  }

  // Get user by their userId
  getUser(userId) {
    return this.afdb.object('/accounts/' + userId);
  }

  // Get requests given the userId.
  getRequests(userId) {
    return this.afdb.object('/requests/' + userId);
  }

  // Get friend requests given the userId.
  getFriendRequests(userId) {
    return this.afdb.list('/requests', ref => ref.orderByChild('receiver').equalTo(userId));
  }

  // Get conversation given the conversationId.
  getConversation(conversationId) {
    return this.afdb.object('/conversations/' + conversationId);
  }

  // Get conversations of the current logged in user.
  getConversations() {
    return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid + '/conversations');
  }

  // Get messages of the conversation given the Id.
  getConversationMessages(conversationId) {
    return this.afdb.object('/conversations/' + conversationId + '/messages');
  }

  // Get messages of the group given the Id.
  getGroupMessages(groupId) {
    return this.afdb.object('/groups/' + groupId + '/messages');
  }

  // Get groups of the logged in user.
  getGroups_original() {
    return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid + '/groups');
  }

  // Get group info given the groupId.
  getGroup(groupId) {
    return this.afdb.object('/groups/' + groupId);
  }

  getBlockedLists() {
    return this.afdb.list('/accounts/' + this.afAuth.auth.currentUser.uid +
      '/conversations', ref => ref.orderByChild('blocked').equalTo(true));
  }
  


// MY CODE **********************************

  // Get Polls of the logged in user.
  getPollDetails(pId) {
    return this.afdb.object('/polls/' + pId);
  }

  // Get Polls of the logged in user.
  getGroupPolls(groupId) {
    return this.afdb.object('/groups/' + groupId + '/polls/');
  }

  // Get Resources of the logged in user.
  getGroupResources(groupId) {
    return this.afdb.object('/groups/' + groupId + '/resources/');
  }

  // Get Events of the logged in user.
  getGroupEvents(groupId) {
    return this.afdb.object('/groups/' + groupId + '/events/');
  }

  // Get Resource details of the logged in user.
  getResourceDetails(rId) {
    return this.afdb.object('/resources/' + rId);
  }

  // Get Post details of the logged in user.
  getPostDetails(pId) {
    return this.afdb.object('/posts/' + pId);
  }
  
  // Get Events details of the logged in user.
  getEventDetails(eId) {
    return this.afdb.object('/events/' + eId);
  }
  // Get Polls of the logged in user.
  getGroupMembers(groupId) {
    return this.afdb.object('/groups/' + groupId + '/members/');
  }

  updatePollMembers(pollKey, pollOptionIndex, members) {
    this.afdb.object('/polls/' + pollKey + '/pollOptions/' + pollOptionIndex).update( {
      members: members
    });
  }
   
  updatePollComments(pollKey, comments) {
    this.afdb.object('/polls/' + pollKey).update( {
      comments: comments
    });
    console.log('updatePollComments:' + pollKey, comments);
  }

  addPoll(poll){
    return this.afdb.list('polls').push(poll);
  }

    // Get all groups.
  getGroups() {
      return this.afdb.list('/groups', ref => ref.orderByChild('name'));
  }

  addResource(resource) {
    resource.addedByUser = this.addedByUser;
    return this.afdb.list('resources').push(resource);
  }

  
  addPost(post) {
    return this.afdb.list('posts').push(post);
  }

  addEvent(event) {
    event.addedByUser = this.addedByUser;
    return this.afdb.list('events').push(event);
  }

  updateResourceReviews(resourceKey, review) {
   // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
   this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
  }

  addFirstResourceReview(resourceKey, review) {
    let r = [];
    this.afdb.object('/resources/' + resourceKey).update( {
      reviews: r
    });
    this.updateResourceReviews(resourceKey, review);
  }

  updatePostReviews(postKey, review) {
    this.afdb.list('/posts/' + postKey + '/reviews/').push(review);
   }
 
  addFirstPostReview(postKey, review) {
    let r = [];
    this.afdb.object('/posts/' + postKey).update( {
      reviews: r
    });
    this.updatePostReviews(postKey, review);
  }

  addPostReview(postId, topReviewKey, reviewKey, review) {
    this.afdb.list('/posts/' + postId + '/reviews/' + reviewKey).push(review);
  }

  updateEventReviews(eventKey, review) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.afdb.list('/events/' + eventKey + '/reviews/').push(review);
  }
 
  addFirstEventReview(eventKey, review) {
    let r = [];
    this.afdb.object('/events/' + eventKey).update( {
      reviews: r
    });
    this.updateEventReviews(eventKey, review);
  }
 
  updatePostReactions(postKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    reaction.addedByUser = this.addedByUser;
    var newRef = this.afdb.list('/posts/' + postKey + '/reactions/').push(reaction);
    return newRef.key;
  }

  addFirstPostReactions(postKey, reaction) {
    let r = [];
    this.afdb.object('/posts/' + postKey).update( {
      reactions: r
    });
    return this.updatePostReactions(postKey, reaction);
  }

  removePostReaction(postKey, reactionKey) {
    var adaRef = this.afdb.database.ref('/posts/' + postKey + '/reactions/' + reactionKey);
    adaRef.remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });  
    }

  updateResourceReactions(resourceKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    reaction.addedByUser = this.addedByUser;
    var newRef = this.afdb.list('/resources/' + resourceKey + '/reactions/').push(reaction);
    return newRef.key;
  }

  addFirstResourceReactions(resourceKey, reaction) {
    let r = [];
    this.afdb.object('/resources/' + resourceKey).update( {
      reactions: r
    });
    return this.updateResourceReactions(resourceKey, reaction);
  }

  
  removeEventReaction(eventKey, reactionKey) {
    var adaRef = this.afdb.database.ref('/events/' + eventKey + '/reactions/' + reactionKey);
    adaRef.remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });  
    }

  updateEventReactions(eventKey, reaction) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    reaction.addedByUser = this.addedByUser;
    var newRef = this.afdb.list('/events/' + eventKey + '/reactions/').push(reaction);
    return newRef.key;
  }

  addFirstEventReactions(eventKey, reaction) {
    let r = [];
    this.afdb.object('/events/' + eventKey).update( {
      reactions: r
    });
    return this.updateEventReactions(eventKey, reaction);
  }

  removeResourceReaction(resourceKey, reactionKey) {
    var adaRef = this.afdb.database.ref('/resources/' + resourceKey + '/reactions/' + reactionKey);
    adaRef.remove()
      .then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    }

  updatePollReviews(pollId, comment) {
    // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
    this.afdb.list('/polls/' + pollId + '/comments/').push(comment);
   }
 
   addFirstPollReview(pollId, comment) {
     let r = [];
     this.afdb.object('/resources/' + pollId).update( {
       comments: r
     });
     this.updateResourceReviews(pollId, comment);
   }
 
   async getFromStorageAsync(section) {
     console.log('inside getFromStorageAsync');
     return await this.storage.get(section).then((val) => val);
   }
  
   // Get messages of the group given the Id.
   getGroupPosts(groupId) {
    return this.afdb.object('/groups/' + groupId + '/posts');
  }
}
