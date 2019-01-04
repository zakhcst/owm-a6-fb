// import 'zone.js/dist/zone-testing';
import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AppSnackBarInnerComponent } from '../components/app-snack-bar-inner/app-snack-bar-inner.component';
// import { MatSnackBar } from '@angular/material'

describe('SnackbarService', () => {
  let service: SnackbarService;
  // let service: SnackbarService;
  let originalJasmineTimeout: any;
  const testMessage = { message: `Message: Test`, class: 'snackbar__info' };

  beforeAll(() => {
    originalJasmineTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    console.log('originalJasmineTimeout', originalJasmineTimeout);
  });

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [AppSnackBarInnerComponent],
      imports: [TestingServicesRequiredModules, AngularMaterialModule],
      providers: [SnackbarService]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [AppSnackBarInnerComponent]
        }
      })
      .compileComponents();
  });

  beforeEach(async () => {
    service = TestBed.get(SnackbarService);
    // service = new SnackbarService(new MatSnackBar());
  });

  afterAll(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeout;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should init q === [] && should increase on second call before timeout', async(() => {
  //   const ref = service.ref(testMessage);
  //   ref.afterDismissed().subscribe(
  //     () => {
  //       expect(service.q.length).toBe(1, 'after 2500 OK');
  //       console.log('after 2500');
  //     },
  //     err => {
  //       console.log('after 2500', err);
  //     }
  //   );
  // }));
});
