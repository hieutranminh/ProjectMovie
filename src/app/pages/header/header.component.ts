import { Component, OnInit, OnDestroy } from '@angular/core';
import $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  status:string = 'dangky';
  thongBaoDangKy:string = '';
  thongBaoDangNhap:string = '';
  thongBaoThanhCongDK:boolean = false;
  thongBaoThanhCongDN:boolean = false;
  thongBaoThanhCongDX:boolean = false;
  statusDangNhap:boolean = true;
  tenDangNhap:string = '';
  navLichSuDatVe:boolean = false;
  registerSubscription: Subscription;
  loginSubscription: Subscription;
  luuDataSubscription: Subscription;
  constructor(private _userService:UserService, private _router: Router) { }

  ngOnInit() {
    $(window).scroll(function(event) {
      let indexNow = $('html,body').scrollTop()
      if(indexNow >= 300)
      {
        $('.navbar').addClass('changeColor');
      }
      else if(indexNow < 300)
      {
        $('.navbar').removeClass('changeColor');
      }
    })
    // lay gia tri trong output 
    this.luuDataSubscription = this._userService.luuDataDangNhap.subscribe(
      res=>{
        this.tenDangNhap = res.TaiKhoan
        this.statusDangNhap = false;
      },
      err=>{
        console.log(err)
      }
    )
    this.getLocalUser();
  }

  changeStatus(status){
    this.status = status;
  }

  Register(formRegister){
    if(formRegister.valid){
      let user:any = formRegister.value;
      let userObject = {
        TaiKhoan: user.TaiKhoan,
        MatKhau: user.MatKhau,
        Email: user.Email,
        SoDT: user.SoDT,
        MaNhom: 'GP05',
        MaLoaiNguoiDung: 'KhachHang',
        HoTen: user.HoTen,
      }
      this.registerSubscription = this._userService.registerUser(userObject).subscribe(
        res => {
          if(typeof res !== 'string'){
            this.thongBaoThanhCongDK = true;
            setTimeout(()=>{
              this.thongBaoThanhCongDK = false;
            }, 1500);        
            formRegister.resetForm();
            $('.closeModal').trigger('click');
          }else{
            this.thongBaoDangKy = '* Tài khoản đã tồn tại'
          }
        },
        err => {
          console.log(err);
        }
      )
    } 
  }

  Login(formLogin){
    let user:any = formLogin.value;
    let taiKhoan:string = user.TaiKhoan;
    let matKhau:string = user.MatKhau;
    this.loginSubscription = this._userService.loginUser(taiKhoan,matKhau).subscribe(
      res => {
        if(typeof res !== 'string'){
          // show thong bao
          this.thongBaoThanhCongDN = true;
          setTimeout(() => {
            this.thongBaoThanhCongDN = false;
          }, 1500);  
          // luu local user
          localStorage.setItem('LocalUser',JSON.stringify(res));
          // Hien thi nab Lich Su Dac Ve
          this.navLichSuDatVe = true;
          // trigger dong modal
          $('.closeModal').trigger('click');
          this._userService.luuDataDangNhap.emit(res);
        }else{
          this.thongBaoDangNhap = '* Tài khoản hoặc mật khẩu không đúng'
        }
      },
      err =>{
        console.log(err);
      }
    )
  }
  getLocalUser(){
    let UserLocal = JSON.parse(localStorage.getItem('LocalUser'));
    if(UserLocal){
      this.statusDangNhap = false;
      this.tenDangNhap = UserLocal.TaiKhoan;
      this.navLichSuDatVe = true;
    }else{
      this.statusDangNhap = true;
      this.navLichSuDatVe = false;
    }
  }
  dangXuat(){
    this.statusDangNhap = true;
    localStorage.removeItem('LocalUser');
    // Hien thi nab Lich Su Dac Ve
    this.navLichSuDatVe = false;
    this.thongBaoThanhCongDX = true;
    setTimeout(()=>{
      this.thongBaoThanhCongDX = false;
    }, 1500); 
    this._router.navigate(['/']);
  }
  ngOnDestroy(){
    if(this.registerSubscription){
      this.registerSubscription.unsubscribe();
    }
    if(this.loginSubscription){
      this.loginSubscription.unsubscribe();
    }
    if(this.luuDataSubscription){
      this.luuDataSubscription.unsubscribe();
    }
  }
}
