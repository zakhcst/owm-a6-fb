import { TestBed } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { OwmService } from './owm.service';

describe('OwmService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestingServicesRequiredModules ]
  }));

  it('should be created', () => {
    const service: OwmService = TestBed.get(OwmService);
    expect(service).toBeTruthy();
  });
});
