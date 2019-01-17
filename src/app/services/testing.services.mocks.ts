import { asyncScheduler, of, throwError } from 'rxjs';

import { OwmDataModel } from '../models/owm-data.model';
import { CitiesModel } from '../models/cities.model';
import { AppErrorPayloadModel } from '../states/app.models';

import dataJSON from '../../assets/owm-fallback-data.json';
export const data = <OwmDataModel>(<any>dataJSON);
export const getNewDataObject = (state?: string): OwmDataModel => {
  const fallbackData: OwmDataModel = JSON.parse(JSON.stringify(data));
  if (state === 'owm') {
    delete fallbackData.listByDate;
  }
  return fallbackData;
};

import citiesJSON from '../../../misc/eu-capitals.json';
import { SnackbarDataModel } from '../models/snackbar.model';
export const cities = <CitiesModel>(<any>citiesJSON);
export const getNewCitiesObject = (): CitiesModel =>
  JSON.parse(JSON.stringify(cities));

export class MockOwmService {
  getData(cityId: string) {
    const owmData = getNewDataObject('owm');
    return cityId
      ? of(owmData, asyncScheduler)
      : throwError(new Error('Error: getData'), asyncScheduler);
  }
  getDefaultData(cityId: string) {
    const owmData = getNewDataObject('owm');
    return cityId
      ? of(owmData, asyncScheduler)
      : throwError(new Error('Error: getData'), asyncScheduler);
  }
}

export class MockDataService {
  dbData: OwmDataModel;
  getData(cityId: string) {
    this.dbData = getNewDataObject();
    return of(cityId ? this.dbData : null, asyncScheduler);
  }
  setData(cityId: string, owmData: OwmDataModel) {
    this.dbData = owmData;
    return owmData ? Promise.resolve() : Promise.reject();
  }
}

export class MockCitiesService {
  reads = 0;
  getData() {
    return of(getNewCitiesObject(), asyncScheduler);
  }
  updateReads(cityId: string) {
    this.reads = cityId ? this.reads + 1 : this.reads;
    return cityId
      ? of(this.reads, asyncScheduler)
      : throwError(
          new Error('Error: MockCitiesService:getData'),
          asyncScheduler
        );
  }
}

export class MockOwmFallbackDataService {
  getData() {
    return of(getNewDataObject('owm'), asyncScheduler);
  }
}

export class MockErrorsService {
  messages: AppErrorPayloadModel[] = [];
  setDataToFB(newData: AppErrorPayloadModel) {
    return newData ? Promise.resolve() : Promise.reject();
  }
  add(message: AppErrorPayloadModel) {
    this.messages.push(message);
  }
}

export class MockAngularFireService {
  fbdata: any;
  refkey: any = '';
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
    return this.fbdata
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
export class MockGetBrowserIpService {
  ipSample = '1.1.1.1';
  getIP() {
    return of(this.ipSample, asyncScheduler);
  }
}
