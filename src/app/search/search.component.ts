import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchValue$:any
  ngOnInit() {
    this.searchValue$ = new Subject();
    this.searchValue$.pipe(
      debounceTime(3000) //3secs
    ).subscribe(res=>{
      // console.log(res)
      // api code
    })
  }

// observable/searchValue = ""
// observable = 'shailesh'

  handleSearch(v){
    this.searchValue$.next(v)
  }

}
