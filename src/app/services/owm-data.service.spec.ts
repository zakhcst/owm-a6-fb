import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { OwmDataService } from './owm-data.service';
import { NgxsModule } from '@ngxs/store';
import { AppHistoryState } from '../states/app.state';

describe('OwmDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AppServivesModules,
        NgxsModule.forRoot([AppHistoryState])
      ]
    })
  );

  it('should be created', () => {
    const service: OwmDataService = TestBed.get(OwmDataService);
    expect(service).toBeTruthy();
  });
});
