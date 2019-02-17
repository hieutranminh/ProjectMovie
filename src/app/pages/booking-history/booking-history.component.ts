import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  User:any;
  danhSachVeDaDat:any;
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.getLocalUser();
    this._movieService.getLichSuDatVe(this.User.TaiKhoan).subscribe(
      res => {
        this.danhSachVeDaDat = res.DanhSachVeDaDat;
      },
      err => {
        console.log(err)
      }
    )
  }
  getLocalUser(){
    let localUser = JSON.parse(localStorage.getItem('LocalUser'))
    if(localUser){
      this.User = localUser;
    }
  }
}
