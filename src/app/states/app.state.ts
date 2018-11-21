import { State, Action, StateContext } from '@ngxs/store';
import { SetUserState } from './app.actions';
import { AppUserStateModel } from './app.models';
import { GetBrowserIpService } from '../services/get-browser-ip.service';
import { tap } from 'rxjs/operators';


@State<AppUserStateModel>({
  name: 'activity',
  defaults: {
    cityId: '',
    time: new Date().valueOf(),
    ip: ''
  }
})
export class AppUserState {

  constructor(private _ip: GetBrowserIpService) {}

  @Action(SetUserState)
  setUserState({ patchState }: StateContext<AppUserStateModel>, action: SetUserState) {
    console.log('payload:', action.payload);
    return this._ip.getIP()
    .pipe(
      tap(ip => {
        action.payload.ip = ip;
        action.payload.time = new Date().valueOf();
        patchState(action.payload);
      })
    );

  }
}
