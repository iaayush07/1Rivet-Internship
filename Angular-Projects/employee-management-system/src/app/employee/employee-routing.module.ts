import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EmployeeComponent } from './employee.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form'
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'edit/:id',
        component: FormComponent
      },
      {
        path: 'employee-details',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
