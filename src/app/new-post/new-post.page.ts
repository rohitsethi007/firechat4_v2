import { Component, OnInit } from '@angular/core';
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
  private postMedia: any = [];
 
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
    public firestore: AngularFirestore
  ) {
    this.postMedia = [];
    this.postMedia.push("data:image/jpeg;base64,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")
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
    this.post.postTags = [];
    this.post.postTags = this.postTags;
    this.post.groupId = this.groupId;
    this.post.groupName = this.group.name;

    this.imageProvider.uploadPostPhotos(this.postMedia).then((imageUrls) => {
      this.post.postMedia = imageUrls;
      // get specific data for type post
      this.post.data = {
      message: this.postForm.value.message
    };


  // Add post to database.
      this.dataProvider.addPost(this.post).then((success) => {
      const postId = success.id;
      this.postId = postId;

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
      // Back.
      this.loadingProvider.hide();
      this.router.navigateByUrl('tabs/tab1');
    });;

    });
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
      // buttons: [{
      //   text: 'Camera',
      //   handler: () => {
      //     this.imageProvider.uploadPostPhoto(this.camera.PictureSourceType.CAMERA).then((url) => {
      //       this.postMedia.push(url);
      //       console.log(url);
      //     });
      //   }
      // }, {
     buttons: [{
        text: 'Photo Library',
        handler: () => {
          this.imageProvider.getImages().then((url) => {
            this.postMedia = this.postMedia.concat(url);
            console.log(url);
          });
        }
      },
      {
        text: 'Video',
        handler: () => {
          this.imageProvider.uploadPostVideo().then(url => {
            this.postMedia(url);
            console.log(url);
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
    this.postMedia.splice();
    this.postMedia = this.postMedia.filter(x => x !== media);
    console.log('this.postMedia:', this.postMedia);
    // this.imageProvider.deletePostPhoto(media);
  }

}
