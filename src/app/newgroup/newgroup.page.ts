import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Validator } from 'src/environments/validator';

@Component({
  selector: 'app-newgroup',
  templateUrl: './newgroup.page.html',
  styleUrls: ['./newgroup.page.scss'],
})
export class NewgroupPage implements OnInit {

  group: any;
  groupForm: FormGroup;
  friends: any;
  searchFriend: any;
  groupMembers: any;
  alert: any;
  name: any;
  description: any;
  groupTags: any;
  account: any;

  myForm: FormGroup;
  submitAttempt = false;

  errorMessages = {
    groupName: [
      { type: 'required', message: 'Name is a required field.' }
    ],
    groupDescription: [
      { type: 'required', message: 'Description is a required field.' }
    ],
    groupTags: [
      { type: 'required', message: 'GroupTags is a required field.' }
    ]
    };

  constructor(
    private router: Router,
    public imageProvider: ImageService,
    public dataProvider: DataService,
    public alertCtrl: AlertController,
    public firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    public loadingProvider: LoadingService,
    public camera: Camera,
    private formBuilder: FormBuilder
  ) {
    this.myForm = new FormGroup(
      {
        groupName: new FormControl('', Validators.compose([
          Validators.required
        ])),
        groupDescription: new FormControl('', Validators.compose([
          Validators.required
        ])),
        groupTags: new FormControl('', Validators.compose([
          Validators.required
        ]))
      });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Initialize
    this.group = {
      img: './assets/images/default-group.png',
      dateCreated: new Date().toString(),
      messages: [],
      members: [],
      name: '',
      description: '',
      groupTags: []
    };
    this.searchFriend = '';

    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((accounts: any) => {
      this.account = accounts.payload.data();
      if (!this.groupMembers) {
        this.groupMembers = [this.account];
      } else {
        this.friends = [];
      }
    });
  }

  // Proceed with group creation.
  done() {
    this.submitAttempt = true;

    if (this.myForm.valid) {
      this.loadingProvider.show();
      let messages = [];
      // Add system message that group is created.
      messages.push({
        date: new Date().toString(),
        sender: this.afAuth.auth.currentUser.uid,
        type: 'system',
        message: 'This group has been created.',
        icon: 'md-chatbubbles'
      });

      // Add members of the group.
      let members = [];
      for (let i = 0; i < this.groupMembers.length; i++) {
        members.push(this.groupMembers[i].userId);
      }
      // Add group info and date.
      this.group.dateCreated = new Date().toString();
      this.group.messages = messages;
      this.group.members = members;
      this.group.name = this.name;
      this.group.description = this.description;
      this.group.groupTags = this.groupTags.split('\n');

      // Add group to database.

      this.firestore.collection('groups').add(this.group).then((success) => {
        let groupId = success.id;
        this.router.navigateByUrl('/group/' + groupId);
        this.account.groups.push(groupId);
        this.dataProvider.getCurrentUser().update({
          groups: this.account.groups
        });
      });
    }
  }

  // Set group photo.
  setGroupPhoto() {
    this.alert = this.alertCtrl.create({
      header: 'Set Group Photo',
      message: 'Do you want to take a photo or choose from your photo gallery?',
      buttons: [
        {
          text: 'Cancel',
          handler: data => { }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.imageProvider.setGroupPhoto(this.group, this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.imageProvider.setGroupPhoto(this.group, this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    }).then(r => r.present());
  }
}
