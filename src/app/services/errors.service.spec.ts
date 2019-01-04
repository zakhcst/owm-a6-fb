import { TestBed } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { ErrorsService } from './errors.service';
import { NgxsModule } from '@ngxs/store';
import { AppErrorsState } from '../states/app.state';

describe('ErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestingServicesRequiredModules,
      NgxsModule.forRoot([ AppErrorsState])
    ],
  }));

  it('should be created', () => {
    const service: ErrorsService = TestBed.get(ErrorsService);
    expect(service).toBeTruthy();
  });
});
