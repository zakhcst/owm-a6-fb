import { TestBed } from '@angular/core/testing';

import { OwmStatsService } from './owm-stats.service';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';

describe('OwmStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestingServicesRequiredModules ]
  }));

  it('should be created', () => {
    const service: OwmStatsService = TestBed.get(OwmStatsService);
    expect(service).toBeTruthy();
  });
});
