import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/crud.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public data: user[];


  public employeeForm : FormGroup;
  public isSubmitted : boolean; 
  constructor(

    private fb : FormBuilder,
    private apiService : ApiService

  ) { 
    

    this.data=[]

    this.employeeForm = this.fb.group({
   
      name : ['',[Validators.required,Validators.minLength(3)]],
      gender : ['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      dob : ['',[Validators.required]],
      salary : ['',[Validators.required,Validators.pattern(/^[0-9]+$/)]]
    })

    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.getUserdata();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  //service for push data

  public onSave() : void{

    this.isSubmitted = true;

    this.apiService.addUser(this.employeeForm.value).subscribe((Response)=>{
      this.getUserdata();
    })
    // this.data.push(this.employeeForm.value)
    // console.log(this.employeeForm);
    
  }
  
  onReset(){
    this.employeeForm.reset();
  }
  onEdit(item:any){
    this.employeeForm.patchValue(item)
  }

  //service for get data
  public getUserdata() : void {
    this.apiService.getUser().subscribe((api : user[])=>
    {
      this.data = api;
    });
    
  }
}
