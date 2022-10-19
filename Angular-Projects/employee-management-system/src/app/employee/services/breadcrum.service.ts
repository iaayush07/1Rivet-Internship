import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { employee } from '../employee.model';

@Injectable()
export class BreadcrumService {

  // Subject emitting the breadcrumb hierarchy 
  private readonly _breadcrumbs$ = new BehaviorSubject<employee[]>([]);

  // Observable exposing the breadcrumb hierarchy 
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private toastr: ToastrService) {

  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
