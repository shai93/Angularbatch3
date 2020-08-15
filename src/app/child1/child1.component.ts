import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  ofdata$:any;
  constructor(private service:ServiceService) { }

  ngOnInit() {  

    // cast = observable = 'shailesh'
    
    this.service.cast.subscribe(res=>console.log(res))
    this.ofdata$ = this.service.getOfData();
    // console.log();
    this.service.gethelloworld().subscribe(res=>console.log(res))
    // this.service.getOfData().subscribe(res=>console.log(res))
    this.service.getNumber().subscribe(res=>console.log(res), err=>console.log(err))
  }


  changeName(input){
    this.service.editName(input.value);
  }
}
