import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
@Injectable({
  providedIn: 'root'
})
export class OwmService {
  constructor(private _http: HttpClient, private _errors: ErrorsService) {}

  getDefaultData(cityId) {
    return this._http.get<any>(ConstantsService.defaultOwmData).pipe(
      catchError(err => {
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmService:getDefaultData ' + err.message
        });
        return throwError(new Error(err));
      })
    );
  }

  getData(cityId) {
    const fullUrl =
      ConstantsService.default5DayForecastUrl +
      '?id=' +
      cityId +
      '&units=' +
      ConstantsService.defaultUnits +
      '&APPID=' +
      ConstantsService.defaultAPPID;

    return this._http.get<any>(fullUrl).pipe(
      catchError(err => {
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmService:getData ' + err.message
        });
        return throwError(new Error(err));
      })
    );
  }
}
