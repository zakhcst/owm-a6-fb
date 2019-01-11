import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { AppSnackBarInnerComponent } from '../components/app-snack-bar-inner/app-snack-bar-inner.component';
import { ConstantsService } from './constants.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public q = [];
  constructor(private _matSnackbar: MatSnackBar) {}

  // The non buffered version cancels(hides) the previous message regardless of the duration
  // show(data) {
  //   ref(data);
  // }

  // Queue the messages and show them sequentially with full duration
  // The message is shown when it is at 0 position in the q[], only.
  // The two cases are when called from the client or invoked on dismissing the previous.
  // Otherwise just pishes the new message to the q.
  show(data) {
    if (this.q[0] !== data) {
      this.q.push(data);
    }
    if (this.q[0] === data) {
      const snackbarRef = this.ref(data);
      snackbarRef.afterDismissed().subscribe(() => {
        this.q.shift();
        if (this.q.length > 0) {
          this.show(this.q[0]);
        }
      });
    }
  }

  ref(data: any): MatSnackBarRef<AppSnackBarInnerComponent> {
    return this._matSnackbar.openFromComponent(AppSnackBarInnerComponent, {
      duration: ConstantsService.snackbarDuration * (data.class === 'snackbar__error' ? 2 : 1),
      data,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: data.class
    });
  }
}
