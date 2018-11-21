import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { of, Observable } from 'rxjs';
import { switchMap, shareReplay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetBrowserIpService {
  private _cache$: Observable<string>;
  countCache = 0;
  countRequests = 0;

  constructor(private _http: HttpClient) {}

  getIP() {
    if (!this._cache$) {
      this._cache$ = this.requestIP().pipe(shareReplay(1));
      this.countRequests++;
    } else {
      this.countCache++;
    }
    console.log(`getIP ${this.countCache + this.countRequests} Cache ${this.countCache} requests ${this.countRequests}`);
    return this._cache$;
  }

  requestIP() {
    return this._http.get(ConstantsService.getIpUrl, { responseType: 'text' })
      .pipe(
        switchMap(ipString => {
          if (this.validateIP(ipString)) {
            return of(ipString);
          }
          return of(null);
        })
      );
  }

  validateIP(testString) {
    return ConstantsService.ipRE.test(testString);
  }
}
