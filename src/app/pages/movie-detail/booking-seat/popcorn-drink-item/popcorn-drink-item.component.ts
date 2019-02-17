import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popcorn-drink-item',
  templateUrl: './popcorn-drink-item.component.html',
  styleUrls: ['./popcorn-drink-item.component.css']
})
export class PopcornDrinkItemComponent implements OnInit {
  @Input() itemFood;
  @Output() eventTangGiam = new EventEmitter();
  status:boolean;
  constructor() { }

  ngOnInit() {
  }

  Giam(){
    this.status = false;
    this.eventTangGiam.emit({
      obj:this.itemFood,
      stt:this.status
    })
  }
  Tang(){
    this.status = true;
    this.eventTangGiam.emit({
      obj:this.itemFood,
      stt:this.status
    })
  }
}
