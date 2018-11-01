import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';

import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });
});
