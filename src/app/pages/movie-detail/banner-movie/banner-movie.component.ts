import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-banner-movie',
  templateUrl: './banner-movie.component.html',
  styleUrls: ['./banner-movie.component.css'],
})
export class BannerMovieComponent implements OnInit {
  @Input() movieDetail;
  ratingStar:string = '';
  constructor() { }

  ngOnInit() {
    // console.log(this.movieDetail)
    $( document ).ready(function() {
      $('.venobox').venobox();
    });
    this.renderStar();
  }
  renderStar(){
    this.ratingStar = '';
    if(this.movieDetail.DanhGia){
      for(let i=0; i<this.movieDetail.DanhGia; i++){
        this.ratingStar += `<i class="fa fa-star"></i>`
      }
      for(let k=5; k>this.movieDetail.DanhGia; k--){
        this.ratingStar += `<i class="fa fa-star-o"></i>`
      }
    }else{
      this.ratingStar = 'Chưa có đánh giá'
    }
  }

}
