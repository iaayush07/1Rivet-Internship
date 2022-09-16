import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './core-components/header/header.component';
import { SidebarComponent } from './core-components/sidebar/sidebar.component';
import { AboutComponent } from './core-components/about/about.component';
import { PageNotFoundComponent } from './core-components/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    // CoreRoutingModule
  ],
  exports : [
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
