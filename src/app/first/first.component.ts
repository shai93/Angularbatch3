import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent{

  name:string = "Amogh";
  display:boolean = false;
  id:number = 123
  constructor() {}


  callMyName(){
    this.id = 9090;
    return this.name;
  }

}
