import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/crud.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Store user in data from crud.model.ts file......
  public data: user[];

  userid:any;

  public employeeForm : FormGroup;
  public isSubmitted : boolean; 
  public title : string; 
  constructor(

    private fb : FormBuilder,
    private apiService : ApiService,
    private activatedRouter : ActivatedRoute


    
  ) { 
    
    this.title='Add';
   
    this.data=[]

    this.employeeForm = this.fb.group({
   
      name : ['',[Validators.required,Validators.minLength(3)]],
      gender : ['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      dob : ['',[Validators.required]],
      salary : ['',[Validators.required,Validators.pattern(/^[0-9]+$/)]]
    })

    this.isSubmitted = false;

    this.activatedRouter.params.subscribe((res:any)=>{
      this.userid =res['id']
      if(this.userid){
        this.getUserById()
      }
    })


  }

  ngOnInit(): void {
    this.getUserdata();
    this.title=this.userid? 'Edit':'Add';

  }
  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  //service for push data

  public onSave() : void{

    this.isSubmitted = true;
    
    if(this.employeeForm.valid){
      if(this.userid){
        this.apiService.updateUser(this.employeeForm.value,Number(this.userid)).subscribe((Response:user)=>{
          this.getUserdata();
        })
      }
      else{
        this.apiService.addUser(this.employeeForm.value).subscribe((Response)=>{
          this.getUserdata();
        })
      }
      
    }
    
    this.onReset();

    // this.data.push(this.employeeForm.value)
    // console.log(this.employeeForm);
    
  }
  
  onReset(){
    this.employeeForm.reset();
    this.isSubmitted=false;
  }
  onEdit(item:any){
    this.employeeForm.patchValue(item)
  }

  //service for edit data
 
  getUserById(){
    this.apiService.getUserById(Number(this.userid)).subscribe((Response:user)=>{this.employeeForm.patchValue(Response)})
  } 

  //service for get data
  public getUserdata() : void {
    this.apiService.getUser().subscribe((api : user[])=>{this.data = api;}); 
  }
}
