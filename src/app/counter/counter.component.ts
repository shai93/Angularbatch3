import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input('parentCount') count:number; 
  isEven: number;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.count.currentValue % 2 == 0){
      this.isEven = changes.count.currentValue
    }else{
      this.isEven = changes.count.previousValue
    }
  }

}
