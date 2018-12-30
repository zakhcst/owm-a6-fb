import { Injectable } from '@angular/core';
import { TimeTemplate } from '../models/hours.model';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  constructor() {}

  public static readonly owmData = 'owm';
  public static readonly historyLog = 'history-log';
  public static readonly errorsLog = 'errors-log';
  public static readonly default5DayForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  public static readonly defaultUnits = 'metric';
  public static readonly defaultCityId = localStorage.lastCityId || '2643743'; // Defaults to London, UK
  public static readonly defaultAPPID = 'a354c550c575036102a4dce8d36e75d1';
  public static readonly owmFallbackData = 'assets/owm-fallback-data.json';
  public static readonly getIpUrl = 'https://us-central1-owm-a6-fb.cloudfunctions.net/getip';
  public static readonly ipv4RE = new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
  public static readonly ipv6RE = new RegExp(`/^\s*((
    ([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}
    (:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|
    (([0-9A-Fa-f]{1,4}:){5}
    (((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|
    (([0-9A-Fa-f]{1,4}:){4}
    (((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|
    (([0-9A-Fa-f]{1,4}:){3}
    (((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|
    (([0-9A-Fa-f]{1,4}:){2}
    (((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|
    (([0-9A-Fa-f]{1,4}:){1}
    (((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|
    (:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)
    (\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/`, 'i');

  public static readonly owmIconsUrl = 'https://openweathermap.org/img/w/';
  public static readonly windIconsUrl = 'assets/icons8-windsock-16.png';
  public static readonly pressureIconsUrl = 'assets/icons8-atmospheric-pressure-16.png';
  public static readonly humidityIconsUrl = 'assets/icons8-hygrometer-16.png';
  public static readonly arrow000Deg = String.fromCodePoint(8593);


  public static readonly timeTemplate: TimeTemplate[] = [
    { hour:  0, bgColor: '#4060bb', textColor: 'white'},
    { hour:  3, bgColor: '#4060bb', textColor: 'white'},
    { hour:  6, bgColor: '#5080dd', textColor: 'white'},
    { hour:  9, bgColor: '#70b0ff', textColor: 'black'},
    { hour: 12, bgColor: '#90c0ff', textColor: 'black'},
    { hour: 15, bgColor: '#90c0ff', textColor: 'black'},
    { hour: 18, bgColor: '#70b0ff', textColor: 'black'},
    { hour: 21, bgColor: '#5080dd', textColor: 'white'}
  ];

  public static readonly defaultOwmData = 'assets/owm-data-sample.json';
}
