import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {
  constructor(
    private router: Router,
    public dataService: DataService) {}

async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    console.log(route);
    try {
      const val = await this.dataService.getFromStorageAsync('currentUser');
      console.log('val:' + val);
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