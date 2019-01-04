import { TestBed } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { OwmFallbackDataService } from './owm-fallback-data.service';

describe('OwmFallbackDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestingServicesRequiredModules ]
  }));

  it('should be created', () => {
    const service: OwmFallbackDataService = TestBed.get(OwmFallbackDataService);
    expect(service).toBeTruthy();
  });
});
