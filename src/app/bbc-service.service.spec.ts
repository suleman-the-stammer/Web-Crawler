import { TestBed } from '@angular/core/testing';

import { BbcServiceService } from './bbc-service.service';

describe('BbcServiceService', () => {
  let service: BbcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
