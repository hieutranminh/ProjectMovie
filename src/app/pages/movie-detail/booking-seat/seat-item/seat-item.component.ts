import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.css']
})
export class SeatItemComponent implements OnInit {
  @Input() gheDetail;
  @Output() gheOutPut = new EventEmitter();
  statusGhe:boolean = false;
  constructor() { }

  ngOnInit() {
    // console.log(this.gheDetail)
  }

  chonGhe(){
    this.statusGhe = !this.statusGhe;
    this.gheOutPut.emit({
      stt:this.statusGhe,
      objGhe:this.gheDetail
    })
  }
}
