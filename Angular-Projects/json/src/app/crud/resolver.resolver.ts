import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { user } from '../crud.model';
import { ApiService } from '../shared/api.service';

@Injectable()
export class ResolverResolver implements Resolve<user> {

  constructor(private userService: ApiService) {
  }

  resolve(actRoute: ActivatedRouteSnapshot): Observable<user> {
    let Userid = actRoute.params['id'];
    return this.userService.getUserById(Userid)
  }

}
