import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.scss']
})
export class FormsTdComponent {
  answers = [{
    type: 'yes',
    text: 'agree'
  }, {
    type: 'no',
    text: 'disagree'
  }]

  submitForm(form: NgForm) {
    console.log('Submited!', form);
  }

  defaultCountry = "by"

  defaultAnswer = "no"
}
