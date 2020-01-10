import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pollFilter'
})
@Injectable()
export class PollPipe implements PipeTransform {
  // PollPipe
  // Filter poll by name
  transform(polls: any[], search: string): any {
    if (!polls) {
      return;
    } else if (!search) {
      return polls;
    } else {
      let term = search.toLowerCase();
      return polls.filter(poll => poll.description.toLowerCase().indexOf(term) > -1);
    }
  }
}
