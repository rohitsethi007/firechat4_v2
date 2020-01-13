import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController, ActionSheetController, AlertController, ModalController, PopoverController } from '@ionic/angular';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingService } from '../services/loading.service';
import { ImageService } from '../services/image.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import * as firebase from 'firebase';

import { PopoverPage } from '../popover/popover.page';
import { TagModalPage } from '../tag-modal/tag-modal.page';

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
  private tab: any;
  private group: any;
  private user: any;
  private groupMembers: any;
  private loggedInUserIsMember: any = 'false';
  private searchPoll: any;
  private searchResource: any;
  private resourceTags: any;
  private resourceTagsString: any;
  private alert: any;
  // GroupPage
  // This is the page where the user can chat with other group members and view group info.
  constructor(
    public dataProvider: DataService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public angularfire: AngularFireDatabase,
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

  ngOnInit() {
    this.tab = "group";
    this.title = "Group";
    this.searchResource = '';
    this.searchPoll = '';

    // Get user information for system message sent to the group when a member was added.
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((user) => {
      this.user = user.payload.val();
    });

    this.resourceTags = [];
    this.resourceTags.push({ val: "Diet Plan", isChecked: true });
    this.resourceTags.push({ val: "Contact", isChecked: true });
    this.resourceTags.push({ val: "Document", isChecked: true });
    this.resourceTags.push({ val: "Link", isChecked: true });
  }

  ionViewDidEnter() {
    this.getGroupDetailsandMessages();

  }

  // Load previous messages in relation to numberOfMessages.
  loadPreviousMessages() {
    var that = this;
    // Show loading.
    this.loadingProvider.show();
    setTimeout(function () {
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
    if (this.messages)
      this.setMessagesRead(this.messages);
  }

  // Check if currentPage is active, then update user's messagesRead.
  setMessagesRead(messages) {
    // if (this.navCtrl.getActive().instance instanceof GroupPage) {
    // Update user's messagesRead on database.
    this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId).update({
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
    var that = this;
    setTimeout(function () {
      that.content.nativeElement.scrollBottom = that.content.nativeElement.scrollHeight;
    }, 300);
  }

  // Scroll to top of the page after a short delay.
  scrollTop() {
    var that = this;
    setTimeout(function () {
      that.content.nativeElement.scrollTop = that.content.nativeElement.scrollHeight;
    }, 300);
  }

  // Scroll depending on the direction.
  doScroll() {
    if (this.scrollDirection == 'bottom') {
      this.scrollBottom();
    } else if (this.scrollDirection == 'top') {
      this.scrollTop();
    }
  }

  // Check if the user is the sender of the message.
  isSender(message) {
    if (message.sender == firebase.auth().currentUser.uid) {
      return true;
    } else {
      return false;
    }
  }

  // Check if the message is a system message.
  isSystemMessage(message) {
    if (message.type == 'system') {
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
    let messages = JSON.parse(JSON.stringify(this.messages));

    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: type,
      message: this.message
    });

    // Update group messages.
    this.dataProvider.getGroup(this.groupId).update({
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
    let action = this.actionSheet.create({
      header: 'Choose attachments',
      buttons: [{
        text: 'Camera',
        handler: () => {
          console.log("take photo");
          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          console.log("Access gallery");
          this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            // Process image message.
            this.sendPhotoMessage(url);
          });
        }
      }, {
        text: 'Video',
        handler: () => {
          console.log("Video");
          this.imageProvider.uploadGroupVideoMessage(this.groupId).then(url => {
            this.sendVideoMessage(url);
          });
        }
      }, {
        text: 'Location',
        handler: () => {
          console.log("Location");
          this.geolocation.getCurrentPosition({
            timeout: 2000
          }).then(res => {
            let locationMessage = "current location: lat:" + res.coords.latitude + " lng:" + res.coords.longitude;
            let mapUrl = "<a href='https://www.google.com/maps/search/" + res.coords.latitude + "," + res.coords.longitude + "'>View on Map</a>";
            let confirm = this.alertCtrl.create({
              header: 'Your Location',
              message: locationMessage,
              buttons: [{
                text: 'cancel',
                handler: () => {
                  console.log("canceled");
                }
              }, {
                text: 'Share',
                handler: () => {
                  console.log("share");
                  this.message = locationMessage + "<br>" + mapUrl;
                  this.send('location');
                }
              }]
            }).then(r => r.present());
          }, locationErr => {
            console.log("Location Error" + JSON.stringify(locationErr));
          });
        }
      }, {
        text: 'Contact',
        handler: () => {
          console.log("Share contact");
          this.contacts.pickContact().then(data => {
            console.log(data.displayName);
            console.log(data.phoneNumbers[0].value);
            this.message = "<b>Name:</b> " + data.displayName + "<br><b>Mobile:</b> <a href='tel:" + data.phoneNumbers[0].value + "'>" + data.phoneNumbers[0].value + "</a>";
            this.send('contact');
          }, err => {
            console.log(err);
          })
        }
      }, {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log("cancelled");
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
    let messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'image',
      url: url
    });
    this.dataProvider.getGroup(this.groupId).update({
      messages: messages
    });
    this.message = '';
  }

  sendVideoMessage(url) {
    let messages = JSON.parse(JSON.stringify(this.messages));
    messages.push({
      date: new Date().toString(),
      sender: firebase.auth().currentUser.uid,
      type: 'video',
      url: url
    });
    this.dataProvider.getGroup(this.groupId).update({
      messages: messages
    });
    this.message = '';
  }

  // View group info.
  groupInfo() {
    this.router.navigateByUrl('/groupinfo/' + this.groupId);
  }

  // Controller Functions
  onPress($event) {
    console.log("onPress", $event);
  }

  onPressUp(event, message) {
    console.log("onPressUp", event);
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
            this.angularfire.object('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId).update({
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
      componentProps: { message: message, groupId: this.groupId },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  ///********************* POLL Functions ***********************************/

  getGroupDetailsandMessages() {
    // Get group details

    this.groupId = this.route.snapshot.params.id;
    this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group: any) => {
      if (group.payload.exists()) {
        this.group = group.payload.val();
        this.title = group.payload.val().name;

        //Get Group Members
        if (this.group.members) {
          this.group.members.forEach((memberId) => {
            this.dataProvider.getUser(memberId).snapshotChanges().subscribe((member: any) => {
              if (member.key != null) {
                member = { $key: member.key, ...member.payload.val() };
                this.addUpdateOrRemoveMember(member);
              }
            });
          });
        }

        // Get group messages
        this.dataProvider.getGroupMessages(group.key).snapshotChanges().subscribe((messagesRes: any) => {
          let messages = messagesRes.payload.val();
          if (messages == null || messages == undefined) messages = [];

          console.log(this.messages);
          if (this.messages != null && this.messages != undefined) {
            // Just append newly added messages to the bottom of the view.

            if (messages.length > this.messages.length) {
              let message = messages[messages.length - 1];
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user: any) => {
                message.avatar = user.payload.val().img;
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
              console.log(message)
              this.dataProvider.getUser(message.sender).snapshotChanges().subscribe((user: any) => {
                if (user.key != null) {
                  message.avatar = user.payload.val().img;
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
            for (var i = this.startIndex; i < this.messages.length; i++) {
              this.messagesToShow.push(this.messages[i]);
            }
            this.loadingProvider.hide();
          }
        });

        this.dataProvider.getGroupMembers(group.key).snapshotChanges().subscribe((memberIdsRes: any) => {
          const memberIds = memberIdsRes.payload.val();
          if (memberIds.includes(firebase.auth().currentUser.uid)) {
            this.loggedInUserIsMember = true;
          } else {
            this.loggedInUserIsMember = false;
          }

        });
      }
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
    } else if (this.tab === 'polls') {
      this.title = this.group.name; this.getPolls();
    } else if (this.tab === 'resources') {
      this.title = this.group.name; this.getResources();
    } else if (this.tab === 'groupInfo') {
      this.title = this.group.name;
    }
  }

  getPolls() {
    this.subscription = this.dataProvider.getGroupPolls(this.groupId).snapshotChanges().subscribe((pollIdsRes: any) => {
      let pollIds = pollIdsRes.payload.val();
      if (pollIds == null || pollIds === undefined) { pollIds = []; }
      console.log(pollIds);
      if (pollIds.length > 0) {
        pollIds.forEach((pollId) => {
          const pId = pollId;

          console.log(pId);
          if (pId != null && pId !== 'system0000') {
            this.dataProvider.getPollDetails(pId).snapshotChanges().subscribe((pollRes) => {
              const poll = { key: pollRes.key, ...pollRes.payload.val() };
              console.log(poll);
              this.addOrUpdatePoll(poll);


            });
          }
        });
        this.loadingProvider.hide();
      } else {
        this.polls = [];
        this.loadingProvider.hide();
      }
    });
  }
  // Open Group Chat.
  viewPoll(poll) {
    const navigationExtras: NavigationExtras = {
      state: {
        poll: poll
      }
    };
    this.router.navigate(['poll'], navigationExtras);

    // this.router.navigate('/poll/' + poll);
    //    this.app.getRootNav().push(PollPage, { poll: poll });
  }

  newPoll() {
    this.router.navigateByUrl('/new-poll/' + this.groupId);
    //this.app.getRootNav().push(NewPollPage, { groupId: this.groupId });
  }

  newResource() {
    this.router.navigateByUrl('/new-resource/' + this.groupId);
    //this.app.getRootNav().push(NewResourcePage, { groupId: this.groupId });
  }

  getResources() {
    this.dataProvider.getGroupResources(this.groupId).snapshotChanges().subscribe((resourceIdsRes: any) => {
      let resourceIds = resourceIdsRes.payload.val();
      if (resourceIds == null || resourceIds == undefined) resourceIds = [];
      console.log(resourceIds);
      if (resourceIds.length > 0) {
        resourceIds.forEach((resourceId) => {
          var rId = resourceId;

          console.log(rId);
          if (rId != null && rId != "system0000") {
            this.dataProvider.getResourceDetails(rId).snapshotChanges().subscribe((resourceRes: any) => {
              let resource = { key: resourceRes.key, ...resourceRes.payload.val() };
              console.log(resource);
              this.addOrUpdateResource(resource);


            });
          }
        });
        this.loadingProvider.hide();
      } else {
        this.polls = [];
        this.loadingProvider.hide();
      }
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
    })

    this.modalCtrl.dismiss((data) => {
      this.resourceTagsString = "";
      this.resourceTags = data;
      this.resourceTags.forEach(element => {
        if (element.isChecked == true) {
          this.resourceTagsString = this.resourceTagsString + ", " + element.val;
        }
      });
      this.resourceTagsString = this.resourceTagsString.replace(', ', '');

    });

  }
  // Add or update group for real-time sync based on our observer.
  addOrUpdatePoll(poll) {
    poll.pollTagsString = "";
    if (poll.pollTags && poll.pollTags) {

      poll.pollTags.forEach(element => {
        if (element.isChecked == true) {
          poll.pollTagsString = poll.pollTagsString + ", " + element.val;
        }
      });

      poll.pollTagsString = poll.pollTagsString.replace(', ', '');
    }
    else {
      poll.pollTagsString = "No tags found";
    }
    if (!this.polls) {
      this.polls = [poll];
    } else {
      var index = -1;
      for (var i = 0; i < this.polls.length; i++) {
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
    resource.resourceTagsString = "";
    if (resource.resourceTags && resource.resourceTags) {
      resource.resourceTags.forEach(element => {
        if (element.isChecked == true) {
          resource.resourceTagsString = resource.resourceTagsString + ", " + element.val;
        }
      });

      resource.resourceTagsString = resource.resourceTagsString.replace(', ', '');
    }
    else {
      resource.resourceTagsString = "No tags found";

    }
    if (!this.resources) {
      this.resources = [resource];
    } else {
      var index = -1;
      for (var i = 0; i < this.resources.length; i++) {
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


}
