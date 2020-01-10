import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})
export class PollPage implements OnInit {
  private poll : any;
  private options1 : any;
  private options : any;
  private optionsArray : string[];
  private chartData : number[];
  private selectedOption : any;
  private chartType : any;
  private voted : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loadingProvider: LoadingService,
    public dataProvider: DataService
  ) { 
    
    this.poll = this.router.getCurrentNavigation().extras.state.poll;
    //this.poll = this.route.snapshot.params.poll;

  }

  ngOnInit() {
    var pollOption0Votes;
    var pollOption1Votes;
    var pollOption2Votes;
    var pollOption3Votes;
    
    var pollOption0Name : string;
    var pollOption1Name : string;
    var pollOption2Name : string;
    var pollOption3Name : string;

    this.options = {};

    pollOption0Name =  this.poll.pollOptions[0].name;
    pollOption1Name =  this.poll.pollOptions[1].name;
    
    if (this.poll.pollOptions[2] != null)
    {
      pollOption2Name =  this.poll.pollOptions[2].name;
    }
    if (this.poll.pollOptions[3] != null)
    {
      pollOption3Name =  this.poll.pollOptions[3].name;
    }

    if (this.poll.pollOptions[0].members == null) {
      pollOption0Votes = 0;
    }
    else {
      pollOption0Votes =   this.poll.pollOptions[0].members.length;
    }
    
    if (this.poll.pollOptions[1].members == null) {
      pollOption1Votes = 0;
    }
    else {
      pollOption1Votes =   this.poll.pollOptions[1].members.length;
    }

    if (this.poll.pollOptions[2] == null || this.poll.pollOptions[2].members == null) {
      pollOption2Votes = 0;
    }
    else {
      pollOption2Votes =   this.poll.pollOptions[2].members.length;
    }

    if (this.poll.pollOptions[3] == null || this.poll.pollOptions[3].members == null) {
      pollOption3Votes = 0;
    }
    else {
      pollOption3Votes =   this.poll.pollOptions[3].members.length;
    }

    this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
    this.chartData = [pollOption0Votes,pollOption1Votes, pollOption3Votes, pollOption3Votes];

    if(this.poll.pollOptions[2] === 'undefined') {
      // does not exist
    }
    else {
        // does exist
    }
    this.selectedOption = '';
    this.chartType = 'doughnut';

    this.voted = false;
    this.poll.pollOptions.forEach(pollOption => {
      if (pollOption.members != null)
      {
        var member = pollOption.members.forEach(member => {
          if (member ==  firebase.auth().currentUser.uid)
          {
            this.voted = true;
          }
        });
      }
      
      });
  }
  
  selectOption(pollOptionIndex) {
    this.loadingProvider.show();
    var members = [];
    members.push(firebase.auth().currentUser.uid);
    this.poll.pollOptions[pollOptionIndex].members = members;
    this.voted = true;
    // Update group data on the database.
    this.dataProvider.updatePollMembers(this.poll.key, pollOptionIndex, members);

    this.ngOnInit();
    this.loadingProvider.hide();
  }
}
