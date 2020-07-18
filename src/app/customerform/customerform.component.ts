import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from  '@angular/forms';
import { TakeNames } from '../shared/name.validator';
@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  get username(){
    return this.registrationForm.get('username');
  }

  registrationForm = this.builder.group({
    username:['', [Validators.required, TakeNames(/world/)]],
    email:['shailesh@gmail.com', TakeNames(/shailesh@gmail.com/)]
  })
  ngOnInit() {
  }
  
  

}
