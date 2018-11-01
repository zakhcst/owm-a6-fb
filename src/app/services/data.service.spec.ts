import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppServivesModules]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
