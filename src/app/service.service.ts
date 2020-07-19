import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getName(){
    return "hello world";
  }

  getUsers():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  validateUserName(value):Observable<any>{
    return this.http.get(`https://newnewnew.free.beeceptor.com/${value}`)
  }


  
}
