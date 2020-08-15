import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // pipe. safehtml

  color:string = "red";
  err:string = `<p style="color:red;">Data not found</p>`
  
  // mm/dd/yyyy
  employeeDob:any = ['01/9/2002','10/11/1993','08/15/1947','1/26/1958','9/12/2005']
}
