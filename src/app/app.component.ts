import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angularbatch3';

  name:string = "Parent content";
  childMessage:string;

  incomingData(childValue){
    this.childMessage = childValue;
  }
}
