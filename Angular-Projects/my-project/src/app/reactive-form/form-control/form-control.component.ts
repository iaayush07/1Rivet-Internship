import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  public userForm :FormGroup;  
  public isSubmitted : boolean;                                                            

  constructor() { 
    this.userForm = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      companyname : new FormControl(''),
      address : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      check : new FormControl('')
    });

    this.isSubmitted = false;
  
  }

  ngOnInit(): void {
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(){
    console.log(this.userForm)
    //  console.log(this.f['check'].dirty);
    
    this.isSubmitted = true;
  }
}
