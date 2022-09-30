import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObbservalComponent } from './obbserval/obbserval.component';
import { AsyncSubjectComponent } from './obbserval/observal-list/async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './obbserval/observal-list/behaviour-subject/behaviour-subject.component';
import { ObservalExampleComponent } from './obbserval/observal-list/observal-example/observal-example.component';
import { ObservalListComponent } from './obbserval/observal-list/observal-list.component';
import { ReplaySubjectComponent } from './obbserval/observal-list/replay-subject/replay-subject.component';
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
        },
        {
          path:'observal-practical',
          component : ObservalExampleComponent
        },
        {
          path:'behaviour',
          component : BehaviourSubjectComponent
        },
        {
          path:'async',
          component : AsyncSubjectComponent
        },
        {
          path:'replay',
          component : ReplaySubjectComponent
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
