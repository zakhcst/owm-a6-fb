import { Injectable } from '@angular/core';
import { HoursTemplate } from '../models/hours.model';

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
  public static readonly windIconsUrl = 'assets/icons8-windsock-16.png';
  public static readonly pressureIconsUrl = 'assets/icons8-atmospheric-pressure-16.png';
  public static readonly humidityIconsUrl = 'assets/icons8-hygrometer-16.png';

  public static readonly hoursTemplate: HoursTemplate = {
    hours: [0, 3, 6, 9, 12, 15, 18, 21],
    colors: [
      '#4060bb',
      '#4060bb',
      '#5080dd',
      '#70b0ff',
      '#90c0ff',
      '#90c0ff',
      '#70b0ff',
      '#5080dd',
    ]
  };
  public static readonly defaultOwmData = 'assets/owm-data-sample.json';
}
