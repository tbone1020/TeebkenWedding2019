import { TestBed, inject } from '@angular/core/testing';

import { WeddingDateService } from './wedding-date.service';

describe('WeddingDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeddingDateService]
    });
  });

  it('should be created', inject([WeddingDateService], (service: WeddingDateService) => {
    expect(service).toBeTruthy();
  }));
});
