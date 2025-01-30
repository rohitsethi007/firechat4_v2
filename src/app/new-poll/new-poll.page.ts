import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-poll', 
  templateUrl: './new-poll.page.html',
  styleUrls: ['./new-poll.page.scss'],
})
export class NewPollPage implements OnInit {
  private poll: any;
  private user: any;
  private title: any;
  private pollForm: FormGroup;
  private groupId: any;
  private group: any;
  private pollId: any;
  // private postTags: any = [];
  private addedByUser: any;
  private step: any = 1;
  groups: any;
  userNotifications: any = [];
  userPosts: any = [];

  constructor(
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    public firestore: AngularFirestore
  ) {
    this.groupId = this.route.snapshot.params.id;

    this.group = {name:''}
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }

    this.pollForm = new FormGroup({
      description: new FormControl('', Validators.compose([
        // Validators.minLength(10),
        // Validators.maxLength(50),
        Validators.required
      ])),
      pollOption1: new FormControl('', Validators.compose([
        // Validators.minLength(1),
        // Validators.maxLength(20),
        Validators.required
      ])),
      pollOption2: new FormControl('', Validators.compose([
        // Validators.minLength(1),
        // Validators.maxLength(20),
        Validators.required
      ])),
      pollOption3: new FormControl(''),
      pollOption4: new FormControl(''),
      // tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
      });
   }

   ionViewDidEnter() {}

  ngOnInit() {
     // Initialize

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
      this.poll = {
        addedByUser: this.addedByUser,
        date: '',
        title: '',
        groupId: '',
        groupName: '',
        type: 'poll',
        data: {},
        totalReactionCount: 0,
        totalReviewCount: 0,
        totalPollCount: 0
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
          this.title = 'New Poll';
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
    async submitPollForm() {
      // Add poll info and date.
      this.poll.groupId = this.groupId;
      this.poll.groupName = this.group.name;
      this.poll.date = new Date();
      this.poll.title = this.pollForm.value.description;

      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth(); // January is 0!
      const yyyy = today.getFullYear();

      const date: Date = new Date(yyyy, mm, dd + 2);
      const dateEnding = date;

      this.poll.data = {
        dateCreated: new Date(),
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
      console.info('this.poll:', this.poll)

          // Add the poll and get the ID
        const success = await this.dataProvider.addPost(this.poll);
        const pollId = success.id;
        this.pollId = pollId;

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
        this.group.polls.push(pollId);
        this.userNotifications.push(pollId);
        this.userPosts.push(pollId);

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
    this.title = 'New Poll';

    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
      this.group = group.payload.data();

  });

    }

}
