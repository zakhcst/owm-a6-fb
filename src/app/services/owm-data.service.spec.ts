import { TestBed } from '@angular/core/testing';

import { OwmDataService } from './owm-data.service';

describe('OwmDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwmDataService = TestBed.get(OwmDataService);
    expect(service).toBeTruthy();
  });
});
