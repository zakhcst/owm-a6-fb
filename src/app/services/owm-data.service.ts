import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { ConstantsService } from './constants.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { OwmService } from './owm.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OwmDataService {
  constructor(
    private _db: AngularFireDatabase,
    private _owm: OwmService,
    private _data: DataService
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
    return data;
  }

  checkExpired(data) {
    // expired data is when [0] is older than 3 hours
    const now = new Date().valueOf();
    const fb0 = data.list[0].dt * 1000;
    const diff = now - fb0;
    return diff < 3 * 3600 * 1000;
  }

  getData(cityId) {
    return this._data.getData(cityId).pipe(
      switchMap(
        (fbdata: any) => {
          if (fbdata === null || this.checkExpired(fbdata)) {
            console.log('(fbdata === null || this.checkExpired(fbdata))');
            console.log(fbdata);
            console.log(this.checkExpired(fbdata));
            return this._owm.getDefaultData(cityId).pipe(
              map(res => this.setListByDate(res)),
              switchMap(res => this._data.setData(cityId, res)),
              switchMap(r => this._data.getData(cityId))
            );
          }
          console.log(
            'pass through ! (fbdata === null || this.checkExpired(fbdata))'
          );
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
