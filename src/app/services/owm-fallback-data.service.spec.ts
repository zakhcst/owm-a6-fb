import { TestBed } from '@angular/core/testing';

import { OwmFallbackDataService } from './owm-fallback-data.service';

describe('OwmFallbackDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwmFallbackDataService = TestBed.get(OwmFallbackDataService);
    expect(service).toBeTruthy();
  });
});
