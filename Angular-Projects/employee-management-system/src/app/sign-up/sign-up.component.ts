import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formbuilder: FormBuilder, private authService: AuthenticationService, private router: Router, private toastr: ToastrService) {
    this.signupForm = this.formbuilder.group({
      username: [''],
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signup(this.signupForm.value).subscribe(res => {
      console.log(res);
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert('something went wrong')
    });
    // this.toasmtr.
  }

}
