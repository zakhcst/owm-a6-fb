import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  constructor(private _db: AngularFireDatabase) {}

  setData(data) {
    const refKey = ConstantsService.historyData + '/' + data.ip.replace(/\./g, '-') + '/' + data.time;
    console.log(refKey);
    const ref = this._db.object(refKey);
    return ref.set(data.cityId);
  }
}
