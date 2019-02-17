import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCoverComponent } from './banner-cover.component';

describe('BannerCoverComponent', () => {
  let component: BannerCoverComponent;
  let fixture: ComponentFixture<BannerCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
