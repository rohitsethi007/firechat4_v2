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
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

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
  img: any;
  description: any;
  groupTags: any;
  category: any = {text: '', value: ''};
  account: any;
  myForm: FormGroup;
  submitAttempt = false;
  categoriesOption: any;
  categories: any;

  constructor(
    private router: Router,
    public imageProvider: ImageService,
    public dataProvider: DataService,
    public alertCtrl: AlertController,
    public firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    public loadingProvider: LoadingService,
    public camera: Camera,
    private formBuilder: FormBuilder,
    private pickerController: PickerController
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
        ])),
        img: new FormControl('')
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

    this.dataProvider.getCurrentUser().then((u) => {
      u.snapshotChanges().subscribe((accounts: any) => {
        this.account = accounts.payload.data();
        if (!this.groupMembers) {
          this.groupMembers = [this.account];
        } else {
          this.friends = [];
        }
      });
    })

    this.firestore.collection('categories').snapshotChanges().subscribe((catsRes: any) => {
      if (catsRes) {
        this.categoriesOption = [];
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.payload.doc.data();
          category.key = cat.payload.doc.id;
          this.categories.push(category);
          this.categoriesOption.push({text:category.name,value:category.key});
        });
      }
    });
  }

  // Proceed with group creation.
  async done() {
    this.submitAttempt = true;

    if (this.myForm.valid) {
      this.loadingProvider.show();
      let messages = [];
       let userId = await this.afAuth.currentUser.then((u) => { return u.uid});
      // Add system message that group is created.
      messages.push({
        date: new Date().toString(),
        sender: userId,
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
      this.group.categoryId = this.category.value;
      this.group.img = '';

      // Add group to database.
      this.firestore.collection('groups').add(this.group).then((success) => {
        let groupId = success.id;
        this.router.navigateByUrl('/group/' + groupId);
        if(this.account.groups) {
          this.account.groups.push(groupId);
        } else {
          this.account.groups = [groupId];
        }
        this.dataProvider.getCurrentUser().then((u) => {
          u.update({
            groups: this.account.groups
          });
        })
        let cat = this.categories.find(c => c.id = this.category.value);
        console.log('cat', cat, this.categories);
        if (!cat.groups) {
          cat.groups = [groupId];
        } else {
          cat.groups.push(groupId);
        }
        this.firestore.collection('categories').doc(this.category.value).update({
          groups: cat.groups
        });
      });
    }
  }

    async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.category = value.Categories;
          }
        }
      ],
      columns: [{
        name: 'Categories',
        options: this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present();
  }

  getColumnOptions(){
    return this.categoriesOption;
  }
}
