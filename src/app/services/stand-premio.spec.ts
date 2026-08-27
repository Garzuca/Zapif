import { TestBed } from '@angular/core/testing';

import { StandPremioService } from './stand-premio';

describe('StandPremioService', () => {
  let service: StandPremioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandPremioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
