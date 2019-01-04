import { TestBed } from '@angular/core/testing';
import { TestingServicesRequiredModules } from '../modules/testing.services-required-modules';
import { GetBrowserIpService } from './get-browser-ip.service';

describe('GetBrowserIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestingServicesRequiredModules ]
  }));

  it('should be created', () => {
    const service: GetBrowserIpService = TestBed.get(GetBrowserIpService);
    expect(service).toBeTruthy();
  });
});
