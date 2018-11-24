import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { OwmFallbackDataService } from './owm-fallback-data.service';

describe('OwmFallbackDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: OwmFallbackDataService = TestBed.get(OwmFallbackDataService);
    expect(service).toBeTruthy();
  });
});
