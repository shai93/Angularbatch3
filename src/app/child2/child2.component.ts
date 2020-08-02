import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {  

    // cast = observable = 'shailesh'
    
    this.service.cast.subscribe(res=>console.log(res))
  }

}
