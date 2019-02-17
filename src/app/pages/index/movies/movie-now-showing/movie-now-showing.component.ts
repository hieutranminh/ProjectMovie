import { Component, OnInit, OnDestroy } from '@angular/core';
import $ from 'jquery';
declare var $: any;
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-movie-now-showing',
  templateUrl: './movie-now-showing.component.html',
  styleUrls: ['./movie-now-showing.component.css']
})
export class MovieNowShowingComponent implements OnInit,OnDestroy {
  customOptions: any = {
    loop: true,
    dots: true,
    margin: 20,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
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
  listMovie: Movie[] = [];
  getListMovieSubscription: Subscription;
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.getListMovieSubscription = this._movieService.getListMovie().subscribe(
      res => {
        this.listMovie = res;
        setTimeout(() => {
          $(document).ready(function () {
            $('.venobox').venobox();
          });
        }, 0);
      },
      err => {
        console.log(err)
      }
    )

  }
  ngOnDestroy(){
    if(this.getListMovieSubscription){
      this.getListMovieSubscription.unsubscribe();
    }
  }
}
