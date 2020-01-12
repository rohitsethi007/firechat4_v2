import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { Validator } from 'src/environments/validator';

import { TagModalPage } from '../tag-modal/tag-modal.page';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.page.html',
  styleUrls: ['./new-poll.page.scss'],
})
export class NewPollPage implements OnInit {
  private poll: any;
  private pollForm: FormGroup;
  private groupId : any;
  private alert: any;
  private group : any;
  private pollId : any;
  private pollTags : any;
  private pollTagsString : any;
  private selectedTab : any;

  
  validations = {
    'name': [
      { type: 'required', message: 'Title is required.' },
      { type: 'minlength', message: 'Title must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Title cannot be more than 25 characters long.' }
    ],
    'description': [
      { type: 'required', message: 'Poll Question is required.' },
      { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
    ],
    'pollOption1': [
      { type: 'required', message: 'Poll Question is required.' },
      { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
    ],
    'pollOption2': [
      { type: 'required', message: 'Poll Question is required.' },
      { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
    ]
    };

  constructor(
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.groupId = this.route.snapshot.params.id;
		console.log("Group Id: " + this.groupId);
		    // Get group information
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
      this.group = group.payload.val();
      console.log(this.group);
      this.pollTags = [];
      this.group.groupTags.forEach(element => {
        this.pollTags.push({val: element, isChecked: false});
      });
      this.loadingProvider.hide();
    });
	
   }

  ngOnInit() {
     // Initialize
     this.poll = {
      name: "",
      description: "",
      groupId: this.groupId,
      dateCreated: "",
      pollOptions : [],
    };

    
   this.pollForm = new FormGroup({

    'name': new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.required
    ])),
    'description': new FormControl('', Validators.compose([
      Validators.minLength(10),
      Validators.maxLength(50),
      Validators.required
    ])),
    'pollOption1': new FormControl('', Validators.compose([
      Validators.minLength(1),
      Validators.maxLength(20),
      Validators.required
    ])),
    'pollOption2': new FormControl('', Validators.compose([
      Validators.minLength(1),
      Validators.maxLength(20),
      Validators.required
    ])),
    'pollOption3': new FormControl(''),
    'pollOption4': new FormControl(''),
    'pollTags': new FormControl('')
  });

   
  }


  // Proceed with group creation.
  done() {
    this.loadingProvider.show();
  
      // Add poll info and date.
      this.poll.dateCreated = new Date().toString();
      this.poll.name = this.pollForm.value["name"];
      this.poll.description = this.pollForm.value["description"];
      
      if (this.pollForm.value["pollOption1"] != null 
          && this.pollForm.value["pollOption1"].trim() != "") 
      {    
          this.poll.pollOptions.push({
            name : this.pollForm.value["pollOption1"].trim()});
      }
      if (this.pollForm.value["pollOption2"] != null 
          && this.pollForm.value["pollOption2"].trim() != "") 
      {    
        this.poll.pollOptions.push({
          name : this.pollForm.value["pollOption2"].trim()});
    }
      if (this.pollForm.value["pollOption3"] != null 
          && this.pollForm.value["pollOption3"].trim() != "") 
      {    
        this.poll.pollOptions.push({
          name : this.pollForm.value["pollOption3"].trim()});
    }
      if (this.pollForm.value["pollOption4"] != null 
          && this.pollForm.value["pollOption4"].trim() != "") 
      {    
        this.poll.pollOptions.push({
          name : this.pollForm.value["pollOption4"].trim()});
    }
    this.poll.pollTags = [];
    this.poll.pollTags = this.pollTags; 
      // Add poll to database.
      this.dataProvider.addPoll(this.poll).then((success) => {
        let pollId = success.key;
        // Add system message that group is created.
        // Add group poll details
        this.pollId = pollId;
        this.group.polls.push(this.pollId);
        let uid = this.dataProvider.getCurrentUserId();
        // Add system message that the members are added to the group.
        this.group.messages.push({
            date: new Date().toString(),
            sender: uid,
            type: 'system',
            message: 'A new Poll has been added to the group : ' + this.poll.name,
            icon: 'md-contacts'
          });
    
        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          polls: this.group.polls,
          messages: this.group.messages
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.navCtrl.back();
        });
      });
  
    }

    openModal() {
      this.modalCtrl.create({
        component: TagModalPage,
        componentProps: { groupTags: this.pollTags }
       }).then(res => {
        res.present();
      })
      this.modalCtrl.dismiss((data) => {
        this.pollTagsString = "";
        this.pollTags = data;
        this.pollTags.forEach(element => {
          if (element.isChecked == true) {
            this.pollTagsString = this.pollTagsString + ", " + element.val;
          }
        });
        this.pollTagsString = this.pollTagsString.replace(', ','');
    
      });
  
    }
}
