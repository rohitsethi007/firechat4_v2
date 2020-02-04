import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})

export class PollPage implements OnInit {
  private poll: any;
  private pollOptionForm: FormGroup;
  private optionsArray: string[];
  private chartData: number[];
  private selectedOption: any;
  private chartType: any;
  private voted: any;
  private pollClosed: any;
  private comments: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loadingProvider: LoadingService,
    public dataProvider: DataService
  ) {

    this.poll = this.router.getCurrentNavigation().extras.state.poll;
    this.comments = this.poll.comments;
    console.log(this.comments);
    this.pollOptionForm = new FormGroup({
      selected_poll_option: new FormControl('', Validators.compose([
        Validators.required
      ])),
      comments: new FormControl('')
    });

  }

  ngOnInit() {
    let pollOption0Votes;
    let pollOption1Votes;
    let pollOption2Votes;
    let pollOption3Votes;

    let pollOption0Name: string;
    let pollOption1Name: string;
    let pollOption2Name: string;
    let pollOption3Name: string;

    pollOption0Name = this.poll.pollOptions[0].name;
    pollOption1Name = this.poll.pollOptions[1].name;

    if (this.poll.pollOptions[2] != null) {
      pollOption2Name = this.poll.pollOptions[2].name;
    }
    if (this.poll.pollOptions[3] != null) {
      pollOption3Name = this.poll.pollOptions[3].name;
    }

    if (this.poll.pollOptions[0].members == null) {
      pollOption0Votes = 0;
    } else {
      pollOption0Votes = this.poll.pollOptions[0].members.length;
    }

    if (this.poll.pollOptions[1].members == null) {
      pollOption1Votes = 0;
    } else {
      pollOption1Votes = this.poll.pollOptions[1].members.length;
    }

    if (this.poll.pollOptions[2] == null || this.poll.pollOptions[2].members == null) {
      pollOption2Votes = 0;
    } else {
      pollOption2Votes = this.poll.pollOptions[2].members.length;
    }

    if (this.poll.pollOptions[3] == null || this.poll.pollOptions[3].members == null) {
      pollOption3Votes = 0;
    } else {
      pollOption3Votes = this.poll.pollOptions[3].members.length;
    }

    this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
    this.chartData = [pollOption0Votes, pollOption1Votes, pollOption3Votes, pollOption3Votes];


    this.selectedOption = '';
    this.chartType = 'doughnut';

    this.voted = false;

    const today = new Date();
    const de = new Date(this.poll.dateEnding);
    if (de < today) {
      this.pollClosed = true;
    } else {
      this.pollClosed = false;
    }

    this.poll.pollOptions.forEach(pollOption => {
      if (pollOption.members != null) {
        pollOption.members.forEach(member => {
          if (member === this.dataProvider.getCurrentUserId()) {
            this.voted = true;
          }
        });
      }
    });
  }

  vote() {
  // Get user's friends to add to the group.
  this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accountRes: any) => {
    const account = { $key: accountRes.key, ...accountRes.payload.val() };
    console.log('Current User Details: ' + account.username);
    const pollOptionIndex = this.pollOptionForm.value["selected_poll_option"];
    console.log('selected poll option: ' + pollOptionIndex);
    this.loadingProvider.show();
    const members = [];
    members.push(this.dataProvider.getCurrentUserId());
    this.poll.pollOptions[pollOptionIndex].members = members;
    this.voted = true;
    let comment: any;
    let currentUserName: any;
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      if (account.payload.exists()) {
        currentUserName = account.payload.val().username; 

        comment = {
          dateCreated: new Date().toString(),
          addedBy: this.dataProvider.getCurrentUserId(),
          addedByUsername: currentUserName,
          comment: this.pollOptionForm.value["comments"]
        };

        if (this.poll.comments === undefined) {
          let comments = [];
          comments.push(comment);
          this.dataProvider.addFirstPollReview(this.poll.key, comment);
        } else {
          this.dataProvider.updatePollReviews(this.poll.key, comment);
        }
        // Update group data on the database.
        this.dataProvider.updatePollMembers(this.poll.key, pollOptionIndex, members);
        this.ngOnInit();
        this.loadingProvider.hide();
      }});
  });
  }
}
