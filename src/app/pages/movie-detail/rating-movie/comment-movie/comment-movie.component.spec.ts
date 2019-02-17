import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentMovieComponent } from './comment-movie.component';

describe('CommentMovieComponent', () => {
  let component: CommentMovieComponent;
  let fixture: ComponentFixture<CommentMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
