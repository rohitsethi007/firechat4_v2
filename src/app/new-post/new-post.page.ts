import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';
import { Camera } from '@ionic-native/camera/ngx';

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
  private addedByUser: any;
  private step: any = 1;
  groups: any;
  userNotifications: any = [];
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
  ) {
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

  ionViewDidEnter() {
    if (this.step === 1) {
    this.title = 'Select a group ...';
    this.dataProvider.getGroups().snapshotChanges().subscribe((data: any) => {

    this.groups = data.map(c => {
          return { $key: c.payload.doc.id, ...c.payload.doc.data() };
        });
      });
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
  }

  addTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.postForm.controls.tags as FormArray).push(control);
    });
  }

  ngOnInit() {
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value: any) => {
      this.addedByUser = {
      addedByKey: value.payload.data().userId,
      addedByUsername: value.payload.data().username,
      addedByImg: value.payload.data().img
    };

      this.userNotifications = value.payload.data().notifications;

      this.post = {
          addedByUser: this.addedByUser,
          date: '',
          title: '',
          postTags : [],
          groupId: '',
          groupName: '',
          type: 'general',
          data: {},
          totalReactionCount: 0,
          totalReviewCount: 0
        };
      });
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

    // get specific data for type post
    this.post.data = {
        message: this.postForm.value.message
      };


    // Add post to database.
    this.dataProvider.addPost(this.post).then((success) => {
        const postId = success.id;
        this.postId = postId;
        if (this.group.posts === undefined) {
          this.group.posts = [];
        }
        this.group.posts.push(this.postId);

        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          posts: this.group.posts
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.router.navigateByUrl('tabs/tab1');
        });

        if (!this.userNotifications) {
          this.userNotifications = [this.postId];
        } else {
          this.userNotifications.push(this.postId);
        }
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
      buttons: [{
        text: 'Camera',
        handler: () => {
          this.imageProvider.uploadPostPhoto(this.camera.PictureSourceType.CAMERA).then((url) => {
            this.postMedia.push(url);
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          this.imageProvider.uploadPostPhoto(this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            this.postMedia.push(url);
          });
        }
      },
      {
        text: 'Video',
        handler: () => {
          this.imageProvider.uploadPostVideo().then(url => {
            this.postMedia(url);
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
    this.dataProvider.deletePostPhoto(this.postId, media);
  }

}
