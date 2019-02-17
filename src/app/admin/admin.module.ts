import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminModule { }
