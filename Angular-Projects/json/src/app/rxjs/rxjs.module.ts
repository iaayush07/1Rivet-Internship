import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { PromiseComponent } from './promise/promise.component';
import { ObbservalComponent } from './obbserval/obbserval.component';
import { ObservalListComponent } from './obbserval/observal-list/observal-list.component';
import { SubjectComponent } from './obbserval/observal-list/subject/subject.component';
import { ObservalExampleComponent } from './obbserval/observal-list/observal-example/observal-example.component';
import { BehaviourSubjectComponent } from './obbserval/observal-list/behaviour-subject/behaviour-subject.component';
import { AsyncSubjectComponent } from './obbserval/observal-list/async-subject/async-subject.component';
import { ReplaySubjectComponent } from './obbserval/observal-list/replay-subject/replay-subject.component';


@NgModule({
  declarations: [
    RxjsComponent,
    PromiseComponent,
    ObbservalComponent,
    ObservalListComponent,
    SubjectComponent,
    ObservalExampleComponent,
    BehaviourSubjectComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  exports:[
    ObbservalComponent,
    PromiseComponent
  ]
})
export class RxjsModule { }
