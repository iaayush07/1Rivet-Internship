import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { singup } from './signup.model';

@Injectable()
export class AuthenticationService {

  public isLoggedIn: boolean;
  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.isLoggedIn = false;

    this.baseUrl = "http://localhost:3000/signupData/"
  }

  public signup(signup: singup): Observable<any> {
    const url = this.baseUrl;
    return this.http.post(url, signup)
  }

  public logedIn() {
    this.isLoggedIn = true;
  }
  public logedOut() {
    this.isLoggedIn = false
  }
  isauthenticated() {
    return this.isLoggedIn;
  }
}
