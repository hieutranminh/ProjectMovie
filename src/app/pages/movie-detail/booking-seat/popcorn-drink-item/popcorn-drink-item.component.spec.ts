import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopcornDrinkItemComponent } from './popcorn-drink-item.component';

describe('PopcornDrinkItemComponent', () => {
  let component: PopcornDrinkItemComponent;
  let fixture: ComponentFixture<PopcornDrinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcornDrinkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopcornDrinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
