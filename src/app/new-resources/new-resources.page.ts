import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { ImageService } from '../services/image.service';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { CheckboxCheckedValidator } from '../validators/checkbox-checked.validator';

@Component({
  selector: 'app-new-resources',
  templateUrl: './new-resources.page.html',
  styleUrls: ['./new-resources.page.scss'],
})
export class NewResourcesPage implements OnInit {
  private resource: any;
  private contactForm: FormGroup;
  private uploadForm: FormGroup;
  private weblinkForm: FormGroup;
  private postTags: any;
  private tab: any;
  private groupId: any;
  private group: any;
  private resourceId: any;
  private metaicon: any = null;
  private metadescription: any;
  private metatitle: any;
  private metasite: any;
  private segment: any;
  require: any;
  private addedByUser: any;


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
    tags: [
      { type: 'required', message: 'Please select at least one tag.' }
    ],
    link: [
      { type: 'pattern', message: 'Please enter a correct weblink.' }
    ]
    };

  constructor(
    private route: ActivatedRoute,
    private dataProvider: DataService,
    private loadingProvider: LoadingService,
    public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private router: Router,
    public camera: Camera,
    public keyboard: Keyboard,
    public actionSheet: ActionSheetController,
    public contacts: Contacts,
    public geolocation: Geolocation,
    public imageProvider: ImageService,
    private http: HttpClient
  ) {
    this.groupId = this.route.snapshot.params.id;
    console.log('constructor', this.groupId);
    this.contactForm = new FormGroup(
      {
        title: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        phones: new FormControl(''),
        email: new FormControl('', Validators.compose([
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
    });

    this.uploadForm = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
    });

    this.weblinkForm = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      link: new FormControl('', Validators.compose([
          Validators.pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
        ])),
        tags: new FormArray([], CheckboxCheckedValidator.tagsSelected(1))
    });
  }

  addContactTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.contactForm.controls.tags as FormArray).push(control);
    });
  }

  addLinkTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.weblinkForm.controls.tags as FormArray).push(control);
    });
  }

  addUploadTagControls() {
    this.postTags.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.uploadForm.controls.tags as FormArray).push(control);
    });
  }

  ngOnInit() { 
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((value: any) => {
      this.addedByUser = {
      addedByKey: value.payload.data().userId,
      addedByUsername: value.payload.data().username,
      addedByImg: value.payload.data().img
    };

    // Initialize
      this.resource = {
      addedByUser: this.addedByUser,
      date: '',
      title: '',
      postTags: [],
      groupId: '',
      type: 'resource',
      data: {name: '', address: '', phones: '', email: '', type: ''},
    };
    });
  }

  ionViewDidEnter() {
    this.tab = 'contact';
    // Get group information
    this.groupId = this.route.snapshot.params.id;
    console.log('this.route.snapshot.params.id', this.route.snapshot.params.id);
    this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe((group) => {
        this.group = group.payload.data();
        this.postTags = [];
        console.log('this.group', group.payload.data());
        this.group.groupTags.forEach((element: any) => {
          this.postTags.push({val: element, isChecked: false});
        });
        this.addContactTagControls();
        this.addLinkTagControls();
        this.addUploadTagControls();
    });
  }

  segmentChanged($event) {
    if (this.tab === 'contact') {
      this.getDummyData();
    } else if (this.tab === 'upload') {
      this.getDummyData();
    } else if (this.tab === 'link') {
      this.getDummyData();
    }
  }

  // This method is required in segmentChanged call else tabs won't load properly
  getDummyData() {
    this.dataProvider.getCurrentUser().snapshotChanges().subscribe((account: any) => {
      console.log(account);
    });
  }

  // Proceed to userInfo page.
  viewUser(userId) {
    this.router.navigateByUrl('/userinfo/' + userId);
  }

  // Proceed with group creation.
  submitContactForm() {
    this.loadingProvider.show();

    // Add resource info and date.
    this.resource.date = new Date().toString();
    this.resource.title = this.contactForm.value.title;
    this.resource.postTags = [];
    this.resource.postTags = this.postTags;
    this.resource.groupId = this.groupId;

    this.resource.data.type = 'contact';
    this.resource.data.name = this.contactForm.value.name;
    this.resource.data.address = this.contactForm.value.address;
    this.resource.data.phones = this.contactForm.value.phones;
    this.resource.data.email = this.contactForm.value.email;

    this.addResourceToDatabase();
   }

   submitLinkForm() {
    this.loadingProvider.show();

    // Add resource info and date.
    this.resource.date = new Date().toString();
    this.resource.title = this.contactForm.value.title;
    this.resource.postTags = [];
    this.resource.postTags = this.postTags;
    this.resource.groupId = this.groupId;

    this.resource.data.type = 'weblink';
    this.resource.data.metaicon = this.metaicon;
    this.resource.data.metasite = this.weblinkForm.value.link;
    this.resource.data.metatitle = this.metatitle;
    this.resource.data.metadescription = this.metadescription;

    this.addResourceToDatabase();
   }

   submitUploadForm() {
    this.addResourceToDatabase();
   }

   linkFocusOut() {
    // this.loadingProvider.show();
    // const getMeta = require('lets-get-meta');
    // this.http.get(
    //   this.weblinkForm.value.link,
    //   {responseType: 'text'}
    //   )
    // .subscribe(res => {
    //   const o = getMeta(res);
    //   this.metaicon = o['og:image'];
    //   this.metadescription = o.description;
    //   this.metatitle = o['og:title'];
    //   this.loadingProvider.hide();
    // });
  }

  upload() {
    // Add resource info and date.
    this.resource.date = new Date().toString();
    this.resource.title = this.contactForm.value.title;
    this.resource.postTags = [];
    this.resource.postTags = this.postTags;
    this.resource.groupId = this.groupId;

    const action = this.actionSheet.create({
      header: 'Choose attachments',
      backdropDismiss: true,
      mode: 'md',
      buttons: [{
        text: 'Camera',
        handler: () => {
          this.imageProvider.uploadGroupPhotoResource(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
            this.resource.data.type = 'upload';
            this.resource.data.url = url;
            this.resource.data.uploadtype = 'image';
          });
        }
      }, {
        text: 'Photo Library',
        handler: () => {
          this.imageProvider.uploadGroupPhotoResource(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
            this.resource.data.type = 'upload';
            this.resource.data.url = url;
            this.resource.data.uploadtype = 'image';
          });
        }
      },
      {
        text: 'Video',
        handler: () => {
          this.imageProvider.uploadGroupVideoResource(this.groupId).then(url => {
            this.resource.data.type = 'upload';
            this.resource.data.uploadtype = 'video';
            this.resource.data.url = url;
          });
        }
      }
        , {
        text: 'Contact',
        handler: () => {
          this.contacts.pickContact().then(data => {
            let name;
            if (data.displayName !== null) { name = data.displayName; } else { name = data.name.givenName + '' + data.name.familyName; }
            this.resource.data.type = 'upload';
            this.resource.data.uploadtype = 'contact';
            this.resource.data.name = name;
            this.resource.data.address = data.addresses;
            this.resource.data.phones = data.phoneNumbers;
            this.resource.data.email = data.emails;
          }, err => {
            console.log(err);
          });
        }
      }, {
        text: 'Location',
        handler: () => {
          this.geolocation.getCurrentPosition({
            timeout: 5000
          }).then(res => {
            const locationMessage = 'Location:<br> lat:' + res.coords.latitude + '<br> lng:' + res.coords.longitude;
            // tslint:disable-next-line: max-line-length
            const url = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';
            const confirm = this.alertCtrl.create({
              header: 'Your Location',
              message: locationMessage,
              buttons: [{
                text: 'cancel',
                handler: () => {
                  console.log('canceled');
                }
              }, {
                text: 'Share',
                handler: () => {
                  this.resource.data.type = 'upload';
                  this.resource.data.url = url;
                  this.resource.data.uploadtype = 'location';
                }
              }]
            }).then(r => r.present());
          }, locationErr => {
            console.log('Location Error' + JSON.stringify(locationErr));
          });
        }
      }, {
        text: 'cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }]
    }).then(r => r.present());
  }


  addResourceToDatabase() {
    // Add resource to database.
    this.dataProvider.addPost(this.resource).then((success) => {
      const postId = success.id;

      this.resourceId = postId;
      if (this.group.posts === undefined) {
        this.group.posts = [];
      }
      this.group.posts.push(this.resourceId);

      // Update group data on the database.
      this.dataProvider.getGroup(this.groupId).update({
        posts: this.group.posts
      }).then(() => {
        this.loadingProvider.hide();
      });
    });

    this.router.navigateByUrl('tabs/tab4');
  }
}
