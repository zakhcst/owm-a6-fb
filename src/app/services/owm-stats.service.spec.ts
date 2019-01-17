import { TestBed, async } from '@angular/core/testing';
import { OwmStatsService } from './owm-stats.service';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule
} from '@angular/fire/database';
import {
  MockAngularFireService,
  MockErrorsService
} from './testing.services.mocks';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { ErrorsService } from './errors.service';

describe('OwmStatsService', () => {
  let service: OwmStatsService;
  const mockErrorsService = new MockErrorsService();
  const mockAngularFireService = new MockAngularFireService();

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        TestingServicesRequiredModules,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      providers: [
        OwmStatsService,
        { provide: AngularFireDatabase, useValue: mockAngularFireService },
        { provide: ErrorsService, useValue: mockErrorsService }
      ]
    });
    service = TestBed.get(OwmStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fail when no data is received', (done: DoneFn) => {
    mockErrorsService.messages = [];
    service.getData().subscribe(
      () => {
        fail();
        done();
      },
      err => {
        expect(mockErrorsService.messages.length).toBeTruthy(1);
        done();
      }
    );
  });

  it('it should get data', (done: DoneFn) => {
    mockErrorsService.messages = [];
    mockAngularFireService.fbdata = 'test data';
    service.getData().subscribe(
      (response) => {
        expect(mockErrorsService.messages.length).toBe(0);
        expect(response).toBe(mockAngularFireService.fbdata);
        done();
      },
      (err) => {
        fail();
        done();
      }
    );
  });
});
