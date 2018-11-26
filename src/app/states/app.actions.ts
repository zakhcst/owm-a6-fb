import { AppUserStatePayloadModel, AppErrorPayloadModel } from './app.models';

export class SetUserState {
  static readonly type = '[activity] set';
  constructor(public payload: AppUserStatePayloadModel) {}
}
export class SetErrorsState {
  static readonly type = '[errors] set';
  constructor(public payload: AppErrorPayloadModel) {}
}
