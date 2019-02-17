import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavtabComponent } from './carousel-navtab.component';

describe('CarouselNavtabComponent', () => {
  let component: CarouselNavtabComponent;
  let fixture: ComponentFixture<CarouselNavtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNavtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
