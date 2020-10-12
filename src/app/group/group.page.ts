import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController, ActionSheetController, AlertController,
  ModalController, PopoverController, IonInfiniteScroll } from '@ionic/angular';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingService } from '../services/loading.service';
import { ImageService } from '../services/image.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as firebase from 'firebase';

import { PopoverPage } from '../popover/popover.page';
import { TagModalPage } from '../tag-modal/tag-modal.page';
import { ReactionListModalPage } from '../reaction-list-modal/reaction-list-modal.page';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  @ViewChild('content', null) content: ElementRef;
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  title: any;
  groupId: any;
  message: any;
  messages: any;
  updateDateTime: any;
  subscription: any;
  messagesToShow: any;
  startIndex: any = -1;
  scrollDirection: any = 'bottom';
  // Set number of messages to show.
  numberOfMessages = 10;
  private polls: any = [];
  private resources: any = [];
  private events: any = [];
  private tab: any;
  private group: any;
  private user: any;
  private groupMembers: any;
  private loggedInUserIsMember: any = 'false';
  private resourceTags: any = [];
  private eventTags: any;
  private alert: any;
  private loggedInUserId: any;
  private loggedInUser: any;
  notifications: any = [];

  private toggled = false;
  private emojitext: string;

  // posts
  private posts: any = [];
  private postsToShow: any;
  private numberOfPosts = 10;

  // infinite scroll data
  private firstDataSetPost: any;
  private lastDataSetPost: any;
  private maxNoOfPosts: any = 1000;
  private nextDataSetPost: firebase.firestore.Query;

  private firstDataSetEvent: any;
  private lastDataSetEvent: any;
  private maxNoOfEvents: any = 1000;
  private nextDataSetEvent: firebase.firestore.Query;


  private firstDataSetPoll: any;
  private lastDataSetPoll: any;
  private maxNoOfPolls: any = 1000;
  private nextDataSetPoll: firebase.firestore.Query;


  private firstDataSetResources: any;
  private lastDataSetResources: any;
  private maxNoOfResources: any = 1000;
  private nextDataSetResources: firebase.firestore.Query;

  // GroupPage
  // This is the page where the user can chat with other group members and view group info.
  constructor(
    public dataProvider: DataService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
    public imageProvider: ImageService,
    public loadingProvider: LoadingService,
    public camera: Camera,
    public keyboard: Keyboard,
    public actionSheet: ActionSheetController,
    public contacts: Contacts,
    public geolocation: Geolocation,
    private route: ActivatedRoute,
    private router: Router,

    public popoverCtrl: PopoverController
  ) {
    this.loggedInUserId = firebase.auth().currentUser.uid;
  }

  handleSelection(event) {
    this.emojitext = this.emojitext + ' ' + event.char;
  }

  ngOnInit() {
    this.loadingProvider.show();
    this.tab = 'posts';
    this.title = 'Posts';

    this.loggedInUserId = firebase.auth().currentUser.uid;
    // Get Posts
    this.dataProvider.getCurrentUser().get().subscribe((user) => {
      // this.userReactions = user.data().userReactions;
      // this.userNotifications = user.data().userNotifications;
      this.loggedInUser = user.data();
      this.getGroupDetailsandPosts();
    });


    this.loadingProvider.hide();
  }

  ionViewDidEnter() { }

  // Update messagesRead when user lefts this page.
  ionViewWillLeave() {
    if (this.messages) {
      this.setMessagesRead(this.messages);
    }
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead(messages) {
    // if (this.navCtrl.getActive().instance instanceof GroupPage) {
    // Update user's messagesRead on database.
    this.firestore.doc('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId).update({
      messagesRead: this.messages.length
    });
    // }
  }

  // Check if 'return' button is pressed and send the message.
  onType(keyCode) {
    if (keyCode == 13) {
      // this.keyboard.close();
      // this.send();
    }
  }

  // Scroll to bottom of page after a short delay.
  scrollBottom() {
    const that = this;
    setTimeout(function() {
      that.content.nativeElement.scrollBottom = that.content.nativeElement.scrollHeight;
    }, 300);
  }

  // Scroll to top of the page after a short delay.
  scrollTop() {
    const that = this;
    setTimeout(function() {
      that.content.nativeElement.scrollTop = that.content.nativeElement.scrollHeight;
    }, 300);
  }

  // Scroll depending on the direction.
  doScroll() {
    if (this.scrollDirection === 'bottom') {
      this.scrollBottom();
    } else if (this.scrollDirection === 'top') {
      this.scrollTop();
    }
  }

  // Check if the user is the sender of the message.
  isSender(message) {
    if (message.sender === firebase.auth().currentUser.uid) {
      return true;
    } else {
      return false;
    }
  }

  // Check if the message is a system message.
  isSystemMessage(message) {
    if (message.type === 'system') {
      return true;
    } else {
      return false;
    }
  }

  // View user info
  viewUser(userId) {
    this.router.navigateByUrl('/userinfo/' + userId);
  }

  // Send text message to the group.
  send(type) {
    // Clone an instance of messages object so it will not directly be updated.
    // The messages object should be updated by our observer declared on ionViewDidLoad.
    const messages = JSON.parse(JSON.stringify(this.messages));

    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      // tslint:disable-next-line: object-literal-shorthand
      type: type,
      message: this.message
    });

    // Update group messages.
    this.dataProvider.getGroup(this.groupId).update({
      // tslint:disable-next-line: object-literal-shorthand
      messages: messages
    });
    // Clear messagebox.
    this.message = '';
  }

  // Enlarge image messages.
  enlargeImage(img) {
    // let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
    // imageModal.present();
  }

  attach() {
    const action = this.actionSheet.create({
      header: 'Choose attachments',
      buttons: [{
        text: 'Camera',
        handler: () => {
          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      }, {
        text: 'Video',
        handler: () => {
          this.imageProvider.uploadGroupVideoMessage(this.groupId).then(url => {
            this.sendVideoMessage(url);
          });
        }
      }, {
        text: 'Location',
        handler: () => {
          this.geolocation.getCurrentPosition({
            timeout: 2000
          }).then(res => {
            const locationMessage = 'current location: lat:' + res.coords.latitude + ' lng:' + res.coords.longitude;
            const mapUrl = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';
            const confirm = this.alertCtrl.create({
              header: 'Your Location',
              message: locationMessage,
              buttons: [{
                text: 'cancel',
                handler: () => {
                }
              }, {
                text: 'Share',
                handler: () => {
                  this.message = locationMessage + '<br>' + mapUrl;
                  this.send('location');
                }
              }]
            }).then(r => r.present());
          }, locationErr => {
          });
        }
      }, {
        text: 'Contact',
        handler: () => {
          this.contacts.pickContact().then(data => {
            this.message = '<b>Name:</b> ' + data.displayName + '<br><b>Mobile:</b> <a href=\'tel:' + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';
            this.send('contact');
          }, err => {
          });
        }
      }, {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
        }
      }]
    }).then(r => r.present());
  }

  takePhoto() {
    this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
      // Process image message.
      this.sendPhotoMessage(url);
    });
  }

  // Process photoMessage on database.
  sendPhotoMessage(url) {
    const messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'image',
      url
    });
    this.dataProvider.getGroup(this.groupId).update({
      messages
    });
    this.message = '';
  }

  sendVideoMessage(url) {
    const messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'video',
      url
    });
    this.dataProvider.getGroup(this.groupId).update({
      messages
    });
    this.message = '';
  }

  // View group info.
  groupInfo() {
    this.router.navigateByUrl('/groupinfo/' + this.groupId);
  }

  // Controller Functions
  onPress($event) {
  }

  onPressUp(event, message) {
    this.presentPopover(event, message);
  }

  async joinGroup() {
    this.alert = this.alertCtrl.create({
      header: 'Join Group',
      message: 'Are you sure you want to join this group?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Join',
          handler: data => {
            // Proceed
            this.loadingProvider.show();

            // Add groupInfo to each friend added to the group.
            this.firestore.doc('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId).update({
              messagesRead: 0
            });
            // Add friend as members of the group.
            this.group.members.push(firebase.auth().currentUser.uid);
            // Add system message that the members are added to the group.
            this.group.messages.push({
              date: new Date().toString(),
              sender: firebase.auth().currentUser.uid,
              type: 'system',
              message: this.user.name + ' has joined the group.',
              icon: 'md-contacts'
            });

            // Update group data on the database.
            this.dataProvider.getGroup(this.groupId).update({
              members: this.group.members,
              messages: this.group.messages
            }).then(() => {
              // Back.
              this.loadingProvider.hide();
              this.navCtrl.back();
            });
          }
        }
      ]
    }).then(r => r.present());
  }

  async presentPopover(myEvent: any, message) {
    let ev: any;
    ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: myEvent.center.y,
            left: myEvent.center.x
          };
        }
      }
    };
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: { message, groupId: this.groupId },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  getGroupDetailsandMessages() {
    // Get group details

    this.groupId = this.route.snapshot.params.id;
    this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group: any) => {
      this.group = group.payload.data();
      this.title = group.payload.data().name;

        // Get Group Members
      if (this.group.members) {
          this.group.members.forEach((memberId) => {
            this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member: any) => {
              if (member.key != null) {
                member = { $key: member.key, ...member.payload.data() };
                this.addUpdateOrRemoveMember(member);
              }
            });
          });
        }

        // Get group messages
      this.dataProvider.getGroupMessages(this.groupId).snapshotChanges().subscribe((messagesRes: any) => {
          let messages = messagesRes.payload.data();
          if (messages == null || messages == undefined) { messages = []; }

          if (this.messages != null && this.messages != undefined) {
            // Just append newly added messages to the bottom of the view.

            if (messages.length > this.messages.length) {
              const message = messages[messages.length - 1];
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user: any) => {
                message.avatar = user.payload.data().img;
              });
              this.messages.push(message);
              // Also append to messagesToShow.
              this.messagesToShow.push(message);
              // Reset scrollDirection to bottom.
              this.scrollDirection = 'bottom';
            }
          } else {
            // Get all messages, this will be used as reference object for messagesToShow.
            this.messages = [];
            messages.forEach((message) => {
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user: any) => {
                if (user.key != null) {
                  message.avatar = user.payload.data().img;
                }
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

      this.dataProvider.getGroupMembers(this.groupId).snapshotChanges().subscribe((memberIdsRes: any) => {
          const memberIds = memberIdsRes.payload.data();
          if (memberIds.includes(firebase.auth().currentUser.uid)) {
            this.loggedInUserIsMember = true;
          } else {
            this.loggedInUserIsMember = false;
          }

        });

    });

    // Update messages' date time elapsed every minute based on Moment.js.
    const that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(() => {
        if (that.messages) {
          that.messages.forEach((message) => {
            const date = message.date;
            message.date = new Date(date);
          });
        }
      }, 60000);
    }
  }

  getGroupDetailsandPosts() {
    // Get group details
    this.posts = [];
    this.groupId = this.route.snapshot.params.id;
    this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group: any) => {

    this.group = group.payload.data();
    this.title = group.payload.data().name;

    // Get Group Members
    if (this.group.members) {
      this.group.members.forEach((memberId) => {
        this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member: any) => {
          if (member.payload.exists) {
            member = { $key: member.payload.id, ...member.payload.data() };
            this.addUpdateOrRemoveMember(member);
          }
        });
      });
    }

        // Get group posts
    this.firstDataSetPost = this.firestore.collection('posts').ref
        .where('groupId', '==', this.groupId)
        .where('type', '==', 'general')
        .orderBy('date', 'desc')
        .limit(5);

    this.firstDataSetPost.onSnapshot((po) => {
      this.lastDataSetPost = po.docs[po.docs.length - 1];
      this.posts = [];
      this.loadEachPostData(po);
      });
    });

    // Update messages' date time elapsed every minute based on Moment.js.
    const that = this;
    if (!that.updateDateTime) {
      that.updateDateTime = setInterval(() => {
        if (that.posts) {
          that.posts.forEach((post) => {
            const date = post.date;
            post.date = new Date(date);
          });
        }
      }, 60000);
    }
  }

  loadEachPostData(po: any) {
    po.forEach((p) => {
      let post: any;
      post = p.data();
      post.key = p.id;
      const startDate = new Date(post.date);
    // Do your operations
      const endDate   = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      if (seconds > 120) {
      post.showNewIcon = false;
    } else {
      post.showNewIcon = true;
    }
      // get reactions list
      this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
        post.reactions = [];
        reactions.forEach(element => {
        let reaction = element.payload.doc.data();
        reaction.key = element.payload.doc.id;
        post.reactions.push(reaction);
      });

        // Check for Thanks
        if (reactions.length > 0) {
        let foundSmiley = false;
        if (post.reactions !== undefined) {
            let r = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());
            foundSmiley = r.reactionType.some(r => r === 'Thanks');
          }
        if (foundSmiley) {
            post.showSmiley = true;
          } else {
            post.showSmiley = false;
          }
          // Check for Hugs
        let foundHug = false;
        if (post.reactions !== undefined) {
            let r = post.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId())
            foundHug = r.reactionType.some(r => r === 'Hug');
          }
        if (foundHug) {
            post.showHug = true;
          } else {
            post.showHug = false;
          }
      }
     });
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
      this.addOrUpdatePost(post);
    });
  }

  addUpdateOrRemoveMember(member) {
    if (this.group) {
      if (this.group.members.indexOf(member.$key) > -1) {
        // User exists in the group.
        if (!this.groupMembers) {
          this.groupMembers = [member];
        } else {
          let index = -1;
          for (let i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].$key === member.$key) {
              index = i;
            }
          }
          // Add/Update User.
          if (index > -1) {
            this.groupMembers[index] = member;
          } else {
            this.groupMembers.push(member);
          }
        }
      } else {
        // User already left the group, remove member from list.
        let index1 = -1;
        for (let j = 0; j < this.groupMembers.length; j++) {
          if (this.groupMembers[j].$key === member.$key) {
            index1 = j;
          }
        }
        if (index1 > -1) {
          this.groupMembers.splice(index1, 1);
        }
      }
    }
  }

  segmentChanged($event) {
    if (this.tab === 'groups') {
      this.title = this.group.name; this.getGroupDetailsandMessages();
    } else if (this.tab === 'posts') {
      this.title = this.group.name; this.getGroupDetailsandPosts();
    } else if (this.tab === 'polls') {
      this.title = this.group.name; this.getPolls();
    } else if (this.tab === 'resources') {
      this.title = this.group.name; this.getResources();
    } else if (this.tab === 'events') {
      this.title = this.group.name; this.getEvents();
    } else if (this.tab === 'groupInfo') {
      this.title = this.group.name;
    }
  }

  getPolls() {
        // Get group posts
    this.firstDataSetPoll = this.firestore.collection('posts').ref
                              .where('groupId', '==', this.groupId)
                              .where('type', '==', 'poll')
                              .orderBy('date', 'desc')
                              .limit(5);
    // Get group posts
    this.firstDataSetPoll
    .onSnapshot((po) => {
      this.lastDataSetPoll = po.docs[po.docs.length - 1];
      this.polls = [];
      this.loadEachPollData(po);
      });
  }

  loadEachPollData(po: any) {
    po.forEach((p) => {
      let post: any;
      post = p.data();
      post.key = p.id;
      const startDate = new Date(post.date);
    // Do your operations
      const endDate   = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      if (seconds > 120) {
      post.showNewIcon = false;
    } else {
      post.showNewIcon = true;
    }
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
      this.addOrUpdatePoll(post);
    });
  }

  viewPoll(poll) {
    this.router.navigateByUrl('post/' + poll.key);
  }

  viewResource(resource) {
    this.router.navigateByUrl('post/' + resource.key);
  }

  viewPost(post) {
    this.router.navigateByUrl('post/' + post.key);

  }

  viewEvent(event) {
    this.router.navigateByUrl('post/' + event.key);
  }

  newPoll() {
    this.router.navigateByUrl('/new-poll/' + this.groupId);
  }

  newPost() {
    this.router.navigateByUrl('/new-post/' + this.groupId);
  }

  newResource() {
    this.router.navigateByUrl('/new-resource/' + this.groupId);
  }

  newEvent() {
    this.router.navigateByUrl('/new-event/' + this.groupId);
  }

  getResources() {
    // Get group posts
    this.firstDataSetResources = this.firestore.collection('posts').ref
    .where('groupId', '==', this.groupId)
    .where('type', '==', 'resource')
    .orderBy('date', 'desc')
    .limit(5);
    // Get group posts
    this.firstDataSetResources
        .onSnapshot((po) => {
    this.lastDataSetResources = po.docs[po.docs.length - 1];
    this.resources = [];
    this.loadEachResourceData(po);
    });
  }

  loadEachResourceData(po: any) {
    po.forEach((p) => {
      let post: any;
      post = p.data();
      post.key = p.id;
      const startDate = new Date(post.date);
    // Do your operations
      const endDate   = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      if (seconds > 120) {
      post.showNewIcon = false;
    } else {
      post.showNewIcon = true;
    }
      // get reactions list
      this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
        post.reactions = [];
        reactions.forEach(element => {
        let reaction = element.payload.doc.data();
        reaction.key = element.payload.doc.id;
        post.reactions.push(reaction);
      });

        // Check for Thanks
        if (reactions) {
        let foundSmiley = false;
        if (post.reactions !== undefined) {
            foundSmiley = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                          && el.reactionType === 'Thanks');
          }
        if (foundSmiley) {
            post.showSmiley = true;
          } else {
            post.showSmiley = false;
          }
        // Check for Bookmark
        let foundBookmark = false;
        if (post.reactions !== undefined) {
          foundBookmark = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                        && el.reactionType === 'Bookmark');
          }
        if (foundBookmark) {
            post.showBookmark = true;
          } else {
            post.showBookmark = false;
          }
      }
      });
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
      this.addOrUpdateResource(post);
    });
  }

  getEvents() {
    // Get group posts
    this.firstDataSetEvent = this.firestore.collection('posts').ref
    .where('groupId', '==', this.groupId)
    .where('type', '==', 'event')
    .orderBy('date', 'desc')
    .limit(5);
    // Get group posts
    this.firstDataSetEvent
        .onSnapshot((po) => {
    this.lastDataSetEvent = po.docs[po.docs.length - 1];
    this.events = [];
    this.loadEachEventData(po);
    });
  }

  loadEachEventData(po: any) {
    po.forEach((p) => {
      let post: any;
      post = p.data();
      post.key = p.id;
      const startDate = new Date(post.date);
    // Do your operations
      const endDate   = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      if (seconds > 120) {
      post.showNewIcon = false;
    } else {
      post.showNewIcon = true;
    }
      // get reactions list
      this.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe((reactions: any) => {
        post.reactions = [];
        reactions.forEach(element => {
        let reaction = element.payload.doc.data();
        reaction.key = element.payload.doc.id;
        post.reactions.push(reaction);
      });

        // Check for Thanks
        if (reactions) {
        let foundSmiley = false;
        if (post.reactions !== undefined) {
            foundSmiley = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                          && el.reactionType === 'Thanks');
          }
        if (foundSmiley) {
            post.showSmiley = true;
          } else {
            post.showSmiley = false;
          }
         // Check for Checkin
        let foundCheckin = false;
        if (post.reactions !== undefined) {
          foundCheckin = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                        && el.reactionType === 'Checkin');
          }
        if (foundCheckin) {
            post.showCheckin = true;
          } else {
            post.showCheckin = false;
          }

      }
      });
      post.postTags = post.postTags.filter(x => x.isChecked !== false);
      this.addOrUpdateEvent(post);
    });
  }

  addOrUpdatePoll(poll) {
    let totalPollCount = 0;
    // Add total poll count
    if (poll.pollOptions) {
      poll.pollOptions.forEach(element => {
        if (element.members !== undefined) {
        totalPollCount = totalPollCount + element.members.length;
        }
      });
    }
    poll.totalPollCount = totalPollCount;

    // Add NEW Icon
    const startDate = new Date(poll.dateCreated);
    const endDate   = new Date();
    const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

    if (seconds > 120) {
      poll.showNewIcon = false;
    } else {
      poll.showNewIcon = true;
    }

    if (!this.polls) {
      this.polls = [poll];
    } else {
      let index = -1;
      for (let i = 0; i < this.polls.length; i++) {
        if (this.polls[i].key == poll.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.polls[index] = poll;
      } else {
        this.polls.push(poll);
      }
    }
  }

  addOrUpdateResource(resource) {
    // Add NEW Icon
    const startDate = new Date(resource.dateCreated);
    const endDate   = new Date();
    const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

    if (seconds > 120) {
      resource.showNewIcon = false;
    } else {
      resource.showNewIcon = true;
    }

    if (!this.resources) {
      this.resources = [resource];
    } else {
      let index = -1;
      for (let i = 0; i < this.resources.length; i++) {
        if (this.resources[i].key == resource.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.resources[index] = resource;
      } else {
        this.resources.push(resource);
      }
    }
  }

  addOrUpdatePost(post) {
    if (!this.posts) {
      this.posts = [post];
    } else {
      let index = -1;
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].key == post.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.posts[index] = post;
      } else {
        this.posts.push(post);
      }
    }

  }

  addOrUpdateEvent(event) {
    // Add NEW Icon
    const startDate = new Date(event.dateCreated);
    const endDate   = new Date();
    const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

    if (seconds > 120) {
      event.showNewIcon = false;
    } else {
      event.showNewIcon = true;
    }

    if (!this.events) {
      this.events = [event];
    } else {
      let index = -1;
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].key === event.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.events[index] = event;
      } else {
        this.events.push(event);
      }
    }
  }

  showGroupOptions() {
  const action = this.actionSheet.create({
    header: 'Create a new ...',
    backdropDismiss: true,
    mode: 'md',
    cssClass: 'GroupAction',
    buttons: [{
      text: 'Post',
      icon: 'chatbubbles',
      handler: () => {
        this.newPost();
      }
    }, {
      text: 'Resource',
      icon: 'document',
      handler: () => {
        this.newResource();
      }
    }, {
      text: 'Poll',
      icon: 'podium',
      handler: () => {
        this.newPoll();
      }
    }, {
      text: 'Event',
      icon: 'calendar',
      cssClass: 'cancelAction',
      handler: () => {
        this.newEvent();
      }
    }]
  }).then(r => r.present());
  }

  submitReactionPost(post, reactionType) {
    switch (reactionType) {
      case 'Thanks': {
        if (!post.showSmiley) {
          this.addPostReaction(post, reactionType);
          post.showSmiley = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showSmiley = false;
          post.totalReactionCount -= 1;
        }
        break;
      }

      case 'Hug': {
        if (!post.showHug) {
          this.addPostReaction(post, reactionType);
          post.showHug = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showHug = false;
          post.totalReactionCount -= 1;
        }
        break;
      }

      case 'Checkin': {
        if (!post.showCheckin) {
          this.addPostReaction(post, reactionType);
          post.showCheckin = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showCheckin = false;
          post.totalReactionCount -= 1;
        }
        break;
      }

      case 'Bookmark': {
        if (!post.showBookmark) {
          this.addPostReaction(post, reactionType);
          post.showBookmark = true;
          post.totalReactionCount += 1;
        } else {
          this.removePostReaction(post, reactionType);
          post.showBookmark = false;
          post.totalReactionCount -= 1;
        }
        break;
      }
    }
  }

  addPostReaction(post, reactionType) {
    // first find the post in the collection
    let postIndex: any;
    let p: any;
    if (post.type === 'general') {
      postIndex = this.posts.findIndex(el => el.key ===  post.key);
      p = this.posts[postIndex];
    } else if (post.type === 'event') {
      postIndex = this.events.findIndex(el => el.key ===  post.key);
      p = this.events[postIndex];
    } else if (post.type === 'poll') {
      postIndex = this.polls.findIndex(el => el.key ===  post.key);
      p = this.polls[postIndex];
    } else if (post.type === 'resource') {
      postIndex = this.resources.findIndex(el => el.key ===  post.key);
      p = this.resources[postIndex];
    }
    const r = p.reactions.find(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());

    if (!r) {
      const react = {
        dateCreated: new Date(),
        addedByUser: {
                      addedByKey: this.dataProvider.getCurrentUserId(),
                      addedByUsername: this.loggedInUser.username,
                      addedByImg: this.loggedInUser.img
                    },
        reactionType: [reactionType]
      };

      this.dataProvider.addPostReactions(post.key, react).then(() => {
        // // Update user notifications.
        // if (!this.userNotifications.some(p => p !== this.postId)) {
        //   this.userNotifications.push(this.postId);
        //   this.dataProvider.getUser(this.loggedInUserId).update({
        //     userNotifications: this.userNotifications
        //   });
        // }

        // // Update user activity.
        // if (!this.userReactions && this.userReactions.some(p => p !== this.postId)) {
        //   this.userReactions.push(this.postId);
        //   this.dataProvider.getUser(this.loggedInUserId).update({
        //     userReactions: this.userReactions
        //   });
        // }
      });
    } else {
      this.firestore.collection('posts').doc(post.key).collection('reactions').doc(r.key).update({
        reactionType: firebase.firestore.FieldValue.arrayUnion(reactionType)
    }).then(() => {
      const increment = firebase.firestore.FieldValue.increment(1);
      this.firestore.collection('posts').doc(post.key).update({
        totalReactionCount : increment
      });
    });
    }
  }

  removePostReaction(post, reactionType) {
    let postIndex: any;
    let p: any;
    if (post.type === 'general') {
      postIndex = this.posts.findIndex(el => el.key ===  post.key);
      p = this.posts[postIndex];
    } else if (post.type === 'event') {
      postIndex = this.events.findIndex(el => el.key ===  post.key);
      p = this.events[postIndex];
    } else if (post.type === 'poll') {
      postIndex = this.polls.findIndex(el => el.key ===  post.key);
      p = this.polls[postIndex];
    } else if (post.type === 'resource') {
      postIndex = this.resources.findIndex(el => el.key ===  post.key);
      p = this.resources[postIndex];
    }

    const found = false;
    if (p.reactions !== undefined) {
      const values = Object.keys(p.reactions).map( function(e) {
        return p.reactions[e];
      });

      const reaction = p.reactions.find(
        el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId());

      if (reaction.reactionType.length === 1 
        && reaction.reactionType.some(e => e === reactionType)) {
        this.dataProvider.removePostReaction(post.key, reaction.key);
      } else {
        // reaction.reactionType = reaction.reactionType.filter(x => x !== reactionType);
        // this.dataProvider.updatePostReactions(post.key, reaction, true);
        this.firestore.collection('posts').doc(post.key).collection('reactions').doc(reaction.key).update({
          reactionType: firebase.firestore.FieldValue.arrayRemove(reactionType)
      }).then(() => {
        const increment = firebase.firestore.FieldValue.increment(-1);
        this.firestore.collection('posts').doc(post.key).update({
          totalReactionCount : increment
        });
      });
      }
    }
  }

  async showReactionsList(post) {
    if (post.totalReactionCount === 0) {
      return;
    }
  // first find the post in the collection
    let postIndex: any;
    let p: any;
    if (post.type === 'general') {
      postIndex = this.posts.findIndex(el => el.key ===  post.key);
      p = this.posts[postIndex];
    } else if (post.type === 'event') {
      postIndex = this.events.findIndex(el => el.key ===  post.key);
      p = this.events[postIndex];
    } else if (post.type === 'poll') {
      postIndex = this.polls.findIndex(el => el.key ===  post.key);
      p = this.polls[postIndex];
    } else if (post.type === 'resource') {
      postIndex = this.resources.findIndex(el => el.key ===  post.key);
      p = this.resources[postIndex];
    }

    const modal = await this.modalCtrl.create({
      component: ReactionListModalPage,
      componentProps: {
        reactions: p.reactions
      }
    });
    return await modal.present();
  }

  showPostOptions(post) {
    const action = this.actionSheet.create({
      header: 'Post options',
      backdropDismiss: true,
      mode: 'md',
      cssClass: 'GroupAction',
      buttons: this.createPostOptionButtons(post)
    }).then(r => r.present());
  }

  followPost(post) {
    if (!this.notifications) {
      this.notifications = [post.key];
    } else {
      this.notifications.push(post.key);
    }

    this.dataProvider.getUser(this.loggedInUserId).update({
      notifications: this.notifications
    }).then(() => {
      this.loadingProvider.showToast('You will be notified when there are new replies');
    });
  }

  unFollowPost(post) {
    const index = this.notifications.indexOf(post.key, 0);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }

    this.dataProvider.getUser(this.loggedInUserId).update({
      notifications: this.notifications
    }).then(() => {
      this.loadingProvider.showToast('You won\'t get notifications for this post');
    });
  }

  reportPost(post) {
    this.dataProvider.addReports(this.loggedInUserId, post).then(() => {
      this.loadingProvider.showToast('Thank you for reporting the post.');
    });
  }

  deletePost(post) {
    this.alertCtrl.create({
      header: 'Delete Post',
      message: 'Are you sure you want to delete this post?',
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Yes',
          handler: data => {
            this.firestore.doc('posts/' + post.key).delete();
          }
        }
      ]
    }).then(r => r.present());
  }

  createPostOptionButtons(post) {
    let buttons = [];
    
    let cancelButton = {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
      }
    };

    let reportButton = {
      text: 'Report Post',
      icon: 'flag-outline',
      handler: () => {
        this.reportPost(post);
      }
      };
    let notificationButton = {};

    if (post.addedByUser.addedByKey === this.loggedInUserId) {
      const deletePostButton = {
        text: 'Delete Post',
        icon: 'trash-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.deletePost(post);
        }
      };
      buttons.push(deletePostButton);
    } else {
      if (this.notifications && this.notifications.some(el => el === post.key)) {
        notificationButton = {
            text: 'Turn Off Notifications',
            icon: 'notifications-off-outline',
            cssClass: 'actionicon',
            handler: () => {
              this.unFollowPost(post);
            }
          };
      } else {
        notificationButton = {
          text: 'Turn On Notifications',
          icon: 'notifications-outline',
          cssClass: 'actionicon',
          handler: () => {
            this.followPost(post);
          }
        };
      }
      buttons.push(notificationButton);
  }
    buttons.push(reportButton);
    buttons.push(cancelButton);
    return buttons;
  }

  loadDataPosts(event) {
    if ( this.posts.length > this.maxNoOfPosts ) {
      event.target.disabled = true;
    } else {
      if (this.lastDataSetPost) {
      this.nextDataSetPost = this.firestore.collection('posts').ref
                          .where('groupId', '==', this.groupId)
                          .where('type', '==', 'general')
                          .orderBy('date', 'desc')
                          .startAfter(this.lastDataSetPost).limit(5);
      this.nextDataSetPost.onSnapshot((po: any) => {
      this.lastDataSetPost = po.docs[po.docs.length - 1];
      if (po.docs.length > 0) {
        this.loadEachPostData(po);
      }
      event.target.complete();
        });
      } else {
        event.target.complete();
      }
    }
  }

  loadDataPolls(event) {
    if ( this.polls.length > this.maxNoOfPolls ) {
      event.target.disabled = true;
    } else {
      if (this.lastDataSetPoll) {
      this.nextDataSetPoll = this.firestore.collection('posts').ref
                          .where('groupId', '==', this.groupId)
                          .where('type', '==', 'poll')
                          .orderBy('date', 'desc')
                          .startAfter(this.lastDataSetPoll).limit(5);
      this.nextDataSetPoll.onSnapshot((po: any) => {
      this.lastDataSetPoll = po.docs[po.docs.length - 1];
      if (po.docs.length > 0) {
        this.loadEachPollData(po);
      }
      event.target.complete();
        });
      } else {
        event.target.complete();
      }
    }
  }

  loadDataEvents(event) {
    if ( this.events.length > this.maxNoOfEvents ) {
      event.target.disabled = true;
    } else {
      if (this.lastDataSetEvent) {
      this.nextDataSetEvent = this.firestore.collection('posts').ref
                          .where('groupId', '==', this.groupId)
                          .where('type', '==', 'event')
                          .orderBy('date', 'desc')
                          .startAfter(this.lastDataSetEvent).limit(5);
      this.nextDataSetEvent.onSnapshot((po: any) => {
      this.lastDataSetEvent = po.docs[po.docs.length - 1];
      if (po.docs.length > 0) {
        this.loadEachEventData(po);
      }
      event.target.complete();
        });
      } else {
        event.target.complete();
      }
    }
  }

  loadDataResources(event) {
    if ( this.events.length > this.maxNoOfResources ) {
      event.target.disabled = true;
    } else {
      if (this.lastDataSetResources) {
      this.nextDataSetResources = this.firestore.collection('posts').ref
                          .where('groupId', '==', this.groupId)
                          .where('type', '==', 'resource')
                          .orderBy('date', 'desc')
                          .startAfter(this.lastDataSetResources).limit(5);
      this.nextDataSetResources.onSnapshot((po: any) => {
      this.lastDataSetResources = po.docs[po.docs.length - 1];
      if (po.docs.length > 0) {
        this.loadEachResourceData(po);
      }
      event.target.complete();
        });
      } else {
        event.target.complete();
      }
    }
  }
}
