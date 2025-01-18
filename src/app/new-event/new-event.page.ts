import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
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

interface Event {
  groupId: string;
  groupName: string;
  date: Date;
  time: string;
  title: string;
  location: string;
  videoLink?: string;
  bannerImage?: string;
  createdAt: Date;
}

interface Group {
  name: string;
  posts: string[];
  // other properties
}

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
  userPosts: any = [];
  private postMedia: any = [];
  // In your component class
  bannerImage: string | null = null;
  
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
    public firestore: AngularFirestore,
    public formBuilder: FormBuilder
  ) {
    this.groupId = this.route.snapshot.params.id;

    this.group = {name:''}
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }

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
   
    this.dataProvider.getCurrentUser().then((u) => {
      u.snapshotChanges().subscribe((value: any) => {
        this.user = value.payload.data();
        this.addedByUser = {
        addedByKey: value.payload.data().userId,
        addedByUsername: value.payload.data().username,
        addedByImg: value.payload.data().img
      };
      this.userNotifications = value.payload.data().userNotifications;
      this.userPosts = value.payload.data().userPosts;
      this.eventForm = this.formBuilder.group({
        addedByUser: this.addedByUser,
        title: ['', Validators.required],
        eventDate: ['', Validators.required],
        eventTime: ['', Validators.required],
        location: ['', Validators.required],
        videoLink: [''], // Optional field,
        groupId: '',
        totalReactionCount: 0,
        totalReviewCount: 0,
        groupName: '',
        type: 'event',
      });
      this.event = {
        addedByUser: this.addedByUser,
        date: '',
        title: '',
        postTags: [],
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
          .where(firebase.default.firestore.FieldPath.documentId(), 'in', this.user.groups)
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
          this.title = 'Event';
    
          this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
            this.group = group.payload.data();
          });
        }
      });
    })
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

  async submitEventForm() {
    this.loadingProvider.show();
    console.info('new group id', this.groupId);

    // Add post info and date.
    this.event.date = new Date();
    this.event.title = this.eventForm.value.title;
    this.event.data.eventDate = this.eventForm.value.eventDate;
    this.event.data.eventTime = this.eventForm.value.eventTime;
    this.event.data.location = this.eventForm.value.location;
    this.event.data.videoLink = this.eventForm.value.videoLink;
    this.event.groupId = this.groupId;
    this.event.groupName = this.group.name;


   // Add the poll and get the ID
   const success = await this.dataProvider.addPost(this.event);
   const eventId = success.id;
   this.eventId = eventId;

   // Initialize group if needed
   if (!this.group) {
     this.group = {};
   }

   // Initialize group arrays
   if (!this.group.posts) {
     this.group.posts = [];
   }
   if (!this.group.polls) {
     this.group.polls = [];
   }

   // Initialize user arrays
   this.userNotifications = this.userNotifications || [];
   this.userPosts = this.userPosts || [];

   // Update arrays
   this.group.polls.push(eventId);
   this.userNotifications.push(eventId);
   this.userPosts.push(eventId);

   // Perform updates
   await Promise.all([
     // Update group
     this.dataProvider.getGroup(this.groupId).update({
       posts: this.group.posts,
       polls: this.group.polls
     }),
     // Update user
     this.dataProvider.getUser(this.addedByUser.addedByKey).update({
       userNotifications: this.userNotifications,
       userPosts: this.userPosts
     })
   ]);

      this.router.navigateByUrl('/app/tabs/tab1');
  
}


    selectGroup(groupId) {
      this.groupId = groupId;
      console.log('groupId', groupId);
      this.step = 2;
      this.title = 'New Event';
  
      this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.data();
    });
     }
    uploadBanner() {
      // Implement your image upload logic here
    }
}
