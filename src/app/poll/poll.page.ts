import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoadingService } from '../services/loading.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../services/data.service';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as firebase from 'firebase/app'

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
    public dataProvider: DataService,
    public firestore: AngularFirestore
  ) {
    this.poll = { pollTags: [], data: { pollOptions: [{name: ''}, {name: ''}, {name: ''}, {name: ''}]}, addedByUser: {}, date: firebase.firestore.Timestamp.now() };

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
      if (p) {
        console.log('p:', p);
        let poll = p.payload.data();;
        poll.reactions = [];
        poll.key = p.key;
        this.title = p.payload.data().description;
        let totalReactionCount = 0;
        let totalReviewCount = 0;
        poll.postTags = p.payload.data().postTags.filter(x => x.isChecked !== false);

        let pollOption0Votes;
        let pollOption1Votes;
        let pollOption2Votes;
        let pollOption3Votes;

        let pollOption0Name: string;
        let pollOption1Name: string;
        let pollOption2Name: string;
        let pollOption3Name: string;

        pollOption0Name = poll.data.pollOptions[0].name;
        pollOption1Name = poll.data.pollOptions[1].name;

        if (poll.data.pollOptions[2] != null) {
          pollOption2Name = poll.data.pollOptions[2].name;
        }
        if (poll.data.pollOptions[3] != null) {
          pollOption3Name = poll.data.pollOptions[3].name;
        }

        if (poll.data.pollOptions[0].members == null) {
          pollOption0Votes = 0;
        } else {
          pollOption0Votes = poll.data.pollOptions[0].members.length;
        }

        if (poll.data.pollOptions[1].members == null) {
          pollOption1Votes = 0;
        } else {
          pollOption1Votes = poll.data.pollOptions[1].members.length;
        }

        if (poll.data.pollOptions[2] == null || poll.data.pollOptions[2].members == null) {
          pollOption2Votes = 0;
        } else {
          pollOption2Votes = poll.data.pollOptions[2].members.length;
        }

        if (poll.data.pollOptions[3] == null || poll.data.pollOptions[3].members == null) {
          pollOption3Votes = 0;
        } else {
          pollOption3Votes = poll.data.pollOptions[3].members.length;
        }

       // this.optionsArray = [pollOption0Name, pollOption1Name, pollOption2Name, pollOption3Name];
       // this.chartData = [pollOption0Votes, pollOption1Votes, pollOption3Votes, pollOption3Votes];
        this.chartLabels = [];
        this.chartData[0].data = [];

        this.chartData[0].data.push(pollOption0Votes);
        this.chartData[0].data.push(pollOption1Votes);
        this.chartLabels.push(pollOption0Name);
        this.chartLabels.push(pollOption1Name);

        if (poll.data.pollOptions[2] != null) {
          this.chartData[0].data.push(pollOption2Votes);
          this.chartLabels.push(pollOption2Name);
        }
        if (poll.data.pollOptions[3] != null) {
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

        poll.data.pollOptions.forEach(pollOption => {
          if (pollOption.members != null) {
            pollOption.members.forEach(member => {
              if (member === this.dataProvider.getCurrentUserId()) {
                this.voted = true;
              }
            });
          }
        });

      // get reviews list
      this.firestore.collection('posts').doc(this.pollId).collection('reviews')
      .ref.orderBy("dateCreated", "desc").onSnapshot((reviews: any) => {
        this.poll.reviews = [];
        p.reviews = [];
        reviews.forEach(element => {
          let review = element.data();
          review.key = element.id;
          p.reviews.push(review);
        });
        totalReviewCount = p.reviews.length;
        p.totalReviewCount = totalReviewCount;
        this.pollReviews = p.reviews;
        // if (p.reviews !== undefined) {
        //     this.postReviews = [];
        //     let values = Object.keys(p.reviews).map(function(e) {
        //       p.reviews[e].key = e;
        //       return p.reviews[e];
        //     });
        //     this.postReviews = values;
        //     this.postReviews.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
        //   }

      });

        this.poll = poll;
    }});

  }
  ngOnInit() { }

  vote() {
    const pollOptionIndex = this.pollOptionForm.value["selected_poll_option"];

    const members = [];
    members.push(this.dataProvider.getCurrentUserId());
    this.poll.data.pollOptions[pollOptionIndex].members = members;
    this.voted = true;
    this.dataProvider.updatePollMembers(this.poll.key, this.poll.data);
    this.ngOnInit();
  }

  submitReply() {
    let review: any;
    let currentUserName: any;
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      if (account.payload.exists()) {
        currentUserName = account.payload.data().username;

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
