import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { OwmService } from './owm.service';

describe('OwmService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: OwmService = TestBed.get(OwmService);
    expect(service).toBeTruthy();
  });
});
