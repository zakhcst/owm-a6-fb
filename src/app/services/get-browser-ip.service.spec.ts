import { TestBed } from '@angular/core/testing';
import { AppServivesModules } from '../modules/testingServices';
import { GetBrowserIpService } from './get-browser-ip.service';

describe('GetBrowserIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppServivesModules ]
  }));

  it('should be created', () => {
    const service: GetBrowserIpService = TestBed.get(GetBrowserIpService);
    expect(service).toBeTruthy();
  });
});
