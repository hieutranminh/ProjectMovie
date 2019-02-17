import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule,   } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AdminModule,
    // ROUTING
    AppRoutingModule,
    RouterModule,
    // Routes,
    HttpModule,
    // OWL Module
    BrowserAnimationsModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
