import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { OwmService } from './owm.service';
import { DataService } from './data.service';
import { CitiesService } from './cities.service';
import { OwmFallbackDataService } from './owm-fallback-data.service';
import { ErrorsService } from './errors.service';
@Injectable({
  providedIn: 'root'
})
export class OwmDataService {
  constructor(
    private _owm: OwmService,
    private _fb: DataService,
    private _cities: CitiesService,
    private _owmFallback: OwmFallbackDataService,
    private _errors: ErrorsService
  ) {}

  // Caching the data for 3h
  // in order to prevent exceeding OWM requsts dev quote.
  // The additional logic for processing/reformating the data
  // is required in the front end in order to avoid
  // http requests from CF
  getData(cityId) {
    return this._cities.updateReads(cityId).pipe(
      switchMap(() => from(this._fb.getData(cityId))),
      switchMap((fbdata: any) => {
        if (fbdata !== null && this.isNotExpired(fbdata)) {
          return of(fbdata);
        }
        return this.requestNewOwmData(cityId).pipe(switchMap(() => of(fbdata)));
      }),
      catchError(err => {
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmDataService:getData:_fb.getData: ' + err.message
        });
        return this._owmFallback.getData();
      })
    );
  }

  requestNewOwmData(cityId) {
    return this._owm.getData(cityId).pipe(
      map(res => this.setListByDate(res)),
      switchMap(res => from(this._fb.setData(cityId, res)))
    );
  }

  setListByDate(data) {
    data = data || { list: [] };
    data.listByDate = data.list.reduce((accumulator, item) => {
      const dateObj = new Date(item.dt * 1000);
      const hour = dateObj.getUTCHours();
      const date = dateObj.setHours(0);

      if (accumulator[date]) {
        accumulator[date][hour] = item;
      } else {
        accumulator[date] = {};
        accumulator[date][hour] = item;
      }
      return accumulator;
    }, {});
    // 'data.list' is kept for testing only, otherwise is not needed anymore
    data.updated = new Date().valueOf();
    return data;
  }

  isNotExpired(data): boolean {
    // expired data is when [0] is older than 3 hours
    const now = new Date().valueOf();
    const firstSample =
      (data.list && data.list.length > 0 && data.list[0].dt
        ? data.list[0].dt
        : 0) * 1000;
    const diff = now - (data.updated || firstSample);
    return diff < 3 * 3600 * 1000; // 3 hours
  }
}
