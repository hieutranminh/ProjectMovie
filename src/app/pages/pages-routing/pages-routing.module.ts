import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PagesLayoutComponent } from '../pages-layout/pages-layout.component';
import { IndexComponent } from '../index/index.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { BookingSeatComponent } from '../movie-detail/booking-seat/booking-seat.component';
import { LoginGuard } from 'src/app/guard/login.guard';
import { BookingHistoryComponent } from '../booking-history/booking-history.component';

const pagesRoutes: Routes = [
  {path: '', component: PagesLayoutComponent,children:[
    {path: '',component:IndexComponent},
    {path: 'chitiet/:id',component:MovieDetailComponent,children:[
      {path: 'datghe/:id',component: BookingSeatComponent,canActivate:[LoginGuard]}
    ]},
    {path: 'lichsudatve',component:BookingHistoryComponent},
  ]},

  {path: '**',redirectTo:'', pathMatch:'full'}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(pagesRoutes)
  ]
})
export class PagesRoutingModule { }
