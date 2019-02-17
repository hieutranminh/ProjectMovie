import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
const AdminRoutes:Routes = [
  {path: 'admin', component: AdminLayoutComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminRoutingModule { }
