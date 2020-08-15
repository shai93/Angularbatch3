import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: any;
  display: boolean = true;
  count: number=0;
  
  constructor(private api:ServiceService){
    // console.log(this.api.getName())

    this.api.getUsers().subscribe((response)=>{
        // console.log(response)
    }, (error)=>{

    })

  }


  title = 'Angularbatch3';

  name:string = "Parent content";
  childMessage:string;

  incomingData(childValue){
    this.childMessage = childValue;
  }

  handleChange(val){
    this.value=val.value
  }


  handleChild(){
    this.display = !this.display;
  }


  handleCount(){
    this.count++;
  }
}
