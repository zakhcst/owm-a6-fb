import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  constructor() {}

  public static readonly default5DayForecastUrl =
    'https://api.openweathermap.org/data/2.5/forecast';
  public static readonly defaultUnits = 'metric';
  public static readonly defaultCityId = 2643743; // London, UK
  public static readonly defaultAPPID = 'a354c550c575036102a4dce8d36e75d1';

  public static readonly owmIconsUrl = 'http://openweathermap.org/img/w/';
  public static readonly originIconsUrl = '/icons/';
  public static readonly hourTemplate = [0, 3, 6, 9, 12, 15, 18, 21];
  public static readonly hourBGTemplate = [
    'blue-900',
    'blue-800',
    'blue-500',
    'blue-300',
    'blue-100',
    'blue-300',
    'blue-500',
    'blue-800'
  ];
}
