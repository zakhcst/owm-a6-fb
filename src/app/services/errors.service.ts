import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ConstantsService } from './constants.service';
import { Store } from '@ngxs/store';
import { SetErrorsState } from '../states/app.actions';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  constructor(private _db: AngularFireDatabase, private _store: Store) {}

  setDataToFB(data) {
    const refKey =
      ConstantsService.errorsLog +
      '/' +
      data.ip.replace(/\./g, '-') +
      '/' +
      data.time;
    const ref = this._db.object(refKey);
    return ref.set(data.logMessage);
  }

  add({ userMessage, logMessage } ) {
    this._store.dispatch(new SetErrorsState({ userMessage, logMessage }));
  }
}
