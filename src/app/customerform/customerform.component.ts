import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from  '@angular/forms';
import { TakeNames, PasswordValidator } from '../shared/name.validator';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  submitted:boolean = false;
  response:any;
  constructor(private builder:FormBuilder, private  http: ServiceService) { }

  get username(){
    return this.registrationForm.get('username');
  }
  
  get password(){
    return this.registrationForm.get('password');
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }

  get gender(){
    return this.registrationForm.get('gender');
  }

  registrationForm = this.builder.group({
    username:['', [Validators.required, TakeNames(/world/)]],
    email:['shailesh@gmail.com', TakeNames(/shailesh1@gmail.com/)],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
    gender:['', Validators.required]
  }, {validator:PasswordValidator})
  ngOnInit() {
  }


  handleInput(input){
    this.http.validateUserName(input).subscribe((response)=>{
      this.response = response
    }, (error)=>{

    })
  }


  onSubmit(){
    this.submitted = true;
    console.log(this.registrationForm.value)
  }
    

}
