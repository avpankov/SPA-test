import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {

  userName: string = "";
  userAge: number = 0;
  userSalary: number = 0;

  @Output () onAddUser = new EventEmitter<{name: string, age: number, salary: number}>();

  addUser(){
    this.onAddUser.emit({
      name: this.userName,
      age: this.userAge,
      salary: this.userSalary
    })
  }
}
