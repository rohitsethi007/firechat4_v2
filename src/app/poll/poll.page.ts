import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})

export class PollPage implements OnInit {
  private title: any;
  private poll: any;
  private pollId: any;
  private pollOptionForm: FormGroup;
  private optionsArray: string[];
  private selectedOption: any;
  private voted: any;
  private pollClosed: any;
  private comments: any;
  private message: any;
  private pollReviews: any;

     // Data
     chartData: ChartDataSets[] = [{ data: [], label: 'Poll Results', backgroundColor: [
      "#f43004",
      "#decf3f",
      "#FFA500",
      "#9b59b6",
    ],
   }];
     chartLabels: Label[];

     // Options
     chartOptions =   {
      legend: {
        display: true
      },
      legendCallback: function(chart) {
        var text = [];
        text.push('<ul class="0-legend">');
        var ds = this.chartData.datasets[0];
        var sum = ds.data.reduce(function add(a, b) {
          return a + b;
        }, 0);
        for (var i = 0; i < ds.data.length; i++) {
          text.push('<li>');
          var perc = Math.round(100 * ds.data[i] / sum);
          // tslint:disable-next-line: max-line-length
          text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + this.chartData.labels[i] + ' (' + ds.data[i] + ') (' + perc + '%)');
          text.push('</li>');
        }
        text.push('</ul>');
        return text.join('');
      }
    };

     chartType = 'pie';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loadingProvider: LoadingService,
    public dataProvider: DataService
  ) {
      this.poll = { pollTags: [], pollOptions: [{name: ''}, {name: ''}, {name: ''}, {name: ''}], addedByUser: {} };
      this.pollOptionForm = new FormGroup({
        selected_poll_option: new FormControl('', Validators.compose([
          Validators.required
        ]))
      });
      this.getPollDetails();
    }

  getPollDetails() {
    this.pollId = this.route.snapshot.params.id;
    this.dataProvider.getPollDetails(this.pollId).snapshotChanges().subscribe((p: any) => {
      if (p.payload.exists()) {
        let poll = p.payload.val();
        poll.key = p.payload.key;
        this.title = p.description;

        let pollOption0Votes;
        let pollOption1Votes;
        let pollOption2Votes;
        let pollOption3Votes;

        let pollOption0Name: string;
        let pollOption1Name: string;
        let pollOption2Name: string;
        let pollOption3Name: string;

        pollOption0Name = poll.pollOptions[0].name;
        pollOption1Name = poll.pollOptions[1].name;

        if (poll.pollOptions[2] != null) {
          pollOption2Name = poll.pollOptions[2].name;
        }
        if (poll.pollOptions[3] != null) {
          pollOption3Name = poll.pollOptions[3].name;
        }

        if (poll.pollOptions[0].members == null) {
          pollOption0Votes = 0;
        } else {
          pollOption0Votes = poll.pollOptions[0].members.length;
        }

        if (poll.pollOptions[1].members == null) {
          pollOption1Votes = 0;
        } else {
          pollOption1Votes = poll.pollOptions[1].members.length;
        }

        if (poll.pollOptions[2] == null || poll.pollOptions[2].members == null) {
          pollOption2Votes = 0;
        } else {
          pollOption2Votes = poll.pollOptions[2].members.length;
        }

        if (poll.pollOptions[3] == null || poll.pollOptions[3].members == null) {
          pollOption3Votes = 0;
        } else {
          pollOption3Votes = poll.pollOptions[3].members.length;
        }

       // this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
       // this.chartData = [pollOption0Votes, pollOption1Votes, pollOption3Votes, pollOption3Votes];
        this.chartLabels = [];
        this.chartData[0].data = [];

        this.chartData[0].data.push(pollOption0Votes);
        this.chartData[0].data.push(pollOption1Votes);
        this.chartLabels.push(pollOption0Name);
        this.chartLabels.push(pollOption1Name);

        if (poll.pollOptions[2] != null) {
          this.chartData[0].data.push(pollOption2Votes);
          this.chartLabels.push(pollOption2Name);
        }
        if (poll.pollOptions[3] != null) {
          this.chartData[0].data.push(pollOption3Votes);
          this.chartLabels.push(pollOption3Name);
        }

        this.selectedOption = '';
        this.voted = false;

        const today = new Date();
        const de = new Date(poll.dateEnding);
        if (de < today) {
          this.pollClosed = true;
        } else {
          this.pollClosed = false;
        }

        poll.pollOptions.forEach(pollOption => {
          if (pollOption.members != null) {
            pollOption.members.forEach(member => {
              if (member === this.dataProvider.getCurrentUserId()) {
                this.voted = true;
              }
            });
          }
        });

        if (poll.reviews !== undefined) {
          this.pollReviews = [];
          let values = Object.keys(poll.reviews).map(function(e) {
            poll.reviews[e].key = e;
            return poll.reviews[e];
           });
          this.pollReviews = values;
          this.pollReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        }

        this.poll = poll;
    }});

  }
  ngOnInit() { }

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
      let currentUserName: any;
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      if (account.payload.exists()) {
        currentUserName = account.payload.val().username;
        // Update group data on the database.
        this.dataProvider.updatePollMembers(this.poll.key, pollOptionIndex, members);
        this.ngOnInit();
        this.loadingProvider.hide();
      }});
  });
  }

  submitReply() {
    let review: any;
    let currentUserName: any;
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      if (account.payload.exists()) {
        currentUserName = account.payload.val().username;

        review = {
          dateCreated: new Date().toString(),
          review: this.message
        };

        if (this.poll.reviews === undefined) {
         this.dataProvider.addFirstPollReview(this.pollId, review);
        } else {
          this.dataProvider.updatePollReviews(this.pollId, review);
        }

        this.message = '';
       }});
  }
}
