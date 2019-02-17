import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-film',
  templateUrl: './news-film.component.html',
  styleUrls: ['./news-film.component.css']
})
export class NewsFilmComponent implements OnInit {
  DienAnhArr:any = [
    {id:'1',tieuDe:"Họp báo ra mắt MV (Khi cha già đi) tại Mega GS",moTa:"Chiều 18/6, Kyo York tổ chức họp báo ra mắt MV mới 'Khi cha già đi' tại rạp Mega GS - 19 Cao Thắng Q3.",noiDung:".......",hinhAnh:"../../../../../assets/images/dienanh01.jpg",ngayDang:'26/8/2018'},

    {id:'2',tieuDe:"Hà Hồ ra mắt phim ngắn -Gửi Người Yêu Cũ-",moTa:"Chiều 01/11, nữ ca sĩ Hồ Ngọc Hà đã chính thức có buổi ra mắt phim ngắn Gửi người yêu cũ - một trong những dự án được đón chờ nhiều nhất Vpop những ngày gần đây. Buổi họp báo có sự tham gia của rất nhiều bạn bè nghệ sĩ thân thiết của nữ ca sĩ.",noiDung:".......",hinhAnh:"../../../../../assets/images/dienanh02.jpg",ngayDang:'12/9/2018'},

    {id:'3',tieuDe:"Hari Won ra mắt MV -Làm sao để yêu- tại Mega GS",moTa:"Chia sẻ trong buổi họp báo, Hari cho biết Làm sao để yêu khi thu âm không còn có sự hỗ trợ từ MC Trấn Thành như các sản phẩm trước đây. Về kịch bản và ekip thực hiện, Hari cũng tự lựa chọn.",noiDung:".......",hinhAnh:"../../../../../assets/images/dienanh03.jpg",ngayDang:'06/11/2019'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
