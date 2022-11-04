import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class BreadcrumService {

  constructor(private toastr: ToastrService) {

  }
  showSuccess() {
    this.toastr.success('You have signed up successfully', 'singed up');
  }
}