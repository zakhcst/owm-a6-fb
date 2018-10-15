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
  public static readonly tempIconsUrl = 'assets/icons8-temperature-24.png';
  public static readonly windIconsUrl = 'assets/icons8-windsock-24.png';
  public static readonly pressureIconsUrl = 'assets/icons8-atmospheric-pressure-24.png';
  public static readonly humidityIconsUrl = 'assets/icons8-hygrometer-24.png';

  public static readonly hoursTemplate = [0, 3, 6, 9, 12, 15, 18, 21];
  public static readonly defaultOwmData = 'assets/owm-data-sample.json';
}
