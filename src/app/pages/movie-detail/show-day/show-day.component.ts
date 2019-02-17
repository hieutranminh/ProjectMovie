import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-day',
  templateUrl: './show-day.component.html',
  styleUrls: ['./show-day.component.css']
})
export class ShowDayComponent implements OnInit {
  @Input() movieDetail;
  SuatChieuArr:any = [];
  MaLichChieu:number = null;
  objLichChieu:any = [];
  NgayChieu:any = null;
  thongBaoChonGhe:boolean = false;
  constructor(private _movieService: MovieService,private _router:Router) { }

  ngOnInit() {
    // console.log(this.movieDetail)
  }

  getGioChieu(ngayChieu){
    if(ngayChieu){
      this.SuatChieuArr = [];
      this.SuatChieuArr.push(ngayChieu);
      this.MaLichChieu = null;
      // console.log(this.SuatChieuArr)
    }
    else{
      this.SuatChieuArr = [];
      this.MaLichChieu = null;
    }
   
  }
  getMaLichChieu(gioChieu) {
    if (gioChieu) {
      let LichChieuArr = this.movieDetail.LichChieu;
      let lichChieuDaChon = LichChieuArr.filter(item=>item.NgayChieuGioChieu === gioChieu);
      this.MaLichChieu = lichChieuDaChon[0].MaLichChieu;
      this.objLichChieu = lichChieuDaChon[0];
      // console.log(this.MaLichChieu)
    } 
    else{
      this.MaLichChieu = null;
      // console.log(this.MaLichChieu)
    }
  }
  showDatGhe(){
    // console.log(this.movieDetail.MaPhim)
    if(this.MaLichChieu === null){
      this._router.navigate(['/chitiet',this.movieDetail.MaPhim])
      this.thongBaoChonGhe = true;
      setTimeout(()=>{
        this.thongBaoChonGhe = false;
      }, 1500);    
    }
    else{
      // this._movieService.MaPhimOutPut.emit(this.movieDetail);
      this._router.navigate(['/chitiet',this.movieDetail.MaPhim,'datghe',this.MaLichChieu]);
      localStorage.setItem('detailLichChieu',JSON.stringify(this.objLichChieu))
    }
  }
}

