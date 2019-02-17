import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() luuDataDangNhap = new EventEmitter();
  
  registerUser(user:User){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post("http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",user,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
  loginUser(taiKhoan:string,matKhau:string){
    let headerLogin = new Headers();
    headerLogin.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post(`http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`,{headers:headerLogin})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
  constructor(private _http:Http) { }
}
