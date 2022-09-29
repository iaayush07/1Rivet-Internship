import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { PromiseComponent } from './promise/promise.component';
import { ObbservalComponent } from './obbserval/obbserval.component';
import { ObservalListComponent } from './obbserval/observal-list/observal-list.component';
import { SubjectComponent } from './obbserval/observal-list/subject/subject.component';


@NgModule({
  declarations: [
    RxjsComponent,
    PromiseComponent,
    ObbservalComponent,
    ObservalListComponent,
    SubjectComponent
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
