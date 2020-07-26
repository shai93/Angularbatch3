import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from  '@angular/forms';
import { ServiceService } from '../service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datapost',
  templateUrl: './datapost.component.html',
  styleUrls: ['./datapost.component.scss']
})
export class DatapostComponent implements OnInit {

  constructor(private builder:FormBuilder, private api:ServiceService) { }
  response:string;
  error:string;

  ngOnInit() {
  }

  datapostForm = this.builder.group({
    userid:[''],
    id:[''],
    title:[''],
    body:['']
  })

  // debounce

  onSubmit(){
    this.api.datapost(this.datapostForm.value).subscribe((res)=>{
        this.response = JSON.stringify(res)
    }, (err)=>{
        this.error= JSON.stringify(err.message)
    })
  }
}
