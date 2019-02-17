import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PagesLayoutComponent } from './pages-layout/pages-layout.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { CarouselContentComponent } from './index/carousel/carousel-content/carousel-content.component';
import { CarouselNavtabComponent } from './index/carousel/carousel-navtab/carousel-navtab.component';
import { MoviesComponent } from './index/movies/movies.component';
import { MovieNowShowingComponent } from './index/movies/movie-now-showing/movie-now-showing.component';
import { MovieNewReleaseComponent } from './index/movies/movie-new-release/movie-new-release.component';
import { MovieItemComponent } from './index/movies/movie-item/movie-item.component';
import { BannerCoverComponent } from './index/banner-cover/banner-cover.component';
import { NewsComponent } from './index/news/news.component';
import { NewsFilmComponent } from './index/news/news-film/news-film.component';
import { NewsReviewComponent } from './index/news/news-review/news-review.component';
import { NewsPromotionComponent } from './index/news/news-promotion/news-promotion.component';
import { NewsItemComponent } from './index/news/news-item/news-item.component';
import { BannerMovieComponent } from './movie-detail/banner-movie/banner-movie.component';
import { ShowDayComponent } from './movie-detail/show-day/show-day.component';
import { BookingSeatComponent } from './movie-detail/booking-seat/booking-seat.component';
import { SeatItemComponent } from './movie-detail/booking-seat/seat-item/seat-item.component';
import { RouterModule, } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingMovieComponent } from './movie-detail/rating-movie/rating-movie.component';
import { CommentMovieComponent } from './movie-detail/rating-movie/comment-movie/comment-movie.component';
import { PopcornDrinkItemComponent } from './movie-detail/booking-seat/popcorn-drink-item/popcorn-drink-item.component';
import { PagesRoutingModule } from './pages-routing/pages-routing.module';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
// import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    // Page Primary
    HeaderComponent, 
    FooterComponent, 
    IndexComponent, 
    MovieDetailComponent, 
    PagesLayoutComponent, 
    // Carousel Component
    CarouselComponent, 
    CarouselContentComponent, 
    CarouselNavtabComponent, 
    // Movie Component
    MoviesComponent, 
    MovieNowShowingComponent, 
    MovieNewReleaseComponent, 
    MovieItemComponent, 
    // Banner component
    BannerCoverComponent, 
    // News Component 
    NewsComponent, 
    NewsFilmComponent, 
    NewsReviewComponent, 
    NewsPromotionComponent, 
    NewsItemComponent, 
    // MOVIE DETAIL COMPONENT
    BannerMovieComponent, 
    ShowDayComponent, 
    BookingSeatComponent, 
    SeatItemComponent, 
    RatingMovieComponent, 
    CommentMovieComponent,
    PopcornDrinkItemComponent,
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CarouselModule,
    PagesRoutingModule,

  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    IndexComponent, 
    MovieDetailComponent,
    PagesLayoutComponent,
    // News Component 
    NewsItemComponent, 
    BookingHistoryComponent
  ]
})
export class PagesModule { }
