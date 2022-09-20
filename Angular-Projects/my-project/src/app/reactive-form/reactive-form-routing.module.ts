import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ReactiveFormComponent } from './reactive-form.component';

const routes: Routes = [
  { 
    path: '', 
    component: ReactiveFormComponent ,
    children: [
      {
        path: 'form-group',
        component: FormGroupComponent
      },
      {
        path: 'form-control',
        component: FormControlComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
