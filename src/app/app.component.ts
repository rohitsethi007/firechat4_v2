import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      try {
        if (this.platform.is('capacitor')) {
          // Use Style.Dark instead of 'dark'
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: '#3880ff' });
        }
      } catch (err) {
        console.warn('Status Bar not available:', err);
      }

      this.platform.backButton.subscribe(() => null);

      this.afAuth.onAuthStateChanged(user => {
        this.router.navigateByUrl('/app/tabs/tab1', { 
          skipLocationChange: true, 
          replaceUrl: true 
        });
      });
    });
  }

  // Example methods for status bar control
  async hideStatusBar() {
    try {
      await StatusBar.hide();
    } catch (err) {
      console.warn('Error hiding status bar:', err);
    }
  }

  async showStatusBar() {
    try {
      await StatusBar.show();
    } catch (err) {
      console.warn('Error showing status bar:', err);
    }
  }

  async setStatusBarColor(color: string) {
    try {
      await StatusBar.setBackgroundColor({ color });
    } catch (err) {
      console.warn('Error setting status bar color:', err);
    }
  }

  // Example method to toggle status bar style
  async toggleStatusBarStyle(isDark: boolean) {
    try {
      await StatusBar.setStyle({ 
        style: isDark ? Style.Dark : Style.Light 
      });
    } catch (err) {
      console.warn('Error setting status bar style:', err);
    }
  }
}
