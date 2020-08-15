import { Component, OnInit, Input, SimpleChanges, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.scss']
})
export class HookComponent implements OnInit, AfterContentChecked {

  @Input() name:any;
  num:number = 0;
  @ViewChild("hookdiv") selfDiv:ElementRef;


  constructor() { 
    console.log('constructor')
  }

  ngOnChanges(change:SimpleChanges){
    console.log('ngOnChanges')
    // console.log(change)
  }

  ngOnInit() {
    console.log('ngonit');
    // api call?
    // this.counter = setInterval(()=>{
    //   this.num++;
    //   console.log(this.num)
    // }, 1000)
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(){
    this.selfDiv.nativeElement.style.background = "red"
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
    // clearInterval(this.counter)
  }


}
