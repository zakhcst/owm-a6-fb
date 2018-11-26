import { TestBed } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';
import { AppServivesModules } from '../modules/testingServices';


describe('SnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: SnackbarService = TestBed.get(SnackbarService);
    expect(service).toBeTruthy();
  });
});
