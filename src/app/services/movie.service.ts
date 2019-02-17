import { Injectable, Output, EventEmitter } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  @Output() MaPhimOutPut = new EventEmitter();
  getListMovie(){
    let obSer = this._http.get("http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05")
    .pipe(
      map((res:Response)=>res.json())
    )
    return obSer;
  }
  getMovieDetail(idMovie){
    let obSer = this._http.get(`http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${idMovie}`)
    .pipe(
      map((res:Response)=> res.json())
    )
    return obSer;
  }
  getLichChieu(maLichChieu){
    let obSer = this._http.get(`http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`)
    .pipe(
      map((res:Response)=> res.json())
    )
    return obSer;
  }
  datVe(obj){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post("http://sv2.myclass.vn/api/QuanLyDatVe/DatVe",obj,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
  getLichSuDatVe(taiKhoan){
    let headerRegister = new Headers();
    headerRegister.append('Content-Type','application/json;charset=UTF-8');
    let obSer = this._http.post(`http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taiKhoan}`,{headers:headerRegister})
    .pipe(
      map((res:Response) => res.json())
    )
    return obSer;
  }
  constructor(private _http:Http) { }
}
