import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { HistoryService } from './history.service';

describe('HistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: HistoryService = TestBed.get(HistoryService);
    expect(service).toBeTruthy();
  });
});
