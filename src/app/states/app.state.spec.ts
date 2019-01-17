import { TestBed, async } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';

import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment.prod';

import { AppHistoryState, AppErrorsState } from './app.state';
import { GetBrowserIpService } from '../services/get-browser-ip.service';
import { SnackbarService } from '../services/snackbar.service';

import {
  MockAngularFireService,
  MockSnackbarService,
  MockGetBrowserIpService
} from '../services/testing.services.mocks';

import { NgxsModule, Store } from '@ngxs/store';
import { SetHistoryState, SetErrorsState } from './app.actions';
import { AppHistoryPayloadModel, AppErrorPayloadModel } from './app.models';

describe('State store', () => {
  let mockSnackbarService: any;
  let mockAngularFireService: any;
  let store: Store;

  const mockHistoryData: AppHistoryPayloadModel = {
    cityId: 'cityId',
    cityName: 'cityname',
    countryISO2: 'iso2',
  };
  const mockErrorData: AppErrorPayloadModel = {
    userMessage: 'userMessage',
    logMessage: 'logMessage',
  };

  beforeEach(async(() => {
    mockSnackbarService = new MockSnackbarService();
    mockAngularFireService = new MockAngularFireService();

    TestBed.configureTestingModule({
      imports: [
        TestingServicesRequiredModules,
        NgxsModule.forRoot([AppHistoryState, AppErrorsState], {
          developmentMode: !environment.production
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      providers: [
        Store,
        { provide: AngularFireDatabase, useValue: mockAngularFireService },
        { provide: SnackbarService, useValue: mockSnackbarService },
        { provide: GetBrowserIpService, useValue: new MockGetBrowserIpService() }
      ]
    });

    store = TestBed.get(Store);
  }));

  it('should dispatch a new AppHistoryState ', async(() => {
    store
      .selectOnce(state => state.activity.sessionHistory)
      .subscribe(state0 => {

        expect(state0.length).toBe(1);
        expect(state0[0].cityId).toBe('Init');
        store.dispatch(new SetHistoryState(mockHistoryData)).subscribe(() => {

          store
            .selectOnce(state => state.activity.sessionHistory)
            .subscribe(state1 => {
              expect(state1.length).toBe(2);
              expect(state1[1].cityId).toEqual(mockHistoryData.cityId);
            });
        });
      });
  }));

  it('should dispatch a new AppHistoryState', async(() => {
    store
      .selectOnce(state => state.errors.sessionErrors)
      .subscribe(state0 => {

        expect(state0.length).toBe(1);
        expect(state0[0].logMessage).toBe('Init');
        store.dispatch(new SetErrorsState(mockErrorData)).subscribe(() => {

          store
            .selectOnce(state => state.errors.sessionErrors)
            .subscribe(state1 => {
              expect(state1.length).toBe(2);
              expect(state1[1].logMessage).toEqual(mockErrorData.logMessage);
            });
        });
      });
  }));
});
