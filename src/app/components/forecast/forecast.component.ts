import { Component, OnInit } from '@angular/core';
import { OwmDataService } from '../../services/owm-data.service';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { SetHistoryState } from '../../states/app.actions';
import { OwmStats } from '../../models/owm-stats.model';
import { TimeTemplate } from '../../models/hours.model';
import { ConstantsService } from '../../services/constants.service';
import { CitiesService } from '../../services/cities.service';
import { OwmStatsService } from '../../services/owm-stats.service';
import { GetBrowserIpService } from '../../services/get-browser-ip.service';
import { ErrorsService } from '../../services/errors.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  selectedCityId: string = ConstantsService.defaultCityId;
  timeTemplate: TimeTemplate[] = ConstantsService.timeTemplate;
  iconsUrl: string = ConstantsService.owmIconsUrl;
  iconWind: string = ConstantsService.windIconsUrl;
  iconHumidity: string = ConstantsService.humidityIconsUrl;
  iconPressure: string = ConstantsService.pressureIconsUrl;
  arrow000Deg: string = ConstantsService.arrow000Deg;
  loadingOwmData = true;
  loadingCities = true ;
  loadingStats = true;
  loadingError = false;
  weatherDataSubscription: Subscription;
  cities$: Observable<{}>;
  cities: {};
  stats: OwmStats;
  statsSubscription: Subscription;
  weatherData: any;
  ip: string;
  ipSubscription: Subscription;

  constructor(
    private _cities: CitiesService,
    private _data: OwmDataService,
    private _owmStats: OwmStatsService,
    private _store: Store,
    private _ip: GetBrowserIpService,
    private _errors: ErrorsService
  ) {}

  ngOnInit() {
    this.cities$ = this._cities.getData().pipe(
      tap(cities => {
        this.cities = cities;
        this.loadingCities = false;
      })
    );
    this.statsSubscription = this._owmStats.getData().subscribe(stats => {
      this.stats = stats;
      this.loadingStats = false;
      this.statsSubscription.unsubscribe();
    });
    this.ipSubscription = this._ip.getIP().subscribe(ip => {
      this.ip = ip;
      this.ipSubscription.unsubscribe();
    });
    this.onChange();
  }

  onChange() {
    this.loadingOwmData = true;
    this.weatherDataSubscription = this._data
      .getData(this.selectedCityId)
      .subscribe(
        data => {
          this.weatherData = data;
          this.loadingOwmData = false;
          this._store.dispatch(
            new SetHistoryState({
              cityId: this.selectedCityId,
              cityName: this.cities[this.selectedCityId].name,
              countryISO2: this.cities[this.selectedCityId].iso2
            })
          );
        },
        err => {
          this.loadingOwmData = false;
          this.loadingError = true;
          this._errors.add({
            userMessage:
              'Connection or service problem. Please reload or try later.',
            logMessage: 'ForecastComponent:onChange:subscribe ' + err.message
          });
        },
        () => this.weatherDataSubscription.unsubscribe()
      );
  }
}
