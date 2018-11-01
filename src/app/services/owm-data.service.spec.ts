import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { OwmDataService } from './owm-data.service';

describe('OwmDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: OwmDataService = TestBed.get(OwmDataService);
    expect(service).toBeTruthy();
  });
});
