import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from  '@angular/forms';
import { TakeNames } from '../shared/name.validator';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {

  response:any;
  constructor(private builder:FormBuilder, private  http: ServiceService) { }

  get username(){
    return this.registrationForm.get('username');
  }

  registrationForm = this.builder.group({
    username:['', [Validators.required, TakeNames(/world/)]],
    email:['shailesh@gmail.com', TakeNames(/shailesh@gmail.com/)]
  })
  ngOnInit() {
  }


  handleInput(input){
    this.http.validateUserName(input).subscribe((response)=>{
      this.response = response
    }, (error)=>{

    })
  }
    

}
