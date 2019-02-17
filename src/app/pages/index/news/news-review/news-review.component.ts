import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-review',
  templateUrl: './news-review.component.html',
  styleUrls: ['./news-review.component.css']
})
export class NewsReviewComponent implements OnInit {
  ReviewArr:any = [
    {id:'4',tieuDe:"[Review] Mary Poppins Returns: Cô bảo mẫu cầm dù bay trở lại để cứu bạn qua năm 2019 sóng gió",moTa:"Mary Poppins Returns không chỉ là sự tri ân xứng đáng dành cho bản tiền nhiệm mà còn là bộ phim thích hợp để xem cùng gia đình trong dịp năm mới.",noiDung:".......",hinhAnh:"../../../../../assets/images/review01.jpg",ngayDang:'21/12/2018'},

    {id:'5',tieuDe:"[Review] Hồn Papa, Da Con Gái - Khi gia đình là tất cả",moTa:"Bộ phim Việt cuối cùng của năm 2018 cũng là một trong những cái tên được mong đợi nhất, và quả thực Hồn Papa Da Con Gái đã mang đến một câu chuyện vừa hài hước vừa xúc động về tình cha con.",noiDung:".......",hinhAnh:"../../../../../assets/images/review02.jpg",ngayDang:'14/12/2018'},

    {id:'6',tieuDe:"[Review] Bumblebee – Robot đại chiến hay -Vì sao đưa anh tới-",moTa:"Phần phim riêng về chú robot “ong nghệ” Bumblebee được yêu thích là tác phẩm giàu cảm xúc nhất và ít đánh đấm nhất của loạt phim Transformers.",noiDung:".......",hinhAnh:"../../../../../assets/images/review03.jpg",ngayDang:'06/01/2019'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
