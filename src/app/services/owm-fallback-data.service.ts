import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { merge, delay, switchMap } from 'rxjs/operators';
import { throwError, from, of, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OwmFallbackDataService {
  constructor(private _http: HttpClient) {}

  getData() {
    // return this._http.get(ConstantsService.owmFallbackData);
    return throwError(new Error('OwmFallbackDataService'));
  }
}
