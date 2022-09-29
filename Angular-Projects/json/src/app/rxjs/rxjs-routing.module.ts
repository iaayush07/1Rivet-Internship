import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObbservalComponent } from './obbserval/obbserval.component';
import { ObservalListComponent } from './obbserval/observal-list/observal-list.component';
import { SubjectComponent } from './obbserval/observal-list/subject/subject.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
  { path: '', component: RxjsComponent,
  children: [
    
    {
      path : 'Promise',
      component : PromiseComponent
    },
    {
      path: 'observal',
      component: ObbservalComponent,
      children: [
    
        {
          path : '',
          component : ObservalListComponent
        },
        {
          path:'subject',
          component : SubjectComponent
        }
      ]
    }
  ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
