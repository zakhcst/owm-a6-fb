import { AppUserStateModel } from './app.models';

export class SetUserState {
  static readonly type = '[activity] set';
  constructor(public payload: string) {}
}
