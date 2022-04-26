import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [DataService]
})
export class ServicesComponent implements OnInit{
  items: string[] = [];
  name: string = '';

  constructor(private dataService: DataService){}

  addItem(name: string) {
    this.dataService.addData(name);
  }

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

}
