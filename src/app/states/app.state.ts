import { State, Action, StateContext } from '@ngxs/store';
import { SetUserState } from './app.actions';
import { AppUserStateModel, HistoryRecordModel } from './app.models';
import { GetBrowserIpService } from '../services/get-browser-ip.service';
import { tap } from 'rxjs/operators';
import { HistoryService } from '../services/history.service';

const defaults = {
  ip: '',
  sessionHistory: [
    {
      cityId: 'Init',
      time: new Date().valueOf()
    }
  ]
};

@State<AppUserStateModel>({
  name: 'activity',
  defaults
})
export class AppUserState {
  constructor(
    private _ip: GetBrowserIpService,
    private _history: HistoryService
  ) {}

  @Action(SetUserState)
  setUserState(context: StateContext<AppUserStateModel>, action: SetUserState) {
    console.log('payload:', action.payload);
    return this._ip.getIP().pipe(
      tap(ip => {
        const newEntry: HistoryRecordModel = {
          cityId: action.payload,
          time: new Date().valueOf()
        };
        const update = {
          ip,
          sessionHistory: [...context.getState().sessionHistory, newEntry]
        };
        context.patchState(update);
      }),
      tap(ip => {
        const history = context.getState().sessionHistory;
        const { time, cityId } = history[history.length - 1];
        return this._history.setData({ ip, time, cityId });
      })
    );
  }
}
