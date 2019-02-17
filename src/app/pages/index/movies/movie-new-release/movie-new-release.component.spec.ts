import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNewReleaseComponent } from './movie-new-release.component';

describe('MovieNewReleaseComponent', () => {
  let component: MovieNewReleaseComponent;
  let fixture: ComponentFixture<MovieNewReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieNewReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNewReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
