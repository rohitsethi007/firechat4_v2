import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  private postForm: FormGroup;
  private post: any;
  private postId: any;
  private groupId: any;
  private group: any;
  private postTags: any;
  private title: any;

  validations = {
    title: [
      { type: 'required', message: 'Title is a required field.' }
    ],
    message: [
      { type: 'required', message: 'Message is a required field.' }
    ],
    postTags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ]
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    public imageProvider: ImageService,
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
        this.postTags = [];
        this.group.groupTags.forEach((element: any) => {
          this.postTags.push({val: element, isChecked: false});
        });
        this.loadingProvider.hide();
    });

    this.postForm = new FormGroup(
      {
        title: new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.maxLength(20),
            Validators.required
          ])),
        message: new FormControl('', Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.required
        ])),
        postTags: new FormControl('')
        });
  }

  ngOnInit() {
    //this.title = 'Post a message in ' + this.group.name;
    console.log("group: " + this.group);
      // Initialize
    this.post = {
      avatar: '',
      date: '',
      sender: this.dataProvider.getCurrentUserId(),
      title: '',
      message: '',
      postTags : [],
      comments: [],
      groupId: ''
    };

    
  }

   // Proceed with group creation.
   submitPostForm() {
    this.loadingProvider.show();

    // Add post info and date.
    this.post.date = new Date().toString();
    this.post.title = this.postForm.value.title;
    this.post.message = this.postForm.value.message;
    this.post.postTags = [];
    this.post.postTags = this.postTags;
    this.post.groupId = this.groupId;

    // Add post to database.
    this.dataProvider.addPost(this.post).then((success) => {
        const postId = success.key;
        // Add system message that group is created.
        // Add group post details
        this.postId = postId;
        if (this.group.posts === undefined) {
          this.group.posts = [];
        }
        this.group.posts.push(this.postId);
        const uid = this.dataProvider.getCurrentUserId();
        // Add system message that the members are added to the group.
        this.group.messages.push({
            date: new Date().toString(),
            sender: uid,
            type: 'system',
            message: 'A new Post has been shared with the group : ' + this.post.title,
            icon: 'md-contacts'
          });

        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          posts: this.group.posts,
          messages: this.group.messages
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.navCtrl.back();
        });
      });

   }

}
