import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent ,

  children: [
    {
      path : '',
      component : EmployeeFormComponent
    },
    {
      path : 'employee',
      component : EmployeeFormComponent
    },
    {
      path : 'employee-details',
      component : EmployeeDetailsComponent
    },
    {
      path: 'edit',
      component: EmployeeFormComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
