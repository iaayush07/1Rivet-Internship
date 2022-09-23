import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { user } from '../crud.model';


@Injectable()
export class ApiService {
  public baseUrl : any;

  constructor(private http : HttpClient) {

    this.baseUrl = " http://localhost:3000/";

   }
   //get method

   getUser():Observable<any>{

    const url : string = this.baseUrl +  'userData';
    return this.http.get(url);
   }

   //post method
   addUser(userdata:user):Observable<any>{
    const url : string = this.baseUrl +  'userData';
    return this.http.post(url,userdata)
   }

   //delete method
   deleteUser(id:any):Observable<any>{
    const url : string = this.baseUrl +  'userData/'+id;
    return this.http.delete(url)
   }

   //update method
   updateUser(user :user,id:number):Observable<any>{
    const url : string = this.baseUrl +  'userData/'+id;
    return this.http.put(url,user)
   }
  
}
