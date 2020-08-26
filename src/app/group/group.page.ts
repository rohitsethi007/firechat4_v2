import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController, ActionSheetController, AlertController, ModalController, PopoverController } from '@ionic/angular';
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
  private searchPoll: any;
  private searchResource: any;
  private searchEvent: any;
  private resourceTags: any = [];
  private resourceTagsString: any;
  private eventTags: any;
  private eventTagsString: any;
  private alert: any;

  private toggled = false;
  private emojitext: string;

  // posts
  private posts: any = [];
  private postsToShow: any; 
  private numberOfPosts = 10;

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
  ) { }

  handleSelection(event) {
    this.emojitext = this.emojitext + ' ' + event.char;
  }

  ngOnInit() {
    this.loadingProvider.show();
    this.tab = 'posts';
    this.title = 'Posts';
    this.searchResource = '';
    this.searchPoll = '';
    this.searchEvent = '';

    // Get user information for system message sent to the group when a member was added.
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user: any) => {
      this.user  = user.payload.data();
  });
    this.getGroupDetailsandPosts();

    this.loadingProvider.hide();
  }

  ionViewDidEnter() {
    // this.getGroupDetailsandMessages();
  }

  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    const that = this;
    // Show loading.
    this.loadingProvider.show();
    setTimeout(function() {
      // Set startIndex to load more messages.
      if (that.startIndex - that.numberOfMessages > -1) {
        that.startIndex -= that.numberOfMessages;
      } else {
        that.startIndex = 0;
      }
      // Refresh our messages list.
      that.messages = null;
      that.messagesToShow = null;
      // Set scroll direction to top.
      that.scrollDirection = 'top';
      // Populate list again.
      that.ionViewDidEnter();
    }, 1000);
  }

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
          console.log('take photo');
          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          console.log('Access gallery');
          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      }, {
        text: 'Video',
        handler: () => {
          console.log('Video');
          this.imageProvider.uploadGroupVideoMessage(this.groupId).then(url => {
            this.sendVideoMessage(url);
          });
        }
      }, {
        text: 'Location',
        handler: () => {
          console.log('Location');
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
                  console.log('canceled');
                }
              }, {
                text: 'Share',
                handler: () => {
                  console.log('share');
                  this.message = locationMessage + '<br>' + mapUrl;
                  this.send('location');
                }
              }]
            }).then(r => r.present());
          }, locationErr => {
            console.log('Location Error' + JSON.stringify(locationErr));
          });
        }
      }, {
        text: 'Contact',
        handler: () => {
          console.log('Share contact');
          this.contacts.pickContact().then(data => {
            console.log(data.displayName);
            console.log(data.phoneNumbers[0].value);
            this.message = '<b>Name:</b> ' + data.displayName + '<br><b>Mobile:</b> <a href=\'tel:' + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';
            this.send('contact');
          }, err => {
            console.log(err);
          });
        }
      }, {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
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
    console.log('onPress', $event);
  }

  onPressUp(event, message) {
    console.log('onPressUp', event);
    console.log(event.center.x);
    console.log(event.center.y);
    this.presentPopover(event, message);
  }

  // MY Methods ************************

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

  /// ********************* POLL Functions ***********************************/

  getGroupDetailsandMessages() {
    // Get group details

    this.groupId = this.route.snapshot.params.id;
    this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group: any) => {
      console.log('group:', group);

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

          console.log(this.messages);
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
              console.log(message);
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
          if (member.key != null) {
            member = { $key: member.key, ...member.payload.data() };
            this.addUpdateOrRemoveMember(member);
          }
        });
      });
    }

        // Get group posts
    this.firestore.collection('/posts/').ref
        .where('groupId', '==', this.groupId)
        .where('type','==', 'general')
        .get().then((po) => {
          this.posts = [];
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
                // Check for Hugs
              let foundHug = false;
              if (post.reactions !== undefined) {
                  foundHug = post.reactions.some(el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId() 
                                              && el.reactionType === 'Hug');
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

  // Check if user exists in the group then add/update user.
  // If the user has already left the group, remove user from the list.
  addUpdateOrRemoveMember(member) {
    console.log(member);
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
        this.firestore.collection('/posts/').ref
        .where('groupId', '==', this.groupId)
        .where('type','==', 'poll')
        .get().then((po) => {
          this.posts = [];
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
          });
  }
  // Open Poll
  viewPoll(poll) {
    this.router.navigateByUrl('poll/' + poll.key);
  }

  // View Resource selected
  viewResource(resource) {
    this.router.navigateByUrl('resource/' + resource.key);
    /*const navigationExtras: NavigationExtras = {
      state: {
        resource: resource
      }
    };
    this.router.navigate(['resource'], navigationExtras); */
  }

  // View Post selected
  viewPost(post) {
    console.log('postID: ' + post.key);
    this.router.navigateByUrl('post/' + post.key);

  }

  // View Resource selected
  viewEvent(event) {
    this.router.navigateByUrl('event/' + event.key);
  }

  newPoll() {
    this.router.navigateByUrl('/new-poll/' + this.groupId);
    // this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
  }

  newPost() {
    this.router.navigateByUrl('/new-post/' + this.groupId);
    // this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
  }

  newResource() {
    this.router.navigateByUrl('/new-resource/' + this.groupId);
    // this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
  }

  newEvent() {
    this.router.navigateByUrl('/new-event/' + this.groupId);
    // this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
  }

  getResources() {
    // Get group posts
    this.firestore.collection('/posts/').ref
    .where('groupId', '==', this.groupId)
    .where('type', '==', 'resource')
    .get().then((po) => {
      this.resources = [];
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
      });
  }

  getEvents() {
        // Get group posts
        this.firestore.collection('/posts/').ref
        .where('groupId', '==', this.groupId)
        .where('type', '==', 'event')
        .get().then((po) => {
          this.events = [];
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
          });
  }

  openResourceFilter() {
    this.openModal();
  }



  openModal() {

    this.modalCtrl.create({
      component: TagModalPage,
      componentProps: { groupTags: this.resourceTags }
    }).then(res => {
      res.present();
    });

    this.modalCtrl.dismiss((data) => {
      this.resourceTagsString = '';
      this.resourceTags = data;
      this.resourceTags.forEach(element => {
        if (element.isChecked == true) {
          this.resourceTagsString = this.resourceTagsString + ', ' + element.val;
        }
      });
      this.resourceTagsString = this.resourceTagsString.replace(', ', '');

    });

  }
  // Add or update group for real-time sync based on our observer.
  addOrUpdatePoll(poll) {
    let totalPollCount = 0;
    poll.pollTagsString = '';
    if (poll.pollTags && poll.pollTags) {

      poll.pollTags.forEach(element => {
        if (element.isChecked == true) {
          poll.pollTagsString = poll.pollTagsString + ', ' + element.val;
        }
      });

      poll.pollTagsString = poll.pollTagsString.replace(', ', '');
    } else {
      poll.pollTagsString = 'No tags found';
    }
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



// Add or update group for real-time sync based on our observer.
addOrUpdateResource(resource) {
  resource.resourceTagsString = '';
  if (resource.resourceTags && resource.resourceTags) {
    resource.resourceTags.forEach(element => {
      if (element.isChecked == true) {
        resource.resourceTagsString = resource.resourceTagsString + ', ' + element.val;
      }
    });

    resource.resourceTagsString = resource.resourceTagsString.replace(', ', '');
  } else {
    resource.resourceTagsString = 'No tags found';

  }

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
  post.postTagsString = '';
  if (post.resourceTags && post.resourceTags) {
    post.resourceTags.forEach(element => {
      if (element.isChecked == true) {
        post.postTagsString = post.resourceTagsString + ', ' + element.val;
      }
    });

    post.postTagsString = post.postTagsString.replace(', ', '');
  } else {
    post.postTagsString = 'No tags found';

  }
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

// Add or update group for real-time sync based on our observer.
addOrUpdateEvent(event) {
  event.eventTagsString = '';
  if (event.eventTags) {
    event.eventTags.forEach(element => {
      if (element.isChecked === true) {
        event.eventTagsString = event.eventTagsString + ', ' + element.val;
      }
    });
    // Remove first comma from the string
    event.eventTagsString = event.eventTagsString.replace(', ', '');
  } else {
    event.eventTagsString = 'No tags found';
  }

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
  this.dataProvider.getCurrentUser().get().subscribe((account: any) => {
    if (account) {
    let reaction = {
      key: '',
      dateCreated: new Date(),
      addedByUser: {
                    addedByKey: this.dataProvider.getCurrentUserId(),
                    addedByUsername: account.data().username,
                    addedByImg: account.data().img
                  },
      reactionType
  };

    if (postIndex >= 0) {
    this.dataProvider.updatePostReactions(post.key, reaction);
  }
}
});
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
    let values = Object.keys(p.reactions).map(function(e) {
      return p.reactions[e];
    });

    const reaction = post.reactions.find(
      el => el.addedByUser.addedByKey === this.dataProvider.getCurrentUserId()
      && el.reactionType === reactionType);

    console.log('reaction.key', reaction);
    this.dataProvider.removePostReaction(post.key, reaction.key);
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

}
