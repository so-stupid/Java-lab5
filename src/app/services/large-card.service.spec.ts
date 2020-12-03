import { TestBed } from '@angular/core/testing';

import { LargeCardService } from './large-card.service';

describe('LargeCardService', () => {
  let service: LargeCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LargeCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
