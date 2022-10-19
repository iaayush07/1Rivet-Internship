import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public employeeForm: FormGroup;
  public isSubmitted: boolean;
  public id: any;
  public title: string;

  /////------------/////
  public employee: employee[]

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private activatedroute: ActivatedRoute
  ) {
    this.title = 'Add'
    this.employee = []

    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    })
    this.isSubmitted = false

    this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    })


  }
  ngOnInit(): void {
    this.getEmployeeData();
    this.title = this.id ? 'Edit' : 'Add';
  }
  get f(): { [key: string]: AbstractControl; } {
    return this.employeeForm.controls;
  }
  //onsave click
  onSave() {
    if (this.id) {
      this.employeeService.updateEmpData(this.employeeForm.value, this.id).subscribe((Response) => {
        this.getEmployeeData();
        this.onReset();
      })
    } else {
      this.employeeService.addEmpData(this.employeeForm.value).subscribe((res) => {
        this.getEmployeeData();
        this.onReset();
      })
    }
  }

  //reset
  onReset() {
    this.employeeForm.reset()
  }
  getEmployeeData() {
    this.employeeService.getEmpData().subscribe((result) => { this.employee = result })
  }

  onEdit(outputlist: employee) {
    this.employeeForm.patchValue(outputlist);
  }

  // getEmployeeById() {
  //   this.employeeService.getEmpByID(this.id).subscribe(Response => {
  //     // this.employeeForm.patchValue = Response
  //   })

  // }


}
