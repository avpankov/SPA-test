import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-r',
  templateUrl: './forms-r.component.html',
  styleUrls: ['./forms-r.component.scss']
})
export class FormsRComponent implements OnInit{

  answers = [{
    type: 'yes',
    text: 'agree'
  }, {
    type: 'no',
    text: 'disagree'
  }]

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', Validators.required),
      country: new FormControl('by'),
      answer: new FormControl('no')
    })
  }

  onSubmit() {
    console.log('Submited!', this);
  }
}
