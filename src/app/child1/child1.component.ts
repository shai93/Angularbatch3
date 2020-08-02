import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {  

    // cast = observable = 'shailesh'
    
    this.service.cast.subscribe(res=>console.log(res))
  }


  changeName(input){
    this.service.editName(input.value);
  }
}
