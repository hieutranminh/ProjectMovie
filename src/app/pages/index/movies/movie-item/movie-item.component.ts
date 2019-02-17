import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieItem;
  constructor() { }

  ngOnInit() {

    
  }

}
