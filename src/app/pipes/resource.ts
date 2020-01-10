import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resourceFilter'
})
@Injectable()
export class ResourcePipe implements PipeTransform {
  // ResourcePipe
  // Filter resource by name
  transform(resources: any[], search: string): any {
    if (!resources) {
      return;
    } else if (!search) {
      return resources;
    } else {
      let term = search.toLowerCase();
      return resources.filter(resource => resource.name.toLowerCase().indexOf(term) > -1);
    }
  }
}
