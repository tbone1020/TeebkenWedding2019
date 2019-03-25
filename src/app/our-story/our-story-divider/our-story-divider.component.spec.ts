import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoryDividerComponent } from './our-story-divider.component';

describe('OurStoryDividerComponent', () => {
  let component: OurStoryDividerComponent;
  let fixture: ComponentFixture<OurStoryDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStoryDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStoryDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
