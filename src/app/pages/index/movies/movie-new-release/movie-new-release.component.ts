import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-movie-new-release',
  templateUrl: './movie-new-release.component.html',
  styleUrls: ['./movie-new-release.component.css']
})
export class MovieNewReleaseComponent implements OnInit {
  customOptions: any = {
    loop: true,
    dots: true,
    margin:20,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  listMovie: Movie[] = [
    {
      "MaPhim": 111,
      "TenPhim": "The Longest Ride",
      "Trailer": "https://www.youtube.com/watch?v=FUS_Q7FsfqU",
      "MoTa": "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
      "MaNhom": "GP01",
      "NgayKhoiChieu": "2018-07-29T00:00:00",
      "DanhGia": 3,
      "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/the-longest-ride.jpg"
    },
    {
      "MaPhim": 131,
      "TenPhim": "Southpaw",
      "Trailer": "https://www.youtube.com/watch?v=Mh2ebPxhoLs",
      "MoTa": "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
      "MaNhom": "GP01",
      "NgayKhoiChieu": "2018-07-29T00:00:00",
      "DanhGia": 5,
      "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/southpaw.jpg"
    },
    {
      "MaPhim": 309,
      "TenPhim": "Ngôi Nhà Có Chiếc Đồng Hồ Ma Thuật",
      "Trailer": "https://www.youtube.com/watch?v=CwQXDcvUqCw",
      "MoTa": "Lewis Barnavelt, một cậu bé mồ côi đã cố gắng giúp đỡ người chú của mình nhằm định vị lại thời gian của ngày tận thế bằng chiếc đồng hồ quyền năng và ma thuật của họ.\n",
      "MaNhom": "GP01",
      "NgayKhoiChieu": "2018-10-03T00:00:00",
      "DanhGia": 4,
      "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/ngoi-nha-co-chiec-dong-ho-ma-thuat.jpg"
    },
    {
      "MaPhim": 416,
      "TenPhim": "Fornite - Battle Royale",
      "Trailer": "https://www.youtube.com/watch?v=9dJm3PsTFMM",
      "MoTa": "A game of Epic",
      "MaNhom": "GP01",
      "NgayKhoiChieu": "2018-09-02T00:00:00",
      "DanhGia": 4,
      "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/fornite-battle-royale.jpg"
    },
    {
      "MaPhim": 417,
      "TenPhim": "Song Lang",
      "Trailer": "https://www.youtube.com/watch?v=wX8nGJFGwaU",
      "MoTa": "Bộ phim nói về nghệ thuật cải lương - loại hình nghệ thuật lâu đời truyền thống ở Việt Nam",
      "MaNhom": "GP01",
      "NgayKhoiChieu": "2018-04-10T00:00:00",
      "DanhGia": null,
      "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/song-lang.jpg"
    },
    {
      "MaPhim": 448,
      "TenPhim": "Johnny English: Tái Xuất Giang Hồ",
      "Trailer": "https://www.youtube.com/watch?v=PSnmMZ9rEbg",
      "MoTa": "Johnny English:  Tái Xuất Giang Hồ là phần thứ ba của loạt phim hài Johnny English, với Rowan Atkinson trong vai một gã bỗng dưng trở thành một điệp viên bí mật. Cuộc phiêu lưu mới bắt đầu khi một vụ điều tra hệ thống an ninh mạng cho thấy danh tính của tất cả các điệp viên đang hoạt động tại Anh, và Johnny là hy vọng cuối cùng để điều tra bí mật ấy. Dù được biết là một điệp viên nghỉ hưu nhưng đây là lần đầu tiên gã giang hồ này bắt tay động với sứ mệnh tìm kiếm kẻ tấn công. Là một người với kỹ năng ít ỏi và năng lực hạn chế, Johnny English có phải vượt qua được những thách thức trong thời buổi công nghệ hiện đại để hoàn thành sứ mệnh này thành công hay không?",
      "MaNhom": "GP01",
      "NgayKhoiChieu": null,
      "DanhGia": 2,
      "HinhAnh": "http://sv2.myclass.vn/hinhanh/phim/johnny-english-tai-xuat-giang-ho.jpg"
    },
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $(document).ready(function () {
        $('.venobox').venobox();
      });
    }, 0);
  }
}
