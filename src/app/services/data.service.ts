import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _db: AngularFireDatabase) {}

  getData(cityId) {
    return this._db.object(cityId).valueChanges();
  }
  setData(cityId, data) {
    const ref = this._db.object(cityId);
    return ref.set(data);
  }
}
