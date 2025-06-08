import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserImageService } from '../services/user-image.service';

@Pipe({
  name: 'userImage'
})
export class UserImagePipe implements PipeTransform {
  constructor(private userImageService: UserImageService) {}
  
  transform(userId: string): Observable<string> {
    return this.userImageService.getUserImage(userId);
  }
}