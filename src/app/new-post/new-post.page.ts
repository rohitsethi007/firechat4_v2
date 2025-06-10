import { Component, OnInit, NgZone } from '@angular/core';
import { ActionSheetController, IonicSlides } from '@ionic/angular';
import { UntypedFormGroup, Validators, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { LoadingService } from '../services/loading.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  private postForm: UntypedFormGroup;
  private post: any;
  private postId: any;
  private groupId: any;
  private group: any;
  private title: any;
  private addedByUser: any;
  private user: any;
  private step: any = 1;
  groups: any;
  userNotifications: any = [];
  userPosts: any = [];
  private postMediaImgs: any = [];
  private postMediaVideo: any = [];
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    public imageProvider: ImageService,
    public loadingProvider: LoadingService,
    public actionSheet: ActionSheetController,
    public firestore: AngularFirestore,
    private ngZone: NgZone 
  ) {
    this.postMediaImgs = [];
    this.postMediaVideo = [];
    this.groupId = this.route.snapshot.params.id;
    this.group = {name: ''}
    if (!this.groupId || this.groupId === 'undefined') {
      this.step = 1;
    } else {
      this.step = 2;
    }

    this.postForm = new UntypedFormGroup(
      {
        title: new UntypedFormControl('', Validators.compose([
            Validators.required
          ])),
        message: new UntypedFormControl('', Validators.compose([
          Validators.required
        ]))
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

  ngOnInit() {
    this.dataProvider.getCurrentUser().then((u) => {
      u.snapshotChanges().subscribe((value: any) => {
        this.user = value.payload.data();
        this.addedByUser = {
        addedByKey: value.payload.data().userId,
        addedByUsername: value.payload.data().username
      };
  
        this.userNotifications = value.payload.data().userNotifications;
        this.userPosts = value.payload.data().userPosts;
        this.post = {
            addedByUser: this.addedByUser,
            date: '',
            title: '',
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
              // Process groups in batches to handle large arrays
              const fetchGroups = async () => {
                this.groups = [];
                
                // Firestore has a limit of 10 items in 'in' queries
                const batchSize = 10;
                const groupBatches = [];
                
                // Split the groups array into batches
                for (let i = 0; i < this.user.groups.length; i += batchSize) {
                  groupBatches.push(this.user.groups.slice(i, i + batchSize));
                }
                
                // Process each batch
                for (const batch of groupBatches) {
                  const groupSnapshot = await this.firestore.collection('groups').ref
                    .where(firebase.firestore.FieldPath.documentId(), 'in', batch)
                    .get();
                    
                  groupSnapshot.forEach(g => {
                    let group: any = g.data();
                    group.key = g.id;
                    this.addOrUpdateUserGroup(group);
                  });
                }
              };
              
              fetchGroups();
              }
            } else {
              this.title = 'Create a Post in';
            }
        });
    })
  }

   submitPostForm() {
    this.loadingProvider.show();

    // Add post info and date.
    this.post.date = new Date();
    this.post.title = this.postForm.value.title;
    this.post.data.message = this.postForm.value.message;
    this.post.groupId = this.groupId || '';
    this.post.groupName = this.group?.name || '';
    this.post.type = 'general';
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
      this.loadingProvider.hide();
      this.router.navigateByUrl('/tabs/tab1');
    });

    
   }

   selectGroup(groupId) {
    this.groupId = groupId;
    this.step = 2;
    this.title = 'New Post';

    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
      this.group = group.payload.data();
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
  }

}
