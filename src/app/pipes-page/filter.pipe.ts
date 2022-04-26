import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(carList: any, searchStr: string) {
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }
    return carList.filter((car: { brand: string; }) => car.brand.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }


}
