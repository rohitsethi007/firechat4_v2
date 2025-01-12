import { Component, OnInit, NgZone } from '@angular/core';
import { ActionSheetController, IonSlides } from '@ionic/angular';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';
import { Camera } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  // @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  private postForm: FormGroup;
  private post: any;
  private postId: any;
  private groupId: any;
  private group: any;
  private postTags: any;
  private title: any;
  private addedByUser: any;
  private user: any;
  private step: any = 1;
  groups: any;
  userNotifications: any = [];
  userPosts: any = [];
  private postMediaImgs: any = [];
  private postMediaVideo: any = [];
 
  validations = {
    title: [
      { type: 'minlength', message: 'Title should be atleast 5 characters long' },
      { type: 'maxlength', message: 'Title cannot be more than 20 characters' },
      { type: 'required', message: 'Title is a required field, atleast 5 characters' }
    ],
    message: [
      { type: 'minlength', message: 'Title should be atleast 10 characters long' },
      { type: 'maxlength', message: 'Title cannot be more than 100 characters' },
      { type: 'required', message: 'Message is a required field, atleast 10 characters' }
    ],
    tags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ]
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    public imageProvider: ImageService,
    public loadingProvider: LoadingService,
    public camera: Camera,
    public actionSheet: ActionSheetController,
    public firestore: AngularFirestore,
    private ngZone: NgZone 
  ) {
    this.postMediaImgs = [];
    this.postMediaVideo = [];
    this.postTags = [];
    this.groupId = this.route.snapshot.params.id;
    this.group = {name: ''}
    if (this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }

    this.postForm = new FormGroup(
      {
        title: new FormControl('', Validators.compose([
            // Validators.minLength(5),
            // Validators.maxLength(20),
            Validators.required
          ])),
        message: new FormControl('', Validators.compose([
          // Validators.minLength(10),
          // Validators.maxLength(100),
          Validators.required
        ])),
         tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
    });
   }

  ionViewDidEnter() { }

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

  addTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.postForm.controls.tags as FormArray).push(control);
    });
  }

  ngOnInit() {
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
        this.post = {
            addedByUser: this.addedByUser,
            date: '',
            title: '',
            postTags: [],
            groupId: '',
            groupName: '',
            type: 'general',
            data: {},
            totalReactionCount: 0,
            totalReviewCount: 0,
            postMedia: []
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
              this.title = 'Create a Post in';
  
              this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
                this.group = group.payload.data();
                this.group.groupTags.forEach((element: any) => {
                  this.postTags.push({val: element, isChecked: false});
                });
                this.addTagControls();
              });
            }
        });
    })
  }

   submitPostForm() {
    this.loadingProvider.show();
    console.log('this.group', this.group);
    // Add post info and date.
    this.post.date = new Date();
    this.post.title = this.postForm.value.title;
    this.post.data.message = this.postForm.value.message;
    this.post.postTags = [];
    this.post.postTags = this.postTags;
    this.post.groupId = this.groupId;
    this.post.groupName = this.group.name;

  // Add post to database.
      this.dataProvider.addPost(this.post).then((success) => {
        const postId = success.id;
        this.postId = postId;
        console.log('step 1')
        // Update group data on the database.
        if (this.group.posts === undefined) {
          this.group.posts = [];
        }
        this.group.posts.push(this.postId);
        this.dataProvider.getGroup(this.groupId).update({
          posts: this.group.posts
        });

        // Update user notifications.
        if (!this.userNotifications) {
          this.userNotifications = [this.postId];
        } else {
          this.userNotifications.push(this.postId);
        }
        this.dataProvider.getUser(this.addedByUser.addedByKey).update({
          userNotifications: this.userNotifications
        });

        // Update user activity.
        if (!this.userPosts) {
          this.userPosts = [this.postId];
        } else {
          this.userPosts.push(this.postId);
        }
        this.dataProvider.getUser(this.addedByUser.addedByKey).update({
          userPosts: this.userPosts
        });
    }).then(() => {
      console.log('submit successfull')
      this.loadingProvider.hide();

      this.router.navigateByUrl('/app/tabs/tab1');
    });;

    
   }

   selectGroup(groupId) {
    this.groupId = groupId;
    this.step = 2;
    this.title = 'General';

    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
      this.group = group.payload.data();
      this.group.groupTags.forEach((element: any) => {
        this.postTags.push({val: element, isChecked: false});
      });
      this.addTagControls();

  });

   }

   attach() {
    this.actionSheet.create({
      header: 'Attach images',
     buttons: [{
        text: 'Photo Library',
        icon: 'images-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.imageProvider.getImages().then((url) => {
            this.ngZone.run(() => {
            this.postMediaImgs = [];
            this.postMediaVideo = [];
            url.forEach(element => {
              this.postMediaImgs = this.postMediaImgs.concat(element);              
            });
          });
          });
        }
      },
      {
        text: 'Video',
        icon: 'videocam-outline',
        cssClass: 'actionicon',
        handler: () => {
          this.imageProvider.uploadPostVideo().then(url => {
            this.postMediaVideo = [];
            this.postMediaImgs = [];
            this.ngZone.run(() => {
            this.postMediaVideo = this.postMediaVideo.concat(url);
            console.log(url);
          });
          });
        }
      }
        ,  {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }]
    }).then(r => r.present());
  }

  removeMedia(media) {
    this.postMediaImgs.splice();
    this.postMediaImgs = this.postMediaImgs.filter(x => x !== media);
    console.log('this.postMedia:', this.postMediaImgs);
    // this.imageProvider.deletePostPhoto(media);
  }

}
