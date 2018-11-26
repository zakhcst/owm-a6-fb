import { AppUserStateModel, AppUserStatePayloadModel } from './app.models';

export class SetUserState {
  static readonly type = '[activity] set';
  constructor(public payload: AppUserStatePayloadModel) {}
}
