import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AppSnackBarInnerComponent } from '../components/app-snack-bar-inner/app-snack-bar-inner.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _matSnackbar: MatSnackBar) { }

  show(data) {
    return this._matSnackbar.openFromComponent(AppSnackBarInnerComponent, {
      duration: 2500 * (data.class === 'snackbar__error' ? 3 : 1),
      data,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: data.class
    });
  }
}
