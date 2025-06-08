import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'firebaseDate'
})
export class FirebaseDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: any, format: string = 'mediumDate'): string {
    if (!value) return '';
    
    // Convert Firebase Timestamp to JS Date
    let date: Date;
    if (value && typeof value.toDate === 'function') {
      date = value.toDate();
    } else {
      date = value;
    }
    
    return this.datePipe.transform(date, format) || '';
  }
}