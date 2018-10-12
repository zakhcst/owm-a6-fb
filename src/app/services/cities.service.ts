import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private _db: AngularFireDatabase) {}

  getData() {
    return this._db
      .list('/eu-capitals')
      .valueChanges()
      .pipe(
        map(arr => {
          return arr.sort((a: City, b: City) => (a.name < b.name ? -1 : 1));
        })
      );
    // error handling
  }
}
