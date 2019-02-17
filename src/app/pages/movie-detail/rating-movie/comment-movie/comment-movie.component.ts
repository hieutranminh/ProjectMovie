import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-movie',
  templateUrl: './comment-movie.component.html',
  styleUrls: ['./comment-movie.component.css']
})
export class CommentMovieComponent implements OnInit {
  @Input() itemComment;
  constructor() { }

  ngOnInit() {
  }

}
