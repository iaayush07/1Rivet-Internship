import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../user.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @ViewChild('userForm') form!: NgForm ;
  public user: user;
  public isSubmitted : boolean;

  constructor() {
    this.user = new user();
    this.isSubmitted = false;
   }

  ngOnInit(): void {
  }

  
  onSubmit(){
    console.log(this.form);
    this.isSubmitted = true;
  }

}
