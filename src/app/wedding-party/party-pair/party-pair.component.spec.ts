import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPairComponent } from './party-pair.component';

describe('PartyPairComponent', () => {
  let component: PartyPairComponent;
  let fixture: ComponentFixture<PartyPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
