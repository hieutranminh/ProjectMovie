import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeatItemComponent } from './seat-item/seat-item.component';
import Swal from 'sweetalert2'
// import $ from 'jquery';
// declare var $:any;
@Component({
  selector: 'app-booking-seat',
  templateUrl: './booking-seat.component.html',
  styleUrls: ['./booking-seat.component.css']
})
export class BookingSeatComponent implements OnInit, OnDestroy {
  @ViewChildren(SeatItemComponent) listSeatItem: QueryList<SeatItemComponent>;
  status: boolean = false;
  total: number = 0;
  subTotal: number = 0;
  totalTicket: number = 0;
  totalAll: number = 0;
  chiTietPhim:any;
  User:any;
  // Variable COMBO BAP NUOC
  BapList: { id: string, ten: string, hinhAnh: string, gia: number, soLuong: number }[] = [
    { id: '1', ten: "Bắp rang 60g Phô mai", hinhAnh: "../../../../../assets/images/popcorn.jpg", gia: 50000, soLuong: 0 },
    { id: '2', ten: "Bắp rang 30g Caramel", hinhAnh: "../../../../../assets/images/popcorn.jpg", gia: 30000, soLuong: 0 }
  ];
  ComboList: { id: string, ten: string, hinhAnh: string, gia: number, soLuong: number }[] = [
    { id: '3', ten: "Combo T7 & CN", hinhAnh: "../../../../../assets/images/combo.jpg", gia: 100000, soLuong: 0 },
    { id: '4', ten: "Combo Cặp Đôi", hinhAnh: "../../../../../assets/images/combo.jpg", gia: 120000, soLuong: 0 },
    { id: '5', ten: "Combo phim bom tấn", hinhAnh: "../../../../../assets/images/combo.jpg", gia: 120000, soLuong: 0 },
  ];
  NuocList: { id: string, ten: string, hinhAnh: string, gia: number, soLuong: number }[] = [
    { id: '6', ten: "Coca Cola", hinhAnh: "../../../../../assets/images/drink.jpg", gia: 30000, soLuong: 0 },
    { id: '7', ten: "Pepsi", hinhAnh: "../../../../../assets/images/drink.jpg", gia: 30000, soLuong: 0 },
    { id: '8', ten: "7 UP", hinhAnh: "../../../../../assets/images/drink.jpg", gia: 30000, soLuong: 0 },
    { id: '9', ten: "Fansta", hinhAnh: "../../../../../assets/images/drink.jpg", gia: 30000, soLuong: 0 }
  ];
  ListChooseFood: { id: string, ten: string, hinhAnh: string, gia: number, soLuong: number }[] = [];
  // Variable DAT GHE
  GheArr: any = [];
  MaLichChieu: any = null;
  objLichChieu:Array<any> = [];
  LichChieuArr:Array<any> = [];
  layMaLichChieuSub: Subscription;
  layDanhSachGheSub: Subscription;
  layMaPhimSub: Subscription;
  datVeSub:Subscription;
  // Variable Thong Tin Ghe
  soGheConTrong: number = 0;
  soGheLuaChon: any = [];
  soGheDaDat: any = [];
  // Variable thong bao
  thongBaoSoGhe: boolean = false;
  // Variable Timing
  fiveMinutes: number = 60 * 1;
  timeInterval:any;
  constructor(
    private _activatedRoute: ActivatedRoute, private _movieService: MovieService, private _router: Router) { 
      
    }

  ngOnInit() {
    this.layMaLichChieuSub = this._activatedRoute.params.subscribe(
      res => {
        this.MaLichChieu = res.id;
        this.layDanhSachGheSub = this._movieService.getLichChieu(this.MaLichChieu).subscribe(
          res => {
            this.GheArr = res.DanhSachGhe;
            for (let item of this.GheArr) {
              if (!item.DaDat) {
                this.soGheConTrong++;
              }
              else {
                this.soGheDaDat.push(item);
              }
            }
            // CountDown Timer Dat Ve
            let display = (<HTMLSpanElement>document.getElementById('thoigiandat'));
            this.startTimer(this.fiveMinutes, display);
          },
          err => {
            console.log(err);
          }
        )
        this.getLocalDetailLichChieu();
      },
      err => {
        console.log(err);
      }
    )
    this.getLocalDetailMovie();
    this.getLocalUser();
  }
  changeStatus() {
    this.status = !this.status;
  }
  eventTangGiam(event) {
    let index = this.ListChooseFood.findIndex(item => item.id === event.obj.id);
    if (event.stt) {
      if (index === -1) {
        this.ListChooseFood.push(event.obj);
        event.obj.soLuong++;
      } else {
        this.ListChooseFood[index].soLuong++;
      }
    } else {
      if (index !== -1) {
        this.ListChooseFood[index].soLuong--;
        if (event.obj.soLuong <= 0) {
          this.ListChooseFood.splice(index, 1)
        }
      } else {
        event.obj.soLuong = 0;
      }
    }
    this.totalFood();
  }
  totalFood() {
    this.total = 0;
    for (let item of this.ListChooseFood) {
      this.total += (item.gia * item.soLuong);
    }
    this.totalPrice();
  }
  chooseSuccessFood() {
    this.status = !this.status;
    this.subTotal = this.total;
  }
  layGheOutPut(e) {
    // console.log(e)
    if (e.stt) {
      if (this.soGheLuaChon.length < 2) {
        this.soGheLuaChon.push(e.objGhe);
        this.soGheConTrong--;
      }
      else {
        this.soGheLuaChon.push(e.objGhe);
        this.listSeatItem.forEach(item => {
          if (item.gheDetail.MaGhe === this.soGheLuaChon[0].MaGhe) {
            item.statusGhe = false;
          }
        })
        this.soGheLuaChon.shift();
        // Thong bao dat 4 ghe
        this.thongBaoSoGhe = true;
        setTimeout(() => {
          this.thongBaoSoGhe = false;
        }, 1500);
      }
    }
    else {
      let index = this.soGheLuaChon.findIndex(item => item.MaGhe === e.objGhe.MaGhe);
      if (index !== -1) {
        this.soGheConTrong++;
        this.soGheLuaChon.splice(index, 1);
      }
    }
    this.totalPriceTicket();
    this.totalPrice();
  }
  totalPriceTicket(){
    this.totalTicket = 0;
    for (let item of this.soGheLuaChon) {
      this.totalTicket += item.GiaVe;
    }
  }
  totalPrice(){
    this.totalAll = this.total + this.totalTicket;
  }
  startTimer(duration, display) {
    let timer: any = duration, minutes, seconds;
    this.timeInterval = setInterval(() => {
      minutes = Math.floor((timer / 60));
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        timer = duration;
        // console.log(this.chiTietPhim.MaPhim)
        this._router.navigate(['/chitiet',this.chiTietPhim.MaPhim]);
        Swal.fire('Hết thời gian đặt phim !')
        clearInterval(this.timeInterval);
      }
    }, 1000);
  }
  getLocalDetailMovie(){
    let localDetail = JSON.parse(localStorage.getItem('detailMovie'))
    if(localDetail){
      this.chiTietPhim = localDetail;
    }
  }
  getLocalUser(){
    let localUser = JSON.parse(localStorage.getItem('LocalUser'))
    if(localUser){
      this.User = localUser;
      // console.log(this.User)
    }
  }
  getLocalDetailLichChieu(){
    let detailLichChieu = JSON.parse(localStorage.getItem('detailLichChieu'))
    if(detailLichChieu){
      this.objLichChieu = detailLichChieu;
      // console.log(this.objLichChieu)
    }
  }
  ThanhToan(){
    if(this.soGheLuaChon.length !== 0){
      let ve ={ 
        MaLichChieu : this.MaLichChieu,
        TaiKhoanNguoiDung: this.User.TaiKhoan,
        DanhSachVe:[
          {MaGhe:this.soGheLuaChon[0].MaGhe,GiaVe:this.soGheLuaChon[0].GiaVe},
          {MaGhe:this.soGheLuaChon[1].MaGhe,GiaVe:this.soGheLuaChon[1].GiaVe}, 			  
        ]
      } 
      this.datVeSub = this._movieService.datVe(ve).subscribe(
        res => {
          if(typeof res === 'string'){   
            Swal.fire({
              type: 'success',
              title: 'Đặt vé thành công',
              showConfirmButton: false,
              timer: 1500
            })
            this._router.navigate(['/']);
          }
        },
        err => {
          console.log(err)
        }
      )
    }
    else{
      Swal.fire({
        type: 'warning',
        title: 'Chưa chọn ghế',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }
  ngOnDestroy() {
    if (this.layMaLichChieuSub) {
      this.layMaLichChieuSub.unsubscribe();
    }
    if (this.layDanhSachGheSub) {
      this.layDanhSachGheSub.unsubscribe();
    }
    if (this.layMaPhimSub) {
      this.layMaPhimSub.unsubscribe();
    }
    if (this.datVeSub) {
      this.datVeSub.unsubscribe();
    }
    clearInterval(this.timeInterval);
  }
}
