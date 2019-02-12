import { asyncScheduler, of, throwError } from 'rxjs';

import { OwmDataModel } from '../models/owm-data.model';
import { CitiesModel } from '../models/cities.model';
import {
  AppErrorPayloadModel,
  AppHistoryPayloadModel
} from '../states/app.models';

import dataJSON from '../../assets/owm-fallback-data.json';
import citiesJSON from '../../../misc/cities-obj.json';
import { SnackbarDataModel } from '../models/snackbar.model';
import { CitiesService } from './cities.service';

export const data = <OwmDataModel>(<any>dataJSON);
export const getNewDataObject = (state?: string): OwmDataModel => {
  const fallbackData: OwmDataModel = JSON.parse(JSON.stringify(data));
  if (state === 'owm') {
    delete fallbackData.listByDate;
  }
  return fallbackData;
};

export const cities = <CitiesModel>(<any>citiesJSON);
export const getNewCitiesObject = (): CitiesModel =>
  JSON.parse(JSON.stringify(cities));

export class MockOwmService {
  getData(cityId: string) {
    const owmData = getNewDataObject('owm');
    return cityId
      ? of(owmData, asyncScheduler)
      : throwError(new Error('getData'), asyncScheduler);
  }
  getDefaultData(cityId: string) {
    const owmData = getNewDataObject('owm');
    return cityId
      ? of(owmData, asyncScheduler)
      : throwError(new Error('getDefaultData'), asyncScheduler);
  }
}

export class MockDataService {
  error = false;
  dbData: OwmDataModel;
  getData(cityId: string) {
    this.dbData = getNewDataObject();
    return of(cityId ? this.dbData : null, asyncScheduler);
  }
  setData(cityId: string, owmData: OwmDataModel) {
    this.dbData = owmData;
    return owmData && !this.error ? Promise.resolve() : Promise.reject();
  }
}
export class MockOwmDataService {
  dbData: OwmDataModel;
  getData(cityId: string) {
    const lsError = localStorage.getItem('mockOwmDataServiceError');
    this.dbData = getNewDataObject();
    return cityId && !lsError
      ? of(this.dbData, asyncScheduler)
      : throwError(new Error('MockOwmDataService:getData'), asyncScheduler);
  }
}

export class MockCitiesService {
  reads = 0;
  getData() {
    const lsError = localStorage.getItem('mockCitiesServiceError');
    return lsError
      ? throwError(new Error('MockCitiesService:getData'), asyncScheduler)
      : of(getNewCitiesObject(), asyncScheduler);
  }

  updateReads(cityId: string) {
    const lsError = localStorage.getItem('mockCitiesServiceError');
    this.reads = cityId && !lsError ? this.reads || 0 + 1 : this.reads;
    return cityId && !lsError
    ? of(null, asyncScheduler)
    : throwError(new Error('MockCitiesService:updateReads'), asyncScheduler);
  }
}

export class MockOwmStatsService {
  getData(error?: any) {
    const sample = { r: 100, u: 100 };
    const lsError = localStorage.getItem('mockOwmStatsServiceError');
    const stats = JSON.parse(localStorage.getItem('mockOwmStatsService') || null);
    return error || lsError
      ? throwError(new Error('MockOwmStatsService:getData'), asyncScheduler)
      : of(stats || sample, asyncScheduler);
  }
}
export class MockGetBrowserIpService {
  ipSample = '1.1.1.1';
  getIP() {
    const lsError = localStorage.getItem('mockGetBrowserIpServiceError');
    const ip = localStorage.getItem('mockIp');
    return lsError
      ? throwError('ip-error', asyncScheduler)
      : of(ip || this.ipSample, asyncScheduler);
  }
}

export class MockOwmFallbackDataService {
  getData() {
    return of(getNewDataObject('owm'), asyncScheduler);
  }
}

export class MockErrorsService {
  messages: AppErrorPayloadModel[] = [];
  constructor () {
    this.messages = [];
  }
  setDataToFB(newData: AppErrorPayloadModel) {
    return newData ? Promise.resolve() : Promise.reject();
  }
  add(message: AppErrorPayloadModel) {
    this.messages.push(message);
  }
}
export class MockHistoryService {
  messages: AppHistoryPayloadModel[] = [];
  constructor () {
    this.messages = [];
  }
  setDataToFB(newData: AppHistoryPayloadModel) {
    return newData ? Promise.resolve() : Promise.reject();
  }
  add(message: AppHistoryPayloadModel) {
    this.messages.push(message);
  }
}

export class MockAngularFireService {
  fbdata: any;
  refkey: any = '';
  error = false;
  ref = {
    valueChanges: this.valueChanges.bind(this),
    set: this.setData.bind(this),
    update: this.update.bind(this)
  };

  constructor() {}

  object(refkey: string) {
    this.refkey = refkey;
    return this.ref;
  }

  setData(fbdata: any) {
    this.fbdata = fbdata;
    return fbdata ? Promise.resolve('Resolved') : Promise.reject('Rejected');
  }

  update(fbdata: any) {
    this.fbdata = { ...this.fbdata, ...fbdata };
    return fbdata ? Promise.resolve('Resolved') : Promise.reject('Rejected');
  }

  valueChanges() {
    return this.fbdata && !this.error
      ? of(this.fbdata, asyncScheduler)
      : throwError('No data', asyncScheduler);
  }
}
export class MockSnackbarService {
  data: SnackbarDataModel[] = [];

  show(newData: SnackbarDataModel) {
    this.data.push(newData);
  }
}
