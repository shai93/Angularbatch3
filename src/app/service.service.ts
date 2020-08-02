import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  private user = new BehaviorSubject<string>('Shailesh')
  // broadcast
  cast = this.user.asObservable();


  editName(name){
    this.user.next(name)
  }
  


  getName(){
    return "hello world";
  }

  getUsers():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  validateUserName(value):Observable<any>{
    return this.http.get(`https://newnewnew.free.beeceptor.com/${value}`)
  }


  datapost(submission){
    return this.http.post("https://jsonplaceholder.typicode.com/posts", submission)
  }

  
}
