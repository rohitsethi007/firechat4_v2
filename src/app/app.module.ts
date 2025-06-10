import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ionic imports
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

// Firebase imports 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment.prod';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

// Components and Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './feed/filter.component';
import { SharedModule } from './services/share.module';
import { ImagemodalPageModule } from './imagemodal/imagemodal.module';
import { UserProfileModalPageModule } from './user-profile-modal/user-profile-modal.module';
import { ReactionListModalPageModule } from './reaction-list-modal/reaction-list-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    IonicModule.forRoot({
      mode: 'md',
    }),
    // Firebase imports
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImagemodalPageModule,
    ReactionListModalPageModule,
    UserProfileModalPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()) 
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
