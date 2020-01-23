import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase
  ) { }


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

  // Get Resource details of the logged in user.
  getResourceDetails(rId) {
    return this.afdb.object('/resources/' + rId);
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
    return this.afdb.list('resources').push(resource);
  }

  updateResourceReviews(resourceKey, review) {
   // this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
   this.afdb.list('/resources/' + resourceKey + '/reviews/').push(review);
  }

  addFirstResourceReview(resourceKey, review)
  {
    let r = [];
    this.afdb.object('/resources/' + resourceKey).update( {
      reviews: r
    });
    this.updateResourceReviews(resourceKey, review);
  }

}
