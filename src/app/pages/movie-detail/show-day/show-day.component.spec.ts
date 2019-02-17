import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDayComponent } from './show-day.component';

describe('ShowDayComponent', () => {
  let component: ShowDayComponent;
  let fixture: ComponentFixture<ShowDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
