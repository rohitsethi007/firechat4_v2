import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {
  constructor(
    private router: Router,
    public dataService: DataService,
    private afAuth: AngularFireAuth,
    private storage: Storage) {}

async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    console.log(route);
    try {
      // First check Firebase auth directly
      const user = await this.afAuth.currentUser;
      if (user) {
        // User is authenticated with Firebase, update storage
        await this.storage.set('currentUser', user.uid);
        return true;
      }
      
      // Fallback to storage check
      const val = await this.dataService.getFromStorageAsync('currentUser');
      if (val === null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error('Auth guard error:', error);
      this.router.navigate(['/login']);
      return false;
    }
  }
}