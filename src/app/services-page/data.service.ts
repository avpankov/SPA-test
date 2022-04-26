import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string[] = ["Redmi Note 7", "Redmo Go", "iPhone 11"];

  constructor(@Optional() private logService: LogService) {}

  getData(): string[] {
    this.logService.write('Getting data')
    return this.data;
  }

  addData(name: string) {
    this.logService.write('Adding data');
    this.data.push(name);
  }
}
