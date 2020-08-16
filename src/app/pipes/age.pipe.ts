import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {

    let currentYear = new Date().getFullYear();   //2020
    let userYear = new Date(value).getFullYear();
    let age = currentYear - userYear;
    return age;
  }

  // 
  // dd-mm-yyyy

}
