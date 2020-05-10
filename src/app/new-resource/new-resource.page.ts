import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { EventDataService } from '../services/event-data.service';
import * as urlmetadata from 'url-metadata';

@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.page.html',
  styleUrls: ['./new-resource.page.scss'],
})

export class NewResourcePage implements OnInit {
  private resource: any;
  private contactForm: FormGroup;
  private uploadForm: FormGroup;
  private weblinkForm: FormGroup;
  private resourceTags: any;
  private tab: any;
  private groupId: any;
  private message: any;
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
    private router: Router,
    public dataProvider: DataService,
    public imageProvider: ImageService,
    public loadingProvider: LoadingService,
    public navCtrl: NavController,
    public filePath: FilePath,
    public fileChooser: FileChooser,
    public eventsdata: EventDataService
  ) {
    console.log('inside constructor');
    // Initialize
    this.resource = {
      dateCreated: '',
      createdBy: this.dataProvider.getCurrentUserId(),
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

   // this.uploadForm = new FormGroup(
    //       {
    //         title: new FormControl('', Validators.compose([
    //             Validators.minLength(5),
    //             Validators.maxLength(20),
    //             Validators.required
    //           ])),
    //         resourceTags: new FormControl('')
    //         });

    // this.weblinkForm = new FormGroup(
    //     {
    //       title: new FormControl('', Validators.compose([
    //           Validators.minLength(5),
    //           Validators.maxLength(20),
    //           Validators.required
    //         ])),
    //         link: new FormControl('', Validators.compose([
    //           Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?'),
    //           Validators.required
    //         ])),
    //       resourceTags: new FormControl('')
    //       });

    }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewDidEnter() {
    console.log('inside ionViewDidEnter');
    this.loadingProvider.show();
    this.tab = 'contact';
    this.title = 'Share a Contact';
    this.groupId = this.route.snapshot.params.id;
    // this.message  = navParams.get('message');


    console.log('Group Id: ' + this.groupId);
    // Get group information
    // this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
    //     this.group = group.payload.val();
    //     console.log(this.group);
    //     this.resourceTags = [];
    //     this.group.groupTags.forEach((element: any) => {
    //       this.resourceTags.push({val: element, isChecked: false});
    //     });

    //     // this.eventsdata.getRequestFiles().on('value', snapshot => {
    //     //   let rawList = [];
    //     //   snapshot.forEach(snap => {
    //     //     rawList.unshift({
    //     //       id: snap.key,
    //     //       file: snap.val().file,
    //     //       name: snap.val().name,
    //     //       ext: snap.val().ext,
    //     //     })
    //     //   })
    //     //   this.files = rawList;
    //     //   this.filesnum = rawList.length
    //     // });
    // });
    //this.tab = "contact";
    //this.title = 'Share a Contact';




    this.loadingProvider.hide();
  }
  segmentChanged($event) {
    if (this.tab == 'contact') {
      this.title = 'Share a Contact'; this.getFriends();
    } else if (this.tab == 'upload') {
      this.title = 'Upload a document'; this.getFriendRequests();
    } else if (this.tab == 'link') {
      this.title = 'Share a link';this.findNewFriends();
    }
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
          this.navCtrl.back();
        });
      });
   }


   selectFile() {
    let file: { blob: any; type: string; fileext: any; filename: any; };


    this.fileChooser.open().then((fileuri) => {
      this.filePath.resolveNativePath(fileuri).then((resolveNativePath) => {
        this.returnPath = resolveNativePath;
      });
    });

    this.fileChooser.open().then((uri: any) => {
         this.filePath.resolveNativePath(uri).then((fileentry: any) => {
           const filename = this.eventsdata.getfilename(fileentry);
           const fileext = this.eventsdata.getfileext(fileentry);

           if (fileext === 'pdf') {
              this.eventsdata.makeFileIntoBlob(fileentry, fileext,'application/pdf').then((fileblob: any) => {
                file = {
                   blob : fileblob,
                  type: 'application/pdf',
                  fileext,
                  filename
                };
                this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
          });
           }
           if (fileext === 'docx') {
              // tslint:disable-next-line: max-line-length
              this.eventsdata.makeFileIntoBlob(fileentry, fileext, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document').then((fileblob: any) => {
              file = {
                   blob : fileblob,
                  type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                  fileext,
                  filename
                };
              this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
          });
           }
           if (fileext == 'doc') {
              this.eventsdata.makeFileIntoBlob(fileentry, fileext,'application/msword').then((fileblob: any) => {
                file = {
                   blob : fileblob,
                  type: 'application/msword',
                  fileext,
                  filename
                };
                this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
           }
           if (fileext == 'epub') {
              this.eventsdata.makeFileIntoBlob(fileentry, fileext,'application/octet-stream').then((fileblob: any) => {
             file = {
                   blob : fileblob,
                  type: 'application/octet-stream',
                  fileext,
                  filename
                };
             this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
           }
           if (fileext == 'accdb') {
              this.eventsdata.makeFileIntoBlob(fileentry, filename,'application/msaccess').then((fileblob: any) => {
             file = {
                   blob : fileblob,
                  type: 'application/msaccess',
                  fileext,
                  filename
                };
             this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
           }
           if (fileext == 'xlsx') {
              // tslint:disable-next-line: max-line-length
              this.eventsdata.makeFileIntoBlob(fileentry, filename,'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').then((fileblob: any) => {
             file = {
                   blob : fileblob,
                  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                  fileext,
                  filename
                };
             this.eventsdata.addAssignmentFile(this.sbaid.sbaid, file);
            });
           }

     //      else if (fileext!="doc"||"epub"||"xlsx"||"pdf"||"accdb"||"docx" ){

     // alert("Can't add "+  filename)

     //      }

          });
        });
    }

    gotoFilePage(file: any) {
     // cordova.InAppBrowser.open(file,'_system', 'location=yes');
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

    getFriends() {
      this.loadingProvider.show();
      let friends = [];
      // Get user data on database and get list of friends.
      this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
        console.log(account);
        this.loadingProvider.hide();
        if (account.payload.val() != null && account.payload.val().friends != null) {
          for (var i = 0; i < account.payload.val().friends.length; i++) {
            this.dataProvider.getUser(account.payload.val().friends[i]).snapshotChanges().subscribe((friend) => {
              if (friend.key != null) {
                let friendData = { $key: friend.key, ...friend.payload.val() };
               
              }
            });
          }
        } else {
          friends = [];
        }
  
      });
    }

    getFriendRequests() {
      let friendRequests = [];
      let requestsSent = [];
      let friendRequestCount;
      
      this.loadingProvider.show();
      // Get user info
      this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account) => {
        a = account.payload.val();
        console.log(a);
        // Get friendRequests and requestsSent of the user.
        this.dataProvider.getRequests(a.userId).snapshotChanges().subscribe((requestsRes: any) => {
          // friendRequests.
          let requests = requestsRes.payload.val();
          if (requests != null) {
            if (requests.friendRequests != null && requests.friendRequests != undefined) {
              friendRequests = [];
              friendRequestCount = requests.friendRequests.length;
              requests.friendRequests.forEach((userId) => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe((sender: any) => {
                  sender = { $key: sender.key, ...sender.payload.val() };
                });
              });
            } else {
              friendRequests = [];
            }
            // requestsSent.
            if (requests.requestsSent != null && requests.requestsSent != undefined) {
              requestsSent = [];
              requests.requestsSent.forEach((userId) => {
                this.dataProvider.getUser(userId).snapshotChanges().subscribe((receiver: any) => {
                  receiver = { $key: receiver.key, ...receiver.payload.val() };
                });
              });
            } else {
              requestsSent = [];
            }
          }
          this.loadingProvider.hide();
        });
      });
    }

    findNewFriends() {
      let requestsSent = [];
      let friendRequests = [];
      // Initialize
      this.loadingProvider.show();
      let searchUser = '';
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
  
        accounts = acc.map(c => {
          return { $key: c.key, ...c.payload.val() }
        })
  
  
        this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
          // Add own userId as exludedIds.
          // console.log(account.payload.val());
          let excludedIds = [];
          a = account.payload.val();
          if (excludedIds.indexOf(account.key) == -1) {
            excludedIds.push(account.key);
          }
          // Get friends which will be filtered out from the list using searchFilter pipe pipes/search.ts.
          if (account.payload.val() != null) {
            // console.log(account.payload.val().friends);
            if (account.payload.val().friends != null) {
              account.payload.val().friends.forEach(friend => {
                if (excludedIds.indexOf(friend) == -1) {
                  excludedIds.push(friend);
                }
              });
            }
          }
          // Get requests of the currentUser.
          this.dataProvider.getRequests(account.key).snapshotChanges().subscribe((requests: any) => {
            if (requests.payload.val() != null) {
              requestsSent = requests.payload.val().requestsSent;
              friendRequests = requests.payload.val().friendRequests;
            }
          });
        });
  
      });
    }
}
