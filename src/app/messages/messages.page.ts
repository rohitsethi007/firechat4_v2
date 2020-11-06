import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  conversations: any;
  updateDateTime: any;
  searchFriend: any = '';

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private loadingProvider: LoadingService,
    private dataProvider: DataService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadingProvider.show();

    // Get info of conversations of current logged in user.
    this.dataProvider.getConversations().snapshotChanges().subscribe((conversationsInfoRes: any) => {
      let conversations = [];
      console.log('conversationsInfoRes',conversationsInfoRes);
      conversations = conversationsInfoRes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }));
      
      console.log('conversations:', conversations);
      if (conversations.length > 0) {
        conversations.forEach((conversation) => {
          console.log('conversation',conversation);
          if (conversation) {
            // Get conversation partner info.
            this.dataProvider.getUser(conversation.key).get().subscribe((user) => {
              conversation.friend = user.data();
              // Get conversation info.

              this.dataProvider.getConversation(conversation.conversationId).snapshotChanges().subscribe(async (obj: any) => {
                // Get last message of conversation.
                console.log(obj.payload.data());
                if (obj.payload.data() != null) {
                  let lastMessage = obj.payload.data().messages[obj.payload.data().messages.length - 1];
                  conversation.date = lastMessage.date;
                  conversation.sender = lastMessage.sender;
                  // Set unreadMessagesCount
                  conversation.unreadMessagesCount = obj.payload.data().messages.length - conversation.messagesRead;
                  console.log(obj.payload.data().messages.length + "-" + conversation.messagesRead);
                  console.log(conversation.unreadMessagesCount);
                  let userId = await this.afAuth.currentUser.then((u) => { return u.uid});
                  // Process last message depending on messageType.
                  if (lastMessage.type == 'text') {

                    if (lastMessage.sender == userId) {
                      conversation.message = 'You: ' + lastMessage.message;
                    } else {
                      conversation.message = lastMessage.message;
                    }
                  } else {
                    if (lastMessage.sender == userId) {
                      conversation.message = 'You sent a photo message.';
                    } else {
                      conversation.message = 'has sent you a photo message.';
                    }
                  }
                  // Add or update conversation.
                  this.addOrUpdateConversation(conversation);
                }
              });
            });
          }

        });

        this.loadingProvider.hide();
      }
      else {
        this.conversations = [];
        this.loadingProvider.hide();
      }
    });

    // Update conversations' last active date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function () {
        if (that.conversations) {
          that.conversations.forEach((conversation) => {
            let date = conversation.date;
            conversation.date = new Date(date);
          });
        }
      }, 60000);
    }
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

}
