import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body,html').scrollTop(0)
  }

}
