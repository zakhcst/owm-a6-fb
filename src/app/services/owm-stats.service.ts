import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OwmStatsService {
  constructor(private _db: AngularFireDatabase) {}

  getData() {
    return this._db.object('/stats').valueChanges();
  }
}
