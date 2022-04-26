import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: "./pipes.component.html",
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  searchCar = '';

  cars = [
    {brand: 'Hyundai'},
    {brand: 'Mazda'},
    {brand: 'Nissan'},
    {brand: 'Tesla'},
    {brand: 'Volvo'},
    {brand: 'Honda'},
    {brand: 'Mercedes'},
  ]

}
