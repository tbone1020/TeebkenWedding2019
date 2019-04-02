import { TestBed, inject } from '@angular/core/testing';

import { TodaysDateService } from './todays-date.service';

describe('TodaysDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodaysDateService]
    });
  });

  it('should be created', inject([TodaysDateService], (service: TodaysDateService) => {
    expect(service).toBeTruthy();
  }));
});
