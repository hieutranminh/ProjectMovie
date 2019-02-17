import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rating-movie',
  templateUrl: './rating-movie.component.html',
  styleUrls: ['./rating-movie.component.css']
})
export class RatingMovieComponent implements OnInit {
  commentArr:any = [
    {TenDanhGia:'Phạm Văn Hoàng',EmailDanhGia:'hoangpham@gmail.com',SaoDanhGia:5,NoiDung:'Kế thừa những yếu tố đã từng làm nên thành công cho phần một, Mary Poppins Returns không chỉ là sự tri ân xứng đáng dành cho bản tiền nhiệm mà còn là bộ phim thích hợp để xem cùng gia đình trong dịp năm mới.'},
    {TenDanhGia:'Trương Tấn Thuận',EmailDanhGia:'thuantruong2018@gmail.com',SaoDanhGia:4,NoiDung:'Phần phim riêng về chú robot “ong nghệ” Bumblebee được yêu thích là tác phẩm giàu cảm xúc nhất và ít đánh đấm nhất của loạt phim'},
    {TenDanhGia:'Trần Thái Nhân',EmailDanhGia:'nhantran60@gmail.com',SaoDanhGia:3,NoiDung:'Bộ phim Việt cuối cùng của năm 2018 cũng là một trong những cái tên được mong đợi nhất'},
  ];
  constructor() { }
  @ViewChild('formRating') formRating:NgForm;
  ngOnInit() {
  }
  ratingStar(formRating){
    // console.log(formRating)
    if(formRating.valid){
      this.commentArr.unshift(formRating.value);
      this.formRating.resetForm();
    }
  }
}
