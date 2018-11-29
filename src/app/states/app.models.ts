export interface HistoryRecordModel {
  cityId: string;
  time: number;
}
export interface AppUserStateModel {
  ip?: string;
  sessionHistory: HistoryRecordModel[];
}

export interface AppUserStatePayloadModel {
  cityId: string;
  cityName: string;
}

export interface ErrorRecordModel {
  logMessage: string;
  time: number;
}
export interface AppErrorsStateModel {
  ip?: string;
  sessionErrors: ErrorRecordModel[];
}

export interface AppErrorPayloadModel {
  userMessage: string;
  logMessage: string;
}