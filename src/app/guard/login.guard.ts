import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import $ from 'jquery';
import Swal from 'sweetalert2'
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this._auth.checkLogin();
    if(this._auth.getIsLogin()){
      return true;
    }
    else{
      Swal.fire({
        title: 'Chưa đăng nhập!',
        text: "Cần đăng nhập để được đặt ghế",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đăng nhập ngay',
        cancelButtonText: 'Quay lại !'
      }).then((result) => {
        if (result.value) {
          $('.btn_dangnhap').trigger('click');
        }
      })
      
      // this._router.navigate(['/dangnhap']);
    }  
  }
}
