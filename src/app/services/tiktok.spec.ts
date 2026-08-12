import { TestBed } from '@angular/core/testing';

import { Tiktok } from './tiktok';

describe('Tiktok', () => {
  let service: Tiktok;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tiktok);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
