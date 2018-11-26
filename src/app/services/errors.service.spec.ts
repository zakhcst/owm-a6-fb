import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { ErrorsService } from './errors.service';
import { NgxsModule } from '@ngxs/store';
import { AppErrorsState } from '../states/app.state';

describe('ErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules,
      NgxsModule.forRoot([ AppErrorsState])
    ],
  }));

  it('should be created', () => {
    const service: ErrorsService = TestBed.get(ErrorsService);
    expect(service).toBeTruthy();
  });
});
