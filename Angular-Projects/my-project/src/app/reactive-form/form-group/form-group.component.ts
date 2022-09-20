import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {


  public groupForm : FormGroup

  constructor(
    private formbuilder : FormBuilder
  )
   { 
    this.groupForm = this.formbuilder.group({
      fname :['',[Validators.required,Validators.minLength(3)]],
      lname :['',[Validators.required,Validators.maxLength(10)]],
      companyname :['',[Validators.required]],
      address :['',[Validators.required]],
      email :['',[Validators.required]],
      phone :['',[Validators.required]],
      check :['',[Validators.required]],
    })
  }

  ngOnInit(): void {

  }
  get f(): { [key: string]: AbstractControl } {
    return this.groupForm.controls;
  }
  onClick(){
    console.log(this.groupForm)
  }

  onReset(){
    this.groupForm.reset();
  }
}
