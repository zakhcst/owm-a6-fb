import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { OwmService } from './owm.service';
import { DataService } from './data.service';
import { CitiesService } from './cities.service';
import { OwmFallbackDataService } from './owm-fallback-data.service';

@Injectable({
  providedIn: 'root'
})
export class OwmDataService {
  constructor(
    private _owm: OwmService,
    private _data: DataService,
    private _cities: CitiesService,
    private  _owmFallback: OwmFallbackDataService
  ) {}

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

  isExpired(data): boolean {
    // expired data is when [0] is older than 3 hours
    const now = new Date().valueOf();
    const firstSample = data.list[0].dt * 1000;
    const diff = now - (data.updated || firstSample);
    return diff > 3 * 3600 * 1000; // 3 hours
  }

  // Caching the data for 3h
  // in order to prevent exceeding OWM requsts dev quote.
  getData(cityId) {
    return this._cities.updateReads(cityId)
    .pipe(
      switchMap(() => from(this._data.getData(cityId))),
      switchMap((fbdata: any) => {
        if (fbdata === null || this.isExpired(fbdata)) {
          return this._owm.getData(cityId).pipe(
            switchMap(res => of(this.setListByDate(res))),
            switchMap(res => from(this._data.setData(cityId, res))),
            switchMap(() => this._data.getData(cityId))
          );
        }
        return of(fbdata);
      }),
      catchError(err => {
        console.log('ERROR: OwmDataService:', err);
        return this._owmFallback.getData();
      })
    );
  }
}
