import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class OwmService {
  constructor(private _http: HttpClient) {}

  getDefaultData(cityId) {
    console.log('owm getDefaultData');
    return this._http.get<any>(ConstantsService.defaultOwmData);
  }

  getData(cityId) {
    console.log('owm getData');
    const fullUrl =
      ConstantsService.default5DayForecastUrl +
      '?id=' +
      cityId +
      '&units=' +
      ConstantsService.defaultUnits +
      '&APPID=' +
      ConstantsService.defaultAPPID;

    return this._http.get<any>(fullUrl);
  }
}
