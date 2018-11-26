import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AppSnackBarComponent } from '../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matSnackbar: MatSnackBar) { }

  show(data) {
    return this._matSnackbar.openFromComponent(AppSnackBarComponent, {
      duration: 2000,
      data
    });
  }
}
