import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { of, Observable } from 'rxjs';
import { switchMap, shareReplay, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetBrowserIpService {
  private _cache$: Observable<string>;

  constructor(private _http: HttpClient) {}

  getIP() {
    if (!this._cache$) {
      this._cache$ = this.requestIP().pipe(
        switchMap((ipString: string) => {
          if (this.validateIP(ipString)) {
            return of(ipString);
          }
          return of(null);
        }),
        shareReplay(1)
      );
    }
    return this._cache$;
  }

  requestIP(): Observable<string> {
    return this._http
      .get(ConstantsService.getIpUrl, { responseType: 'text' })
      .pipe(retry(3));
  }

  validateIP(testString: string): boolean {
    return ConstantsService.ipv4RE.test(testString);
  }
}
