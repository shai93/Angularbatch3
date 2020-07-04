import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  @Input('parentName') pv:string
  @Output() childContent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  send(){
    this.childContent.emit("Shailesh Salekar")
  }

}
