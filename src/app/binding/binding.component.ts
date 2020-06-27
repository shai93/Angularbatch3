import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  title="angular 10";
  name:string = "";
  count:number = 0;
  logmsg:string = "";
  isdisabled:boolean = false;

  isspecial:string = "special";   //name of css class
  issuccess:string = "success";
  iserror:string = "error";
  
  hasError:boolean = false;

  dataVariable:string = "";
  erroMsg:string = "Invalid Password";
  x:number = 25;

  flag:boolean = false;

  spanColor:object = {
    color:"orange",
    background:"blue"
  }

  mainclass:object = {
    special:true,
    success:false,
    error:true
  }

  constructor() { }

  ngOnInit() {
  }

  handleButton(buttonevent){
    if(buttonevent.type === "click"){
      this.name = "Amogh";
      this.count++;
    }
  }

  handleCount(){
      this.count = 0;
  }
  
  
  handleLog(value){
    this.logmsg = value;
    this.getX();    //can call another function like this
  }

  getX(){
    return this.x;
  }

  getTwo(){
    return 2;
  }

  handlePassword(event){
    if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(event.target.value)){
      this.erroMsg = "Valid Password";
    }else{
      this.erroMsg = "Invalid Password";
    }
  }



}
