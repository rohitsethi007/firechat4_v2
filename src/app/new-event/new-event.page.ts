import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import * as moment from 'moment';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {
  private title: any;
  private event: any;
  private user: any;
  private eventForm: FormGroup;
  private postTags: any = [];
  private groupId: any;
  private group: any;
  private eventId: any;
  private minEventDay: any;
  private minEventMonth: any;
  private minEventYear: any;
  private maxEventYear: any;
  private minDate: any;
  private linkDescription: any;
  require: any;
  private addedByUser: any;
  private step: any = 1;
  groups: any;
  userNotifications: any = [];
  private postMedia: any = [];

  validations = {
    title: [
      { type: 'required', message: 'Title is a required field.' }
    ],
    description: [
      { type: 'required', message: 'Description is a required field.' }
    ],
    eventDate: [
      { type: 'required', message: 'Please select the Event date.' }
    ],
    eventTime: [
      { type: 'required', message: 'Please select the Event time.' }
    ],
    tags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ]
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    public navCtrl: NavController,
    private http: HttpClient,
    public camera: Camera,
    public actionSheet: ActionSheetController,
    public imageProvider: ImageService,
    public firestore: AngularFirestore
  ) {
    this.groupId = this.route.snapshot.params.id;

    this.group = {name:''}
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }

    this.eventForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        eventDate: new FormControl('', Validators.required),
        eventTime: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1)),
        eventAttending: new FormControl(''),
        weblink: new FormControl('')
      });

    // Set min and max event dates
    const dateObj = new Date();
    this.minEventMonth = dateObj.getUTCMonth() + 1;
    this.minEventDay = dateObj.getUTCDate() + 1;
    this.minEventYear = dateObj.getUTCFullYear();
    this.maxEventYear = this.minEventYear + 1;
    this.minDate = new Date().toISOString();
   }

   ionViewDidEnter() {}

   ngOnInit() {
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value: any) => {
      this.user = value.payload.data();
      this.addedByUser = {
      addedByKey: value.payload.data().userId,
      addedByUsername: value.payload.data().username,
      addedByImg: value.payload.data().img
    };

      // Initialize
      this.event = { 
        addedByUser: this.addedByUser,
        date: '',
        title: '',
        postTags : [],
        groupId: '',
        groupName: '',
        type: 'event',
        data: {},
        totalReactionCount: 0,
        totalReviewCount: 0,
        postMedia: []
    };

    
      if (this.step === 1) {
      this.title = 'Select a group ...';
      // Get User Groups List
      if (this.user.groups) {
        this.firestore.collection('groups').ref
        .where(firebase.firestore.FieldPath.documentId(), 'in', this.user.groups)
        .get().then((group: any) => {
          this.groups = [];
          group.forEach(g => {
            let group: any;
            group = g.data();
            group.key = g.id;
            this.addOrUpdateUserGroup(group);
          });
        });
        }
      } else {
        this.title = 'Poll';
  
        this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
          this.group = group.payload.data();
          this.group.groupTags.forEach((element: any) => {
            this.postTags.push({val: element, isChecked: false});
          });
          this.addTagControls();
        });
      }
    });
  }

  addOrUpdateUserGroup(group) {
    if (!this.groups) {
      this.groups = [group];
    } else {
      let index = -1;
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].key == group.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.groups[index] = group;
      } else {
        this.groups.push(group);
      }
    }
  }

  addTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.eventForm.controls.tags as FormArray).push(control);
    });
  }

   submitEventForm() {
    this.loadingProvider.show();

    // Add event info and date.
    this.event.groupId = this.groupId;
    this.event.groupName = this.group.name;
    this.event.date = new Date();
    this.event.title = this.eventForm.value.title;
    this.event.postTags = [];
    this.event.postTags = this.postTags;
    this.event.postMedia = this.postMedia;

    this.event.data = {
      message: this.eventForm.value.description,
      eventDate: this.eventForm.value.eventDate,
      eventTime: moment(this.eventForm.value.eventTime).format('h:mm A'),
      address: this.eventForm.value.address,
      link: this.eventForm.value.weblink
      }


    // Add event to database.
    this.dataProvider.addPost(this.event).then((success) => {
        const eventId = success.id;
        this.eventId = eventId;
        if (this.group.posts  === undefined) {
          this.group.posts = [];
        }
        this.group.posts.push(this.eventId);
        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          posts: this.group.posts
        });
        // Update the Checkin data for this event
        if ( this.eventForm.value.eventAttending === true) {
          const reaction = {
            addedByUser: this.addedByUser,
            dateCreated: new Date(),
            reactionType: 'Checkin'
          };
          this.dataProvider.updatePostReactions(eventId, reaction);
        }

        this.loadingProvider.hide();
        this.router.navigateByUrl('tabs/tab3');
      });

   }

   linkFocusOut() {
    this.loadingProvider.show();
    const getMeta = require('lets-get-meta');
    this.http.get(
      this.eventForm.value.weblink,
      {responseType: 'text'}
      )
    .subscribe(res => {
      const o = getMeta(res);
      this.linkDescription = o.description;
      this.loadingProvider.hide();
    });

    // const o = getMeta("<meta name='page' content='index'><meta property='description' content='This is the index page'>")
    // this.linkDescription = o.description;
    }

    selectGroup(groupId) {
      this.groupId = groupId;
      console.log('groupId', groupId);
      this.step = 2;
      this.title = 'Event';
  
      this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.data();
        this.group.groupTags.forEach((element: any) => {
          this.postTags.push({val: element, isChecked: false});
        });
        this.addTagControls();
    });
     }

     attach() {
      this.actionSheet.create({
        header: 'Attach images',
        buttons: [{
          text: 'Camera',
          handler: () => {
            this.imageProvider.uploadPostPhoto(this.camera.PictureSourceType.CAMERA).then((url) => {
              this.postMedia.push(url);
              console.log(url);
            });
          }
        }, {
          text: 'Photo Library',
          handler: () => {
            this.imageProvider.getImages().then((url) => {
              this.postMedia = this.postMedia.concat(url);
              console.log(url);
            });
          }
        },
        {
          text: 'Video',
          handler: () => {
            this.imageProvider.uploadPostVideo().then(url => {
              this.postMedia(url);
              console.log(url);
            });
          }
        }
          ,  {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancelled');
          }
        }]
      }).then(r => r.present());
    }
  
    removeMedia(media) {
      this.postMedia.splice();
      this.postMedia = this.postMedia.filter(x => x !== media);
      console.log('this.postMedia:', this.postMedia);
      this.imageProvider.deletePostPhoto(media);
    }
}
