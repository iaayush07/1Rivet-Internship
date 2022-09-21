import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {


  public data: any=[] ;


  public employeeForm : FormGroup;
  public isSubmitted : boolean; 
  constructor(

    private fb : FormBuilder

  ) { 
    this.data = [];


    this.employeeForm = this.fb.group({
   
      name : ['',[Validators.required,Validators.minLength(3)]],
      gender : ['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      dob : ['',[Validators.required]],
      salary : ['',[Validators.required,Validators.pattern(/^[0-9]+$/)]]
    })

    this.isSubmitted = false;
  }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  public onSave() : void{

    this.isSubmitted = true;

    this.data.push(this.employeeForm.value)
    console.log(this.employeeForm);
    
  }
  
  onReset(){
    this.employeeForm.reset();
  }
  onEdit(item:any){
    this.employeeForm.patchValue(item)
  }
}
