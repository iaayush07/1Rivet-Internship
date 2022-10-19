import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  public isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = true;
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
