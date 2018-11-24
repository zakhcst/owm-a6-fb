import { TestBed } from '@angular/core/testing';

import { OwmStatsService } from './owm-stats.service';
import { AppServivesModules } from '../modules/testingServices';

describe('OwmStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: OwmStatsService = TestBed.get(OwmStatsService);
    expect(service).toBeTruthy();
  });
});
