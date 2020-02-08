import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    public dataService: DataService) {}

canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    const val = this.dataService.getFromStorageAsync('currentUser');
    console.log('val:' + val);
    if (val === null) {
      return false;
    } else {
      return true;
    }
  }
}