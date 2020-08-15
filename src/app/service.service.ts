import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {map, retry} from 'rxjs/operators'



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
  
  getOfData():Observable<any>{
    return of([1,2,3,4,5])
  }

  gethelloworld(){
    return of('hello world from service file');
  }

  getNumber(){
    return of(2).pipe(
      map(x=>x*x)
    )
  }

  getName(){
    return "hello world";
  }

  getUsers():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(retry(3))
  }


  validateUserName(value):Observable<any>{
    return this.http.get(`https://newnewnew.free.beeceptor.com/${value}`)
  }


  datapost(submission){
    return this.http.post("https://jsonplaceholder.typicode.com/posts", submission)
  }

  
}
