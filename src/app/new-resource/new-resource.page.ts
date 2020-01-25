import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { Chooser, ChooserResult } from '@ionic-native/chooser/ngx';



@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.page.html',
  styleUrls: ['./new-resource.page.scss'],
})
export class NewResourcePage implements OnInit {
  private resource: any;
  private contactForm: FormGroup;
  private uploadForm: FormGroup;
  private resourceTags: any;
  private tab: any;
  private groupId: any;
  private message: any;
  private alert: any;
  private group: any;
  private resourceId: any;
  private fileObj: ChooserResult;

  private title: any;

  validations = {
    title: [
      { type: 'required', message: 'Title is a required field.' }
    ],
    name: [
      { type: 'required', message: 'Name is a required field.' }
    ],
    address: [
      { type: 'required', message: 'Address is a required field.' }
    ],
    phones: [
      { type: 'required', message: 'Phone is a required field.' }
    ],
    email: [
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    resourceTags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ]
    };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    public navCtrl: NavController,
    private chooser: Chooser
  ) {
    this.groupId = this.route.snapshot.params.id;
    // this.message  = navParams.get('message');

    console.log('Group Id: ' + this.groupId);
    // Get group information
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.val();
        console.log(this.group);
        this.resourceTags = [];
        this.group.groupTags.forEach(element => {
          this.resourceTags.push({val: element, isChecked: false});
        });

        this.loadingProvider.hide();
    });

  }

  ngOnInit() {

    this.tab = "contact";
    this.title = "Share a Contact";

    // Initialize
    this.resource = {
      dateCreated: '',
      createdBy: this.dataProvider.getCurrentUserId(),
      title: '',
      name: '',
      address: '',
      phones: '',
      email: '',
      type: '',
      resrouceTags : [],
      reviews: []
    };


    this.contactForm = new FormGroup(
    {
      title: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.required
        ])),
      name: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])),
      address: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.required
      ])),
      phones: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      resourceTags: new FormControl('')
      });

    this.uploadForm = new FormGroup(
        {
          title: new FormControl('', Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(20),
              Validators.required
            ])),
          resourceTags: new FormControl('')
          });
  }

  segmentChanged($event) {
    if (this.tab === 'contact') {
      this.title = 'Share a Contact';
    } else if (this.tab === 'upload') {
      this.title = 'Upload Document/Image';
    } else if (this.tab === 'link') {
      this.title = 'Share a link';
    }
  }

   // Proceed with group creation.
   submitContactForm() {
    this.loadingProvider.show();

    // Add resource info and date.
    this.resource.dateCreated = new Date().toString();
    this.resource.title = this.contactForm.value['title'];
    this.resource.name = this.contactForm.value['name'];
    this.resource.address = this.contactForm.value['address'];
    this.resource.phones = this.contactForm.value['phones'];
    this.resource.email = this.contactForm.value['email'];
    this.resource.type = 'contact';
    this.resource.resourceTags = [];
    this.resource.resourceTags = this.resourceTags;


    // Add resource to database.
    this.dataProvider.addResource(this.resource).then((success) => {
        const resourceId = success.key;
        // Add system message that group is created.
        // Add group resource details
        this.resourceId = resourceId;
        this.group.resources.push(this.resourceId);
        const uid = this.dataProvider.getCurrentUserId();
        // Add system message that the members are added to the group.
        this.group.messages.push({
            date: new Date().toString(),
            sender: uid,
            type: 'system',
            message: 'A new Contact has been shared with the group : ' + this.resource.name,
            icon: 'md-contacts'
          });

        // Update group data on the database.
        this.dataProvider.getGroup(this.groupId).update({
          resources: this.group.resources,
          messages: this.group.messages
        }).then(() => {
          // Back.
          this.loadingProvider.hide();
          this.navCtrl.back();
        });
      });

   }

   pickFile() {
     this.chooser.getFile("image/jpeg").then((value) => {
        this.fileObj = value;
     }, (err) => {
       alert(JSON.stringify(err));
     });
   }
}
