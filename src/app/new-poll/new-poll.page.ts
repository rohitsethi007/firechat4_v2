import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
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
	
    // Create our groupForm based on Validator.ts
    this.pollForm = formBuilder.group({
      name: Validator.pollNameValidator,
      description: Validator.pollDescriptionValidator,
      pollOption1: Validator.pollOption1Validator,
      pollOption2: Validator.pollOption2Validator,
      pollOption3: null,
      pollOption4: null
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
        let uid = this.dataProvider.getCurrentUserId;
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
