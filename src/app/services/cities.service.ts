import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _db: AngularFireDatabase) {}

  getData() {
    return this._db.object('/cities').valueChanges();
  }
}
