import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-content',
  templateUrl: './carousel-content.component.html',
  styleUrls: ['./carousel-content.component.css']
})
export class CarouselContentComponent implements OnInit {
  // Cách 1
  //  hinha:any = {'background-image': 'url(https://r.hswstatic.com/w_907/gif/f3baeb83ca8e3063f2461e01eb68f963-MiniCrush-1600x900.png)'}
  // Cách 2
  SlideArr:any = [
    {
      "TenPhim": "The Hitmans Bodyguard (2018)",
      "Trailer": "https://www.youtube.com/watch?v=F4Afusxc2SM",
      "HinhAnh": "../../../../assets/images/slide_1.jpg"
    },
    {
      "TenPhim": "Spider Man 3",
      "Trailer": "https://www.youtube.com/watch?v=MTIP-Ih_GR0",
      "HinhAnh": "../../../../assets/images/slide_2.jpg"
    },
    {
      "TenPhim": "CAPTAIN AMERICA 3: NỘI CHIẾN SIÊU ANH HÙNG",
      "Trailer": "https://www.youtube.com/watch?v=dKrVegVI0Us",
      "HinhAnh": "../../../../assets/images/slide_3.jpg"
    },
  ]
  hinh = this.SlideArr[0];
  constructor() { }

  ngOnInit() {
    // console.log(this.hinh.HinhAnh)
  }

}
