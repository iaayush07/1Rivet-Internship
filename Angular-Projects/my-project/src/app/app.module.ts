import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CustomersModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CustomersModule,
    FormsModule,
    ReactiveFormModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
