import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-promotion',
  templateUrl: './news-promotion.component.html',
  styleUrls: ['./news-promotion.component.css']
})
export class NewsPromotionComponent implements OnInit {
  KhuyenMaiArr:any = [
    {id:'7',tieuDe:"FOREVER YOUNG | Giá vé ưu đãi dành cho khán giả dưới 22 tuổi",moTa:"Nếu cuộc đời là một thước phim, thì tuổi trẻ là phần phim hay nhất, mãnh liệt nhất và đẹp đẽ nhất Và để cho tuổi trẻ thật nhiều màu sắc, Mega GS đã mang đến một ưu đãi đặc biệt danh cho tất cả các bạn.",noiDung:".......",hinhAnh:"../../../../../assets/images/khuyenmai01.png",ngayDang:'21/12/2018'},

    {id:'8',tieuDe:"Mùa đông ấm áp với giáng sinh cùng Mega GS",moTa:"Như một món quà hằng năm mà Mega GS gởi tặng đến tất cả khán giả đã ủng hộ rạp trong năm 2018 vừa qua. Giáng Sinh này, Mega GS Cinemas vẫn sẽ tặng những chiếc gối Giáng Sinh cho khán giả khi đến rạp xem phim trong giai đoạn này.",noiDung:".......",hinhAnh:"../../../../../assets/images/khuyenmai02.png",ngayDang:'14/12/2018'},

    {id:'9',tieuDe:"Đón tết nhận lì xì năm 2019 với nhiều ưu đãi",moTa:"Từ ngày 01.02 đến 15.02, Mega GS Cinemas sẽ dành phần quả chất này cho tất cả khán giả, cứ mỗi 02 vé xem phim bất kỳ sẽ được 1 bộ bao lì xì cực Truất",noiDung:".......",hinhAnh:"../../../../../assets/images/khuyenmai03.png",ngayDang:'06/01/2019'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
