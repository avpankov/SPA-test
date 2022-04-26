import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  date = new Date();
  @Input('userData')  user!: { name: string; age: number; salary: number };
}
