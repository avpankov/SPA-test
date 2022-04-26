import { Component, } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

 users: {name: string, age: number, salary: number}[] = [{
   name: 'Artyom',
   age: 27,
   salary: 500
 }, {
   name: 'Vladimir',
   age: 25,
   salary: 700
 }
 ]

 updateUsersList(user: {name: string, age: number, salary: number}) {
  this.users.push(user);
 }
}
