import { TestBed } from '@angular/core/testing';

import { OffertingsService } from './offertings.service';

describe('OffertingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffertingsService = TestBed.get(OffertingsService);
    expect(service).toBeTruthy();
  });
});
