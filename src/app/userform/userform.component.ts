import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  constructor() { }

  registrationForm = new FormGroup({
    username:new FormControl('Shailesh'),
    email: new FormControl('shailesh@gmail.com')
  })

  ngOnInit() {
  }

}
