import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { BreadcrumService } from './services/breadcrum.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    FormComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    BreadcrumService
    // company--
  ]
})
export class EmployeeModule { }
