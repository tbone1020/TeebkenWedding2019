import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HimHerBioComponent } from './him-her-bio.component';

describe('HimHerBioComponent', () => {
  let component: HimHerBioComponent;
  let fixture: ComponentFixture<HimHerBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HimHerBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HimHerBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
