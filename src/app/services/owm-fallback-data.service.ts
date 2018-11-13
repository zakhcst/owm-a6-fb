import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class OwmFallbackDataService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get(ConstantsService.owmFallbackData);
  }
}
