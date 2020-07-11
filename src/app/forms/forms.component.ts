import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  employeeModel:any;
  constructor() { }


  ngOnInit() {
    this.employeeModel = new Employee("shailesh", "Shailesh@gmail.com")
  }


}
