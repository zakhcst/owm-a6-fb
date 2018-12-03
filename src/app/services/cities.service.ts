import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';
import { switchMap, take, share } from 'rxjs/operators';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private _db: AngularFireDatabase) {}

  getData() {
    return from(this._db.object('/cities').valueChanges()).pipe(share());
  }

  updateReads(cityId) {
    const ref = this._db.object(`/cities/${cityId}`);
    return ref.valueChanges().pipe(
      take(1),
      switchMap((city: City) => {
        return from(ref.update({ r: (city.r || 0) + 1 }));
      })
    );
  }
}
