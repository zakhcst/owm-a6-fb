import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { AppSnackBarInnerComponent } from '../components/app-snack-bar-inner/app-snack-bar-inner.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public q = [];
  constructor(private _matSnackbar: MatSnackBar) {}

  // show(data) {
  //   return this._matSnackbar.openFromComponent(AppSnackBarInnerComponent, {
  //     duration: 2500 * (data.class === 'snackbar__error' ? 2 : 1),
  //     data,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: data.class
  //   });
  // }

  // Queue the messages and show them sequentially with full duration
  show(data) {
    if (this.q[0] !== data) {
      this.q.push(data);
    }
    if (this.q[0] === data) {
      const ref = this.ref(data);
      ref.afterDismissed().subscribe(() => {
        this.q.shift();
        if (this.q.length > 0) {
          this.show(this.q[0]);
        }
      });
    }

  }

  ref(data) {
    return this._matSnackbar.openFromComponent(AppSnackBarInnerComponent, {
      duration: 2500 * (data.class === 'snackbar__error' ? 2 : 1),
      data,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: data.class
    });
  }
}
