import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OwmFallbackDataService {
  constructor(private _http: HttpClient, private _errors: ErrorsService) {}

  getData() {
    return this.requestData().pipe(
      catchError(err => {
        this._errors.add({
          userMessage: 'Connection or service problem',
          logMessage: 'OwmFallbackDataService ' + err.message
        });
        return throwError(new Error(err));
      }));
  }

  requestData() {
    return this._http.get(ConstantsService.owmFallbackData);
  }
}
