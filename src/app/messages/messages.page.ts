import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

// First, define interfaces for your data structures
interface Message {
  sender: string;
  message: string;
  type: string;
  date: any; // or use Date or firebase.firestore.Timestamp
}

interface ConversationData {
  messages: Message[];
  participants: string[];
  conversationId: string;
  // add other properties your conversation has
}

interface Conversation {
  key: string;
  conversationId: string;
  friend?: any;
  date?: any;
  sender?: string;
  message?: string;
  unreadMessagesCount?: number;
  messagesRead?: number;
  // add other properties your conversation has
}

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
    });
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
        console.error('No user logged in');
        return;
      }
  
      this.dataProvider.getConversations(this.loggedInUserId).snapshotChanges().subscribe({
        next: async (conversationsInfoRes: any) => {
          console.log('Raw conversations response:', conversationsInfoRes);
          
          if (!conversationsInfoRes || conversationsInfoRes.length === 0) {
            console.log('No conversations found');
            this.conversations = [];
            this.loadingProvider.hide();
            return;
          }
  
          let conversations: Conversation[] = conversationsInfoRes.map(c => ({
            key: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
  
          console.log('Mapped conversations:', conversations);
  
          const conversationPromises = conversations.map(async (conversation) => {
            try {
              const userSnapshot = await this.dataProvider.getUser(conversation.key).get().toPromise();
              if (!userSnapshot.exists) {
                console.log(`No user found for conversation ${conversation.key}`);
                return null;
              }
  
              conversation.friend = userSnapshot.data();
  
              const conversationSnapshot = await this.dataProvider
                .getConversation(conversation.conversationId)
                .get()
                .toPromise();
  
              if (!conversationSnapshot.exists) {
                console.log(`No conversation found for ID ${conversation.conversationId}`);
                return null;
              }
  
              const conversationData = conversationSnapshot.data() as ConversationData;
              
              if (!conversationData?.messages?.length) {
                console.log(`No messages in conversation ${conversation.conversationId}`);
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
              console.error(`Error processing conversation:`, error);
              return null;
            }
          });
  
          const processedConversations = await Promise.all(conversationPromises);
          
          const validConversations = processedConversations
            .filter((conv): conv is Conversation => conv !== null)
            .sort((a, b) => b.date - a.date);
  
          console.log('Processed conversations:', validConversations);
  
          validConversations.forEach(conversation => {
            this.addOrUpdateConversation(conversation);
          });
  
        },
        error: (error) => {
          console.error('Error fetching conversations:', error);
          this.loadingProvider.hide();
        },
        complete: () => {
          this.loadingProvider.hide();
        }
      });
  
    } catch (error) {
      console.error('Error in loadConversations:', error);
      this.loadingProvider.hide();
    }
  }
  
}
