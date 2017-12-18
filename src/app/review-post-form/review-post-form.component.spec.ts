import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPostFormComponent } from './review-post-form.component';

describe('ReviewPostFormComponent', () => {
  let component: ReviewPostFormComponent;
  let fixture: ComponentFixture<ReviewPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
