import { TestBed } from '@angular/core/testing';

import { OwmStatsService } from './owm-stats.service';

describe('OwmStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwmStatsService = TestBed.get(OwmStatsService);
    expect(service).toBeTruthy();
  });
});
