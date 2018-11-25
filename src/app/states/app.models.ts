export interface HistoryRecordModel {
  cityId: string;
  time: number;
}

export interface AppUserStateModel {
  // cityId: string;
  // time?: number;
  ip?: string;
  sessionHistory: HistoryRecordModel[];
}
