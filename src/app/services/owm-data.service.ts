import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OwmService } from './owm.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OwmDataService {
  constructor(private _owm: OwmService, private _data: DataService) {}

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
    data.updated = new Date().valueOf();
    return data;
  }

  public isExpired(data): boolean {
    // expired data is when [0] is older than 3 hours
    const now = new Date().valueOf();
    const firstSample = data.list[0].dt * 1000;
    const diff = now - (data.updated || firstSample);
    return diff > 3 * 3600 * 1000; // 3 hours
  }

  getData(cityId) {
    console.log('getData OwmDataService')
    return this._data.getData(cityId).pipe(
      switchMap(
        (fbdata: any) => {
          if (fbdata === null || this.isExpired(fbdata)) {
            // return this._owm.getDefaultData(cityId).pipe(
            return this._owm.getData(cityId).pipe(
              switchMap(res => of(this.setListByDate(res))),
              switchMap(res => of(this._data.setData(cityId, res))),
              switchMap(() => this._data.getData(cityId))
            );
          }
          return of(fbdata);
        }
        // Error handling...
        // ,
        // catchError(e => {
        //   console.log('ERR switchMap 1', e);
        //   return of(e);
        // }
        // )
      )
    );
  }
}