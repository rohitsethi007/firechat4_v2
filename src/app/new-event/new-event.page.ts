import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {
  private event: any;
  private eventForm: FormGroup;
  private postTags: any;
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
    private http: HttpClient
  ) {
    this.groupId = this.route.snapshot.params.id;

    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.data();
        this.postTags = [];
        this.group.groupTags.forEach((element: any) => {
          this.postTags.push({val: element, isChecked: false});
        });
        this.addTagControls();
        this.loadingProvider.hide();
    });

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

   ngOnInit() {
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value: any) => {
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
        type: 'event',
        data: {},
    };
    });

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
    this.event.date = new Date().toString();
    this.event.title = this.eventForm.value.title;
    this.event.postTags = [];
    this.event.postTags = this.postTags;

    this.event.data = {
      message: this.eventForm.value.description,
      eventDate: this.eventForm.value.eventDate,
      eventTime: moment(this.eventForm.value.eventTime).format('h:mm A'),
      address: this.eventForm.value.address,
      link: this.eventForm.value.weblink
      }


    // Add event to database.
    console.log('this.event:', this.event);
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
            dateCreated: new Date().toString(),
            reactionType: 'Checkin'
          };
          this.dataProvider.addFirstPostReactions(eventId, reaction);
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
    }
}