import { TestBed, async } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { MockAngularFireService } from './testing.services.mocks';
import { CitiesService } from './cities.service';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule
} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { CityModel } from '../models/cities.model';

describe('CitiesService', () => {
  let service: CitiesService;
  let mockAngularFireService: MockAngularFireService;
  const testData: CityModel = {
    name: 'nameString',
    country: 'countryString',
    iso2: 'iso2String',
  };

  beforeEach(() => {
    mockAngularFireService = new MockAngularFireService();

    TestBed.configureTestingModule({
      imports: [
        TestingServicesRequiredModules,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
      providers: [
        CitiesService,
        { provide: AngularFireDatabase, useValue: mockAngularFireService }
      ]
    });
    service = TestBed.get(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update reads', async(() => {
    mockAngularFireService.fbdata = testData;
    service.updateReads('cityId').subscribe(response1 => {
      expect(<string>(<any>response1)).toBe('Resolved');
      expect(mockAngularFireService.fbdata.r).toBe(1);
      service.updateReads('cityId').subscribe(response2 => {
        expect(<string>(<any>response2)).toBe('Resolved');
        expect(mockAngularFireService.fbdata.r).toBe(2);
      });
    });
  }));

  it('should get reads', async(() => {
    mockAngularFireService.fbdata = testData;
    service.updateReads('cityId').subscribe(response1 => {
      expect(<string>(<any>response1)).toBe('Resolved');
      expect(mockAngularFireService.fbdata.r).toBe(1);

      service.getData().subscribe(response2 => {
        expect(<number><any>response2.r).toBe(1);
      });
    });
  }));

});
