import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{ path: '', component: CrudComponent,

children: [
  {
    path : '',
    component : FormComponent
  },
  {
    path : 'crud',
    component : FormComponent
  },
  {
    path: 'edit/:id',
    component: FormComponent
  }
]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
