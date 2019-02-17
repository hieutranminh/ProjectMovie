import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/model/movie.model';
import { Subscription } from 'rxjs';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit,OnDestroy {
  idMovie:string;
  getIdUrlSubscription:Subscription;
  getMovieDetailSubscription:Subscription;
  constructor(private _activatedRoute:ActivatedRoute, private _movieService: MovieService) { }
  movieDetail:Movie[] = [];
  ngOnInit() {
    $('body,html').scrollTop(0)
    this.getIdUrlSubscription = this._activatedRoute.params.subscribe(
      res=>{
        this.idMovie = res.id;
        this.getMovieDetailSubscription = this._movieService.getMovieDetail(this.idMovie).subscribe(
          res=>{
            this.movieDetail.push(res);
            // this._movieService.MaPhimOutPut.emit(res);
            localStorage.setItem('detailMovie',JSON.stringify(res));
            // console.log(res)
          },
          err=>{
            console.log(err);
          }
        )
      },
      err=>{
        console.log(err);
      }
    )
  }
  ngOnDestroy(){
    if(this.getMovieDetailSubscription){
      this.getMovieDetailSubscription.unsubscribe();
    }
  }
}
