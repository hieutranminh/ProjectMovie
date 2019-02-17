import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-carousel-navtab',
  templateUrl: './carousel-navtab.component.html',
  styleUrls: ['./carousel-navtab.component.css']
})
export class CarouselNavtabComponent implements OnInit {
  statusSearch:boolean =  false;
  ListMovie:Array<any> = [];
  ListSearch:Array<any> = [];
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getListMovie().subscribe(
      res => {
        this.ListMovie = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  SearchMovie(keyword){
    if(keyword !== ''){
      this.statusSearch = true;
      this.ListSearch = [];
      keyword = keyword.toLowerCase();
      keyword = keyword.trim();
      keyword = keyword.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      keyword = keyword.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      keyword = keyword.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      keyword = keyword.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      keyword = keyword.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      keyword = keyword.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      keyword = keyword.replace(/đ/g, "d");
      keyword = keyword.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
      keyword = keyword.replace(/-+-/g, "-");
      keyword = keyword.replace(/^\-+|\-+$/g, "");
      for(let index in this.ListMovie){
        let ListEmpty = this.ListMovie[index].TenPhim;
        ListEmpty = ListEmpty.toLowerCase();
        ListEmpty = ListEmpty.trim();
        ListEmpty = ListEmpty.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        ListEmpty = ListEmpty.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        ListEmpty = ListEmpty.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        ListEmpty = ListEmpty.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        ListEmpty = ListEmpty.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        ListEmpty = ListEmpty.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        ListEmpty = ListEmpty.replace(/đ/g, "d");
        ListEmpty = ListEmpty.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
        ListEmpty = ListEmpty.replace(/-+-/g, "-");
        ListEmpty = ListEmpty.replace(/^\-+|\-+$/g, "");
        if(ListEmpty.indexOf(keyword) !== -1){
          this.ListSearch.push(this.ListMovie[index]);
        }
      }
    }
    else{
      this.statusSearch = false;
    }
  }
}
