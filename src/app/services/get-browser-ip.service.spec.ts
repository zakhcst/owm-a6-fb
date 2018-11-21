import { TestBed } from '@angular/core/testing';

import { GetBrowserIpService } from './get-browser-ip.service';

describe('GetBrowserIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBrowserIpService = TestBed.get(GetBrowserIpService);
    expect(service).toBeTruthy();
  });
});
