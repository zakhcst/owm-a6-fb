import { TestBed } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { HistoryService } from './history.service';

describe('HistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestingServicesRequiredModules ]
  }));

  it('should be created', () => {
    const service: HistoryService = TestBed.get(HistoryService);
    expect(service).toBeTruthy();
  });
});
