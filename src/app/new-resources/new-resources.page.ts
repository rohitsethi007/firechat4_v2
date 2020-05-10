import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-new-resources',
  templateUrl: './new-resources.page.html',
  styleUrls: ['./new-resources.page.scss'],
})
export class NewResourcesPage implements OnInit {
  private resource: any;
  private contactForm: FormGroup;
  private uploadForm: FormGroup;
  private weblinkForm: FormGroup;
  private resourceTags: any;
  private tab: any;
  private groupId: any;
  private alert: any;
  private group: any;
  private resourceId: any;
  private cordova: any;
  private files: any;
  private filesnum: any;
  private title: any;
  private sbaid: any;
  private returnPath: any;
  private metaicon: any = null;
  private metadescription: any;
  private metatitle: any;
  private metasite: any;
  private segment: any;

  
  validations = {
    title: [
      { type: 'required', message: 'Title is a required field.' }
    ],
    name: [
      { type: 'required', message: 'Name is a required field.' }
    ],
    address: [
      { type: 'required', message: 'Address is a required field.' }
    ],
    phones: [
      { type: 'required', message: 'Phone is a required field.' }
    ],
    email: [
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    resourceTags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ],
    link: [
      { type: 'pattern', message: 'Please enter a correct weblink.' }
    ]
    };

  constructor(
    private route: ActivatedRoute,
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    public alertCtrl: AlertController,
    public firebaseProvider: FirebaseService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { 
    
    // Initialize
    this.resource = {
      dateCreated: '',
      title: '',
      name: '',
      address: '',
      phones: '',
      email: '',
      type: '',
      resrouceTags : [],
      reviews: []
    };

    this.contactForm = new FormGroup(
      {
        title: new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.maxLength(20),
            Validators.required
          ])),
        name: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.required
        ])),
        address: new FormControl('', Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.required
        ])),
        phones: new FormControl(''),
        email: new FormControl('', Validators.compose([
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        resourceTags: new FormControl('')
    });

    this.uploadForm = new FormGroup(
          {
            title: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(20),
                Validators.required
              ])),
            resourceTags: new FormControl('')
    });

    this.weblinkForm = new FormGroup(
        {
          title: new FormControl('', Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(20),
              Validators.required
            ])),
            link: new FormControl('', Validators.compose([
              Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?'),
              Validators.required
            ])),
          resourceTags: new FormControl('')
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.tab = "contact";
    this.title = "Contact";
    this.groupId = this.route.snapshot.params.id;

    // Get group information
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.val();
        console.log(this.group);
        this.resourceTags = [];
        this.group.groupTags.forEach((element: any) => {
          this.resourceTags.push({val: element, isChecked: false});
        });

        // this.eventsdata.getRequestFiles().on('value', snapshot => {
        //   let rawList = [];
        //   snapshot.forEach(snap => {
        //     rawList.unshift({
        //       id: snap.key,
        //       file: snap.val().file,
        //       name: snap.val().name,
        //       ext: snap.val().ext,
        //     })
        //   })
        //   this.files = rawList;
        //   this.filesnum = rawList.length
        // });
    });



  }

  segmentChanged($event) {
    if (this.tab == 'contact') {
      this.title = "Contact"; this.getFriends();
    }
    else if (this.tab == 'upload') {
      this.title = "Upload"; this.getFriendRequests();
    }
    else if (this.tab == 'link') {
      this.title = "Link"; this.findNewFriends();
    }
  }
  // openFilter() {
  //   this.findNewFriends();
  //   let friendModal = this.modalCtrl.create(FriendsFilterPage);
  //   friendModal.present();
  //   friendModal.onDidDismiss(data => {
  //     console.log(data);
  //     if (data != undefined) {
  //       this.accounts = this.accounts.filter(acc => {
  //         if ((acc.age >= data.ageStart) && (acc.age <= data.ageEnd) && acc.location == data.location)
  //           return true;
  //         return false;
  //       })
  //     }
  //   });

  // }
  getFriends() {
    this.loadingProvider.show();
    this.friends = [];
    // Get user data on database and get list of friends.
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      console.log(account);
      this.loadingProvider.hide();
      if (account.payload.val() != null && account.payload.val().friends != null) {
        for (var i = 0; i < account.payload.val().friends.length; i++) {
          this.dataProvider.getUser(account.payload.val().friends[i]).snapshotChanges().subscribe((friend) => {
            if (friend.key != null) {
              let friendData = { $key: friend.key, ...friend.payload.val() };
              this.addOrUpdateFriend(friendData);
            }
          });
        }
      } else {
        this.friends = [];
      }

    });
  }

  // Add or update friend data for real-time sync.
  addOrUpdateFriend(friend) {
    console.log(friend)
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].$key == friend.$key) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
    console.log(this.friends);
  }

  // Proceed to userInfo page.
  viewUser(userId) {
    console.log(userId);
    this.router.navigateByUrl('/userinfo/' + userId);
  }

  // Proceed to chat page.
  message(userId) {
    this.router.navigateByUrl('/message/' + userId);
  }


  // Manageing Friend Requests

  getFriendRequests() {
    this.friendRequests = [];
    this.requestsSent = [];

    this.loadingProvider.show();
    // Get user info
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
      this.account = account.payload.val();
      console.log(this.account);
      // Get friendRequests and requestsSent of the user.
      this.dataProvider.getRequests(this.account.userId).snapshotChanges().subscribe((requestsRes: any) => {
        // friendRequests.
        let requests = requestsRes.payload.val();
        if (requests != null) {
          if (requests.friendRequests != null && requests.friendRequests != undefined) {
            this.friendRequests = [];
            this.friendRequestCount = requests.friendRequests.length;
            requests.friendRequests.forEach((userId) => {
              this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender: any) => {
                sender = { $key: sender.key, ...sender.payload.val() };
                this.addOrUpdateFriendRequest(sender);
              });
            });
          } else {
            this.friendRequests = [];
          }
          // requestsSent.
          if (requests.requestsSent != null && requests.requestsSent != undefined) {
            this.requestsSent = [];
            requests.requestsSent.forEach((userId) => {
              this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver: any) => {
                receiver = { $key: receiver.key, ...receiver.payload.val() };
                this.addOrUpdateRequestSent(receiver);
              });
            });
          } else {
            this.requestsSent = [];
          }
        }
        this.loadingProvider.hide();
      });
    });
  }



  // Add or update friend request only if not yet friends.
  addOrUpdateFriendRequest(sender) {
    if (!this.friendRequests) {
      this.friendRequests = [sender];
    } else {
      var index = -1;
      for (var i = 0; i < this.friendRequests.length; i++) {
        if (this.friendRequests[i].$key == sender.$key) {
          index = i;
        }
      }
      if (index > -1) {
        if (!this.isFriends(sender.$key))
          this.friendRequests[index] = sender;
      } else {
        if (!this.isFriends(sender.$key))
          this.friendRequests.push(sender);
      }
    }
  }

  // Add or update requests sent only if the user is not yet a friend.
  addOrUpdateRequestSent(receiver) {
    if (!this.requestsSent) {
      this.requestsSent = [receiver];
    } else {
      var index = -1;
      for (var j = 0; j < this.requestsSent.length; j++) {
        if (this.requestsSent[j].$key == receiver.$key) {
          index = j;
        }
      }
      if (index > -1) {
        if (!this.isFriends(receiver.$key))
          this.requestsSent[index] = receiver;
      } else {
        if (!this.isFriends(receiver.$key))
          this.requestsSent.push(receiver);
      }
    }
  }


  findNewFriends() {
    this.requestsSent = [];
    this.friendRequests = [];
    // Initialize
    this.loadingProvider.show();
    this.searchUser = '';
    // Get all users.
    this.dataProvider.getUsers().snapshotChanges().subscribe((accounts: any) => {
      this.loadingProvider.hide();

      // applying Filters

      let acc = accounts.filter((c) => {
        if (c.key == null && c.key == undefined && c.payload.val() == null) return false;
        if (c.payload.val().name == '' || c.payload.val().name == ' ' || c.payload.val().name == undefined) return false;
        if (c.payload.val().publicVisibility == false) return false;
        return true;
      });

      this.accounts = acc.map(c => {
        return { $key: c.key, ...c.payload.val() }
      })


      this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
        // Add own userId as exludedIds.
        // console.log(account.payload.val());
        this.excludedIds = [];
        this.account = account.payload.val();
        if (this.excludedIds.indexOf(account.key) == -1) {
          this.excludedIds.push(account.key);
        }
        // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
        if (account.payload.val() != null) {
          // console.log(account.payload.val().friends);
          if (account.payload.val().friends != null) {
            account.payload.val().friends.forEach(friend => {
              if (this.excludedIds.indexOf(friend) == -1) {
                this.excludedIds.push(friend);
              }
            });
          }
        }
        // Get requests of the currentUser.
        this.dataProvider.getRequests(account.key).snapshotChanges().subscribe((requests: any) => {
          if (requests.payload.val() != null) {
            this.requestsSent = requests.payload.val().requestsSent;
            this.friendRequests = requests.payload.val().friendRequests;
          }
        });
      });

    });
  }

  // Send friend request.
  sendFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      header: 'Send Friend Request',
      message: 'Do you want to send friend request to <b>' + user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Send',
          handler: () => {
            this.firebaseProvider.sendFriendRequest(user.$key);
          }
        }
      ]
    }).then(r => r.present());
  }

  // Accept Friend Request.
  acceptFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      header: 'Confirm Friend Request',
      message: 'Do you want to accept <b>' + user.name + '</b> as your friend?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Reject Request',
          handler: () => {
            this.firebaseProvider.deleteFriendRequest(user.$key);
            this.getFriendRequests();
          }
        },
        {
          text: 'Accept Request',
          handler: () => {
            this.firebaseProvider.acceptFriendRequest(user.$key);
            this.getFriendRequests();
          }
        }
      ]
    }).then(r => r.present());
  }

  // Cancel Friend Request sent.
  cancelFriendRequest(user) {
    this.alert = this.alertCtrl.create({
      header: 'Friend Request Pending',
      message: 'Do you want to delete your friend request to <b>' + user.name + '</b>?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Delete',
          handler: () => {
            this.firebaseProvider.cancelFriendRequest(user.$key);
            this.getFriendRequests();
          }
        }
      ]
    }).then(r => r.present());
  }

  // Checks if user is already friends with this user.
  isFriends(userId) {
    if (this.account.friends) {
      if (this.account.friends.indexOf(userId) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  // Get the status of the user in relation to the logged in user.
  getStatus(user) {
    // Returns:
    // 0 when user can be requested as friend.
    // 1 when a friend request was already sent to this user.
    // 2 when this user has a pending friend request.
    if (this.requestsSent) {
      for (var i = 0; i < this.requestsSent.length; i++) {
        if (this.requestsSent[i] == user.$key) {
          return 1;
        }
      }
    }
    if (this.friendRequests) {
      for (var j = 0; j < this.friendRequests.length; j++) {
        if (this.friendRequests[j] == user.$key) {
          return 2;
        }
      }
    }
    return 0;
  }
  
   // Proceed with group creation.
   submitContactForm() {
    this.loadingProvider.show();

    // Add resource info and date.
    this.resource.dateCreated = new Date().toString();
    this.resource.title = this.contactForm.value.title;
    this.resource.name = this.contactForm.value.name;
    this.resource.address = this.contactForm.value.address;
    this.resource.phones = this.contactForm.value.phones;
    this.resource.email = this.contactForm.value.email;
    this.resource.type = 'contact';
    this.resource.resourceTags = [];
    this.resource.resourceTags = this.resourceTags;



    // Add resource to database.
    this.dataProvider.addResource(this.resource).then((success) => {
        const resourceId = success.key;
        // Add system message that group is created.
        // Add group resource details
        this.resourceId = resourceId;
        if (this.group.resources === undefined) {
          this.group.resources = [];
        }
        this.group.resources.push(this.resourceId);
        const uid = this.dataProvider.getCurrentUserId();
        // Add system message that the members are added to the group.
        this.group.messages.push({
            date: new Date().toString(),
            sender: uid,
            type: 'system',
            message: 'A new Contact has been shared with the group : ' + this.resource.name,
            icon: 'md-contacts'
          });

        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          resources: this.group.resources,
          messages: this.group.messages
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.navCtrl.back();
        });
      });

   }

   submitLinkForm() {
    this.loadingProvider.show();

    // Add resource info and date.
    this.resource.dateCreated = new Date().toString();
    this.resource.title = this.weblinkForm.value.title;
    this.resource.metaicon = this.metaicon;
    this.resource.metasite = this.weblinkForm.value.link;
    this.resource.metatitle = this.metatitle;
    this.resource.metadescription = this.metadescription;
    this.resource.type = 'weblink';

    this.resource.resourceTags = [];
    this.resource.resourceTags = this.resourceTags;


    // Add resource to database.
    this.dataProvider.addResource(this.resource).then((success) => {
        const resourceId = success.key;
        // Add system message that group is created.
        // Add group resource details
        this.resourceId = resourceId;
        if (this.group.resources === undefined) {
          this.group.resources = [];
        }
        this.group.resources.push(this.resourceId);
        const uid = this.dataProvider.getCurrentUserId();
        // Add system message that the members are added to the group.
        this.group.messages.push({
            date: new Date().toString(),
            sender: uid,
            type: 'system',
            message: 'A new Contact has been shared with the group : ' + this.resource.name,
            icon: 'md-contacts'
          });

        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          resources: this.group.resources,
          messages: this.group.messages
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
        });
      });
   }

   
   linkFocusOut() {
    const urlMetadata = require('url-metadata');
    urlMetadata('https://cors-anywhere.herokuapp.com/' + this.weblinkForm.value.link).then(
      (metadata)  => { // success handler
        console.log(metadata);
        this.metaicon = metadata.image;
        this.metadescription = metadata.description;
        this.metatitle = metadata.title;
        }).catch((error) => {
          this.metaicon = null;
          this.metadescription = 'The URL seems to be invalid. Please check the url';
        });
  }
}
