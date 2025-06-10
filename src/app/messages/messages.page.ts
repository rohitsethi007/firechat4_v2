import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConversationData, Conversation} from '../models/interfaces';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  conversations: any;
  updateDateTime: any;
  searchFriend: any = '';
  loggedInUserId: any;
  private subscriptions: Subscription[] = [];
  unreadMessageCount: number = 0;
  
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private loadingProvider: LoadingService,
    private dataProvider: DataService
  ) { }

  ngOnInit() {
    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      
        // Set up unread messages count subscription
    this.subscriptions.push(
      this.afAuth.authState.pipe(
        switchMap(user => {
          if (!user) {
            return of(0);
          }
          
          return this.dataProvider.getConversations(user.uid).snapshotChanges().pipe(
            switchMap(async (conversationsInfoRes: any) => {
              let totalUnread = 0;
              
              if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
                return totalUnread;
              }

              const conversations = conversationsInfoRes.map(c => ({
                key: c.payload.doc.id,
                ...c.payload.doc.data()
              }));

              for (const conversation of conversations) {
                try {
                  const conversationSnapshot = await this.dataProvider
                    .getConversation(conversation.conversationId)
                    .get()
                    .toPromise();

                  if (conversationSnapshot.exists) {
                    const conversationData = conversationSnapshot.data() as ConversationData;
                    if (conversationData?.messages?.length) {
                      const unreadCount = 
                        conversationData.messages.length - (conversation.messagesRead || 0);
                      totalUnread += unreadCount;
                    }
                  }
                } catch (error) {
                  // Error calculating unread messages
                }
              }
              
              return totalUnread;
            })
          );
        })
      ).subscribe({
        next: (count) => {
        },
        error: (error) => {
          // Error in unread messages subscription
        }
      })
    );
    });
  }
  ngOnDestroy() {
    // Clean up subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  ionViewDidEnter() {
    this.loadingProvider.show();

    this.loadConversations();
  }

  // Add or update conversation for real-time sync based on our observer, sort by active date.
  addOrUpdateConversation(conversation) {
    if (!this.conversations) {
      this.conversations = [conversation];
    } else {
      var index = -1;
      for (var i = 0; i < this.conversations.length; i++) {
        if (this.conversations[i].key == conversation.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.conversations[index] = conversation;
      } else {
        this.conversations.push(conversation);
      }
      // Sort by last active date.
      this.conversations.sort((a: any, b: any) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        if (date1 > date2) {
          return -1;
        } else if (date1 < date2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

  // Open chat with friend.
  message(userId) {
    this.router.navigateByUrl('/message/' + userId)
    // this.app.getRootNav().push(MessagePage, { userId: userId });
  }

  // Return class based if conversation has unreadMessages or not.
  hasUnreadMessages(conversation) {
    if (conversation.unreadMessagesCount > 0) {
      return 'bold';
    } else
      return '';
  }

  async loadConversations() {
    try {
      const userId = await this.afAuth.currentUser;
      if (!userId) {
        return;
      }
  
      this.dataProvider.getConversations(this.loggedInUserId).snapshotChanges().subscribe({
        next: async (conversationsInfoRes: any) => {
          
          if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
            this.conversations = [];
            this.loadingProvider.hide();
            return;
          }
  
          let conversations: Conversation[] = conversationsInfoRes.map(c => ({
            key: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
  
          const conversationPromises = conversations.map(async (conversation) => {
            try {
              const userSnapshot = await this.dataProvider.getUser(conversation.key).get().toPromise();
              if (!userSnapshot.exists) {
                return null;
              }
  
              const userData = userSnapshot.data() as Record<string, any>;
              conversation.friend = {
                ...(userData || {}),
                userId: conversation.key // Add userId explicitly for the UserImagePipe
              };
  
              const conversationSnapshot = await this.dataProvider
                .getConversation(conversation.conversationId)
                .get()
                .toPromise();
  
              if (!conversationSnapshot.exists) {
                return null;
              }
  
              const conversationData = conversationSnapshot.data() as ConversationData;
              
              if (!conversationData?.messages?.length) {
                return null;
              }
  
              const lastMessage = conversationData.messages[conversationData.messages.length - 1];
              
              conversation.date = lastMessage.date;
              conversation.sender = lastMessage.sender;
              conversation.unreadMessagesCount = 
                conversationData.messages.length - (conversation.messagesRead || 0);
  
              const currentUserId = userId.uid;
              if (lastMessage.type === 'text') {
                conversation.message = lastMessage.sender === currentUserId
                  ? `You: ${lastMessage.message}`
                  : lastMessage.message;
              } else {
                conversation.message = lastMessage.sender === currentUserId
                  ? 'You sent a photo message.'
                  : 'has sent you a photo message.';
              }
  
              return conversation;
            } catch (error) {
              return null;
            }
          });
  
          const processedConversations = await Promise.all(conversationPromises);
          
          const validConversations = processedConversations
            .filter((conv): conv is Conversation => conv !== null)
            .sort((a, b) => b.date - a.date);
  
          validConversations.forEach(conversation => {
            this.addOrUpdateConversation(conversation);
          });
  
        },
        error: (error) => {
          this.loadingProvider.hide();
        },
        complete: () => {
          this.loadingProvider.hide();
        }
      });
  
    } catch (error) {
      this.loadingProvider.hide();
    }
  }
  
}