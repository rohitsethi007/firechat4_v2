import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';

import * as moment from 'moment';
import * as urlmetadata from 'url-metadata';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {
  private event: any;
  private eventForm: FormGroup;
  private eventTags: any;
  private tab: any;
  private groupId: any;
  private message: any;
  private alert: any;
  private group: any;
  private eventId: any;
  private title: any;
  private minEventDay: any;
  private minEventMonth: any;
  private minEventYear: any;
  private maxEventYear: any;
  private minDate: any;
  private linkDescription: any;


  validations = {
    title: [
      { type: 'required', message: 'Title is a required field.' }
    ],
    description: [
      { type: 'required', message: 'Description is a required field.' }
    ],
    eventTags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ],
    eventDate: [
      { type: 'required', message: 'Please select the Event date.' }
    ],
    eventTime: [
      { type: 'required', message: 'Please select the Event time.' }
    ]
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    public navCtrl: NavController
  ) {
    this.groupId = this.route.snapshot.params.id;
    // this.message  = navParams.get('message');

    console.log('Group Id: ' + this.groupId);
    // Get group information
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.val();
        console.log(this.group);
        this.eventTags = [];
        this.group.groupTags.forEach((element: any) => {
          this.eventTags.push({val: element, isChecked: false});
        });
        this.loadingProvider.hide();
    });
    
      // Set min and max event dates
    let dateObj = new Date();
    this.minEventMonth = dateObj.getUTCMonth() + 1;
    this.minEventDay = dateObj.getUTCDate() + 1;
    this.minEventYear = dateObj.getUTCFullYear();
    this.maxEventYear = this.minEventYear + 1;
    this.minDate = new Date().toISOString();
    console.log(this.minDate + ' ' + this.minEventYear + ' ' + this.minEventMonth + ' ' + this.minEventDay + ' ' + this.maxEventYear);
   }

   ngOnInit() {
    this.title = 'Add an Event';

    // Initialize
    this.event = {
      dateCreated: '',
      createdBy: this.dataProvider.getCurrentUserId(),
      title: '',
      description: '',
      eventDate: '',
      eventTime: '',
      address: '',
      eventTags : [],
      attendees: [],
      reviews: [],
      link: ''
    };

    this.eventForm = new FormGroup(
    {
      title: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.required
        ])),
      description: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.required
      ])),
      eventDate: new FormControl(''),
      eventTime: new FormControl(''),
      address: new FormControl(''),
      eventTags: new FormControl(''),
      eventAttending: new FormControl(''),
      weblink: new FormControl('')
      });
  }

   // Proceed with group creation.
   submitEventForm() {
    this.loadingProvider.show();

    // Add event info and date.
    this.event.dateCreated = new Date().toString();
    this.event.title = this.eventForm.value.title;
    this.event.description = this.eventForm.value.description;
    this.event.eventDate = this.eventForm.value.eventDate;
    this.event.eventTime = moment(this.eventForm.value.eventTime).format('h:mm A');
    console.log('Event Time: ' + moment(this.eventForm.value.eventTime).format('h:mm A'));
    this.event.address = this.eventForm.value.address;
    this.event.eventTags = [];
    this.event.eventTags = this.eventTags;
    this.event.link = this.eventForm.value.weblink;
    if ( this.eventForm.value.eventAttending === true) {
      this.event.attendees = [];
      this.event.attendees.push(this.dataProvider.getCurrentUserId());
    }

    // Add event to database.
    this.dataProvider.addEvent(this.event).then((success) => {
        const eventId = success.key;
        // Add system message that group is created.
        // Add group event details
        this.eventId = eventId;
        if (this.group.events === undefined) {
          this.group.events = [];
        }
        this.group.events.push(this.eventId);
        const uid = this.dataProvider.getCurrentUserId();
        // Add system message that the members are added to the group.
        this.group.messages.push({
            date: new Date().toString(),
            sender: uid,
            type: 'system',
            message: 'A new Event has been shared with the group : ' + this.event.title,
            icon: 'md-contacts'
          });

        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          events: this.group.events,
          messages: this.group.messages
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.navCtrl.back();
        });
      });

   }

   linkFocusOut() {
    const urlMetadata = require('url-metadata');
    urlMetadata('https://cors-anywhere.herokuapp.com/' + this.eventForm.value.weblink).then(
      (metadata)  => { // success handler
        console.log(metadata);
        console.log("attending" + this.eventForm.value.eventAttending);
       // this.metaicon = metadata.image;
        this.linkDescription = metadata.description;
        //this.metatitle = metadata.title;
        }).catch((error) => {
          //this.metaicon = null;
          //this.metadescription = 'The URL seems to be invalid. Please check the url';
        });
  }
}
