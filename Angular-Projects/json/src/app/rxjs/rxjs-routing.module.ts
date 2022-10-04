import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObbservalComponent } from './obbserval/obbserval.component';
import { AsyncSubjectComponent } from './obbserval/observal-list/async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './obbserval/observal-list/behaviour-subject/behaviour-subject.component';
import { CombinationsComponent } from './obbserval/observal-list/combinations/combinations.component';
import { FilteringComponent } from './obbserval/observal-list/filtering/filtering.component';
import { ObservalExampleComponent } from './obbserval/observal-list/observal-example/observal-example.component';
import { ObservalListComponent } from './obbserval/observal-list/observal-list.component';
import { OperatorsComponent } from './obbserval/observal-list/operators/operators.component';
import { ReplaySubjectComponent } from './obbserval/observal-list/replay-subject/replay-subject.component';
import { SubjectComponent } from './obbserval/observal-list/subject/subject.component';
import { TransformationComponent } from './obbserval/observal-list/transformation/transformation.component';
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
        },
        {
          path : 'creation',
          component : OperatorsComponent
        },
        {
          path : 'combination',
          component : CombinationsComponent
        },
        {
          path : 'filtering',
          component : FilteringComponent
        },
        {
          path : 'transform',
          component : TransformationComponent
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
