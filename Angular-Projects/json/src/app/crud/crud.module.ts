import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResolverResolver } from './resolver.resolver';


@NgModule({
  declarations: [
    CrudComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    ListComponent
  ],
  providers: [
    ResolverResolver
  ]
})
export class CrudModule { }
