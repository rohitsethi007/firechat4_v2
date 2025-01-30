import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { DataService } from '../services/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, AlertController, ModalController, IonContent } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ImagemodalPage } from '../imagemodal/imagemodal.page';
import { AngularFirestore } from '@angular/fire/firestore';
interface ConversationData {
  messages?: Array<any>;
  dateCreated?: string;
  users?: string[];
}
interface LocationData {
  latitude: number;
  longitude: number;
}

// Update the interface to match the Contact plugin's types
interface ContactData {
  displayName: string | null;
  name?: {
    givenName?: string;
    familyName?: string;
  };
  phoneNumbers?: Array<{
    value?: string;
    type?: string;
    id?: string;
    pref?: boolean;
  }>;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  @ViewChild(IonContent, null) contentArea: IonContent;

  userId: any;
  title: any;
  message: any;
  conversationId: any;
  messages: any;
  updateDateTime: any;
  messagesToShow: any;
  startIndex: any = -1;
  // Set number of messages to show.
  numberOfMessages = 10;
  loggedInUserId: any;

  // MessagePage
  // This is the page where the user can chat with a friend.
  constructor(
    // public navCtrl: NavController,
    // public navParams: NavParams,
    private router: Router,
    private route: ActivatedRoute,
    public dataProvider: DataService,
    public firestore: AngularFirestore,
    public loadingProvider: LoadingService,
    public alertCtrl: AlertController,
    public imageProvider: ImageService,
    public modalCtrl: ModalController,
    public camera: Camera,
    public keyboard: Keyboard,
    public actionSheet: ActionSheetController,
    public contacts: Contacts,
    public geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.scrollBottom();
  }

  ionViewDidEnter() {
    this.userId = this.route.snapshot.params.id;
    this.loggedInUserId = firebase.default.auth().currentUser.uid;
    console.log(this.userId);

    // Get friend details.
    this.dataProvider.getUser(this.userId).snapshotChanges().subscribe((user: any) => {
      this.title = user.payload.data().name;
    });

    // Get conversationInfo with friend.
    // tslint:disable-next-line: max-line-length
    this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).snapshotChanges().subscribe((conversation: any) => {
      if (conversation.payload.data()) {
        // User already have conversation with this friend, get conversation
        this.conversationId = conversation.payload.data().conversationId;
        // Get conversation
        this.dataProvider.getConversationMessages(this.conversationId).snapshotChanges().subscribe((messagesRes: any) => {
          let messages = messagesRes.payload.data().messages;
          if (messages == null) {
            messages = [];
          }
          if (this.messages) {
            // Just append newly added messages to the bottom of the view.
            if (messages.length > this.messages.length) {
              let message = messages[messages.length - 1];

              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user: any) => {
                message.avatar = user.payload.data().img;
              });
              this.messages.push(message);
              this.messagesToShow.push(message);
            }
          } else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach((message) => {
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user: any) => {
                message.avatar = user.payload.data().img;
              });
              this.messages.push(message);
            });
            // Load messages in relation to numOfMessages.
            if (this.startIndex === -1) {
              // Get initial index for numberOfMessages to show.
              if ((this.messages.length - this.numberOfMessages) > 0) {
                this.startIndex = this.messages.length - this.numberOfMessages;
              } else {
                this.startIndex = 0;
              }
            }
            if (!this.messagesToShow) {
              this.messagesToShow = [];
            }
            // Set messagesToShow
            for (let i = this.startIndex; i < this.messages.length; i++) {
              this.messagesToShow.push(this.messages[i]);
            }
            this.loadingProvider.hide();
          }
        });
      }
    });

    // Update messages' date time elapsed every minute based on Moment.js.
    var that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(function () {
        if (that.messages) {
          that.messages.forEach((message) => {
            let date = message.date;
            message.date = new Date(date);
          });
        }
      }, 60000);
    }

    this.scrollBottom();
  }
  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    var that = this;
    // Show loading.
    this.loadingProvider.show();
    setTimeout(function () {
      // Set startIndex to load more messages.
      if ((that.startIndex - that.numberOfMessages) > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
        that.startIndex = 0;
      }
      // Refresh our messages list.
      that.messages = null;
      that.messagesToShow = null;

      that.scrollTop();

      // Populate list again.
      that.ionViewDidEnter();
    }, 1000);
  }

  // Update messagesRead when user lefts this page.
  ionViewWillLeave() {
    this.setMessagesRead();
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead() {
    if (this.conversationId) {
      // Get messages from Firestore conversation
      this.firestore.doc(`conversations/${this.conversationId}`)
        .get()
        .subscribe(doc => {
          if (doc.exists) {
            const data = doc.data() as ConversationData;
            const messagesLength = data.messages?.length || 0;
            
            console.log('Total messages:', messagesLength);
  
            // Update the messagesRead count in user's conversation reference
            this.firestore.doc(`/accounts/${this.loggedInUserId}/conversations/${this.userId}`)
              .update({
                messagesRead: messagesLength
              })
              .then(() => {
                console.log('Messages marked as read:', messagesLength);
              })
              .catch(error => {
                console.error('Error updating messagesRead:', error);
              });
          }
        });
    }
  }
  

  scrollBottom() {
    console.log("Calling Sb")
    setTimeout(() => {
      if (this.contentArea.scrollToBottom) {
        this.contentArea.scrollToBottom();
      }
    }, 500);
    this.setMessagesRead();
  }

  scrollTop() {
    console.log("Calling St")
    setTimeout(() => {
      if (this.contentArea.scrollToTop) {
        this.contentArea.scrollToTop();
      }
    }, 500);
  }


  // Check if the user is the sender of the message.
  isSender(message) {
    if (message.sender == this.loggedInUserId) {
      return true;
    } else {
      return false;
    }
  }


  // Send message, if there's no conversation yet, create a new conversation.
  send(type) {
    if (this.message) {
      // User entered a text on messagebox
      if (this.conversationId) {
        let messages = JSON.parse(JSON.stringify(this.messages));
        messages.push({
          date: new Date().toString(),
          sender: this.loggedInUserId,
          type: type,
          message: this.message
        });

        // Update conversation on database.
        this.dataProvider.getConversation(this.conversationId).update({
          messages: messages
        });
        // Clear messagebox.
        this.message = '';
        this.scrollBottom();
      } else {
        console.log("else")
        // New Conversation with friend.
        var messages = [];
        messages.push({
          date: new Date().toString(),
          sender: this.loggedInUserId,
          type: type,
          message: this.message
        });
        var users = [];
        users.push(this.loggedInUserId);
        users.push(this.userId);
        // Add conversation.
        this.firestore.collection('conversations').add({
          dateCreated: new Date().toString(),
          messages: messages,
          users: users
        }).then((success) => {
          let conversationId = success.id;
          this.message = '';
          // Add conversation reference to the users.
          this.firestore.doc('/accounts/' + this.loggedInUserId + '/conversations/' + this.userId).set({
            conversationId,
            messagesRead: 1
          });
          this.firestore.doc('/accounts/' + this.userId + '/conversations/' + this.loggedInUserId).set({
            conversationId,
            messagesRead: 0
          });
        });
        this.scrollBottom();
      }
    }
  }

  viewUser(userId) {
    this.router.navigateByUrl('userinfo/' + userId);
  }


  async attach() {
    const action = await this.actionSheet.create({
      header: 'Choose attachments',
      backdropDismiss: true,
      mode: 'md',
      cssClass: 'post-options-action-sheet',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          cssClass: 'actionicon',
          handler: () => this.handlePhotoUpload(this.camera.PictureSourceType.CAMERA)
        },
        {
          text: 'Photo Library',
          icon: 'images-outline',
          cssClass: 'actionicon',
          handler: () => this.handlePhotoUpload(this.camera.PictureSourceType.PHOTOLIBRARY)
        },
        {
          text: 'Video',
          icon: 'videocam-outline',
          cssClass: 'actionicon',
          handler: () => this.handleVideoUpload()
        },
        {
          text: 'Location',
          icon: 'location-outline',
          cssClass: 'actionicon',
          handler: () => this.handleLocation()
        },
        {
          text: 'Contact',
          icon: 'person-outline',
          cssClass: 'actionicon',
          handler: () => this.handleContact()
        },
        {
          text: 'Cancel',
          icon: 'close',
          cssClass: 'cancelAction',
          role: 'cancel',
          handler: () => console.log('Cancel clicked')
        }
      ]
    });
  
    await action.present();
  }
  
  
  
  
  private async handlePhotoUpload(sourceType: number): Promise<void> {
    try {
      const url = await this.imageProvider.uploadPhotoMessage(
        this.conversationId, 
        sourceType
      );
      this.message = url;
      await this.send('image');
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  }
  
  private async handleVideoUpload(): Promise<void> {
    try {
      const url = await this.imageProvider.uploadVideoMessage(this.conversationId);
      this.message = url;
      await this.send('video');
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  }
  private async handleLocation(): Promise<void> {
    try {
      const position = await this.geolocation.getCurrentPosition({
        timeout: 5000
      });
  
      const locationMessage = "Location:<br> lat:" + position.coords.latitude + "<br> lng:" + position.coords.longitude;
      const mapUrl = "<a href='https://www.google.com/maps/search/" + position.coords.latitude + "," + position.coords.longitude + "'>View on Map</a>";
  
      const alert = await this.alertCtrl.create({
        header: 'Share Location',
        cssClass: 'location-alert',
        message: `
          <div class="location-preview">
            <div class="location-icon">
              <ion-icon name="location-outline" color="primary"></ion-icon>
            </div>
            <div class="location-details">
              ${locationMessage}
            </div>
          </div>
        `,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'location-cancel-btn'
          },
          {
            text: 'Share',
            cssClass: 'location-share-btn',
            handler: () => {
              this.message = locationMessage + "<br>" + mapUrl;
              this.send("location");
            }
          }
        ]
      });
  
      await alert.present();
    } catch (error) {
      console.error('Error getting location:', error);
      
      const errorAlert = await this.alertCtrl.create({
        header: 'Location Error',
        cssClass: 'error-alert',
        message: 'Unable to get your location. Please check your GPS settings and try again.',
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      });
      await errorAlert.present();
    }
  }
  
  
  private async handleContact(): Promise<void> {
    try {
      const contact = await this.contacts.pickContact();
      
      // Transform the contact to match our interface
      const contactData: ContactData = {
        displayName: contact.displayName,
        name: {
          givenName: contact.name?.givenName || '',
          familyName: contact.name?.familyName || ''
        },
        phoneNumbers: contact.phoneNumbers || []
      };
  
      const contactMessage = this.formatContactMessage(contactData);
      this.message = contactMessage;
      await this.send('contact');
    } catch (error) {
      console.error('Error picking contact:', error);
    }
  }

  
  
  private formatLocationMessage(location: LocationData) {
    const text = `Location:<br> lat:${location.latitude}<br> lng:${location.longitude}`;
    const mapUrl = `<a href='https://www.google.com/maps/search/${location.latitude},${location.longitude}'>View on Map</a>`;
    
    return {
      text,
      fullMessage: `${text}<br>${mapUrl}`
    };
  }
  
  private formatContactMessage(contact: ContactData): string {
    // Add parentheses to properly group the operators
    const name = (contact.displayName ?? 
      (`${contact.name?.givenName || ''} ${contact.name?.familyName || ''}`.trim())) || 'Unknown';
    
    // Safely access phone number with additional null checks
    const phoneNumber = contact.phoneNumbers?.[0]?.value || '';
    
    return phoneNumber ? 
      `<b>Name:</b> ${name}<br><b>Mobile:</b> <a href='tel:${phoneNumber}'>${phoneNumber}</a>` :
      `<b>Name:</b> ${name}`;
  }
  

  // Enlarge image messages.
  enlargeImage(img) {
    this.modalCtrl.create({
      component: ImagemodalPage,
      componentProps: {
        img
      }
    }).then(res => {
      res.present();
    });
  }

  getUnreadUserMessagesCount() {
    
  }
}
