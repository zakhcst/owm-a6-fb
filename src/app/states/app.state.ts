import { State, Action, StateContext } from '@ngxs/store';
import { SetHistoryState, SetErrorsState } from './app.actions';
import { AppHistoryModel, HistoryRecordModel, AppErrorsStateModel, ErrorRecordModel } from './app.models';
import { GetBrowserIpService } from '../services/get-browser-ip.service';
import { SnackbarService } from '../services/snackbar.service';
import { tap, switchMap } from 'rxjs/operators';
import { HistoryService } from '../services/history.service';
import { ErrorsService } from '../services/errors.service';
import { of } from 'rxjs';

const defaultActivity = {
  ip: '',
  sessionHistory: [
    {
      cityId: 'Init',
      time: new Date().valueOf()
    }
  ]
};

@State<AppHistoryModel>({
  name: 'activity',
  defaults: defaultActivity
})
export class AppHistoryState {
  constructor(
    private _ip: GetBrowserIpService,
    private _history: HistoryService,
    private _snackbar: SnackbarService
  ) {}

  @Action(SetHistoryState)
  setHistoryState(context: StateContext<AppHistoryModel>, action: SetHistoryState) {
    console.log('payload:', action.payload);
    return this._ip.getIP().pipe(
      tap(ip => {
        const newEntry: HistoryRecordModel = {
          cityId: action.payload.cityId,
          time: new Date().valueOf()
        };
        const update = {
          ip,
          sessionHistory: [...context.getState().sessionHistory, newEntry]
        };
        context.patchState(update);
        this._snackbar.show({ message: `Selected: ${action.payload.cityName}` , class: 'snackbar__info'});
      }),
      tap(ip => {
        const history = context.getState().sessionHistory;
        const { time, cityId } = history[history.length - 1];
        return this._history.setData({ ip, time, cityId });
      })
    );
  }
}


const defaultErrorsRecord = {
  ip: '',
  sessionErrors: [
    {
      logMessage: 'Init',
      time: new Date().valueOf()
    }
  ]
};

@State<AppErrorsStateModel>({
  name: 'errors',
  defaults: defaultErrorsRecord
})
export class AppErrorsState {
  constructor(
    private _ip: GetBrowserIpService,
    private _errors: ErrorsService,
    private _snackbar: SnackbarService
  ) {}

  @Action(SetErrorsState)
  setErrorsState(context: StateContext<AppErrorsStateModel>, action: SetErrorsState) {
    return this._ip.getIP().pipe(
      switchMap(ip => {
        const newEntry: ErrorRecordModel = {
          logMessage: action.payload.logMessage,
          time: new Date().valueOf()
        };
        const update = {
          ip,
          sessionErrors: [...context.getState().sessionErrors, newEntry]
        };
        context.patchState(update);
        this._snackbar.show({ message: `Error: ${action.payload.userMessage}` , class: 'snackbar__error'});
        return of(ip);
      }),
      switchMap(ip => {
        const errors = context.getState().sessionErrors;
        const { time, logMessage } = errors[errors.length - 1];
        return this._errors.setDataToFB({ ip, time, logMessage });
      })
    );
  }
}
