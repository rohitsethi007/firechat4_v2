import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.page.html',
  styleUrls: ['./new-poll.page.scss'],
})
export class NewPollPage implements OnInit {
  private poll: any;
  private pollForm: FormGroup;
  private groupId: any;
  private group: any;
  private pollId: any;
  private postTags: any;
  private addedByUser: any;

  validations = {
    name: [
      { type: 'required', message: 'Title is required.' },
      { type: 'minlength', message: 'Title must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Title cannot be more than 25 characters long.' }
    ],
    description: [
      { type: 'required', message: 'Poll Question is required.' },
      { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
    ],
    pollOption1: [
      { type: 'required', message: 'Poll Question is required.' },
      { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
    ],
    pollOption2: [
      { type: 'required', message: 'Poll Question is required.' },
      { type: 'minlength', message: 'Poll Question must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Poll Question cannot be more than 50 characters long.' }
    ],
    tags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ]
    };

  constructor(
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.groupId = this.route.snapshot.params.id;
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
      this.group = group.payload.data();
      this.postTags = [];
      this.group.groupTags.forEach(element => {
        this.postTags.push({val: element, isChecked: false});
      });
      this.addTagControls();
      this.loadingProvider.hide();
    });
    this.pollForm = new FormGroup({
      description: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.required
      ])),
      pollOption1: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])),
      pollOption2: new FormControl('', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required
      ])),
      pollOption3: new FormControl(''),
      pollOption4: new FormControl(''),
      tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
      });
   }

  ngOnInit() {
     // Initialize

     this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value: any) => {
      this.addedByUser = {
      addedByKey: value.payload.data().userId,
      addedByUsername: value.payload.data().username,
      addedByImg: value.payload.data().img
    };

      this.poll = {
      addedByUser: this.addedByUser,
      date: '',
      title: '',
      postTags: [],
      groupId: '',
      type: 'poll',
      data: {}
    };
  });

  }

  addTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.pollForm.controls.tags as FormArray).push(control);
    });
  }

  submitPollForm() {
    this.loadingProvider.show();

    // Add poll info and date.
    this.poll.groupId = this.groupId;
    this.poll.date = new Date().toString();
    this.poll.title = this.pollForm.value.description;
    this.poll.postTags = [];
    this.poll.postTags = this.postTags;

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth(); // January is 0!
    const yyyy = today.getFullYear();

    const date: Date = new Date(yyyy, mm, dd + 2);
    const dateEnding = date.toString();

    this.poll.data = {
      dateCreated: new Date().toString(),
      dateEnding,
      pollOptions: []
    };


    if (this.pollForm.value.pollOption1 != null
          && this.pollForm.value.pollOption1.trim() !== '') {
          this.poll.data.pollOptions.push({
            name : this.pollForm.value.pollOption1.trim()});
        }
    if (this.pollForm.value.pollOption2 != null
            && this.pollForm.value.pollOption2.trim() !== '') {
            this.poll.data.pollOptions.push({
              name : this.pollForm.value.pollOption2.trim()});
        }
    if (this.pollForm.value.pollOption3 != null
            && this.pollForm.value.pollOption3.trim() !== '') {
            this.poll.data.pollOptions.push({
               name : this.pollForm.value.pollOption3.trim()});
        }
    if (this.pollForm.value.pollOption4 != null
          && this.pollForm.value.pollOption4.trim() !== '') {
        this.poll.data.pollOptions.push({
          name : this.pollForm.value.pollOption4.trim()});
    }


    this.dataProvider.addPost(this.poll).then((success) => {
          const pollId = success.id;
          this.pollId = pollId;
          if (this.group.polls === undefined) {
            this.group.polls = [];
          }
          this.group.polls.push(this.pollId);

          // Update group data on the database.
          this.dataProvider.getGroup(this.groupId).update({
            posts: this.group.posts
          }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.router.navigateByUrl('tabs/tab2');
          });
      });
    }

}
