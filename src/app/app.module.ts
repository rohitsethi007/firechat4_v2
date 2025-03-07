import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { SharedModule } from './services/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImagemodalPageModule } from './imagemodal/imagemodal.module';
import { TagModalPageModule } from './tag-modal/tag-modal.module';
import { UserProfileModalPageModule } from './user-profile-modal/user-profile-modal.module';
import { PopoverPageModule } from './popover/popover.module';
import { ReviewModalPageModule } from './review-modal/review-modal.module';
import { ReactionListModalPageModule } from './reaction-list-modal/reaction-list-modal.module';
import { Chooser } from '@ionic-native/chooser/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FilterComponent } from './feed/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md',
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImagemodalPageModule,
    ReviewModalPageModule,
    TagModalPageModule,
    PopoverPageModule,
    ReactionListModalPageModule,
    UserProfileModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    Camera,
    MediaCapture,
    File,
    FileTransfer,
    FilePath,
    FileChooser,
    FirebaseX,
    Geolocation,
    ImagePicker,
    Contacts,
    Chooser,
    Keyboard,
    LocalNotifications,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class FileReaderA extends window.FileReader {
	constructor() {
		super();
		const zoneOriginalInstance = (this as any)['__zone_symbol__originalInstance'];
		return zoneOriginalInstance || this;
	}
}

window.FileReader = FileReaderA;
