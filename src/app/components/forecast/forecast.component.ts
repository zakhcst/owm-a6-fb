import { Component, OnInit } from '@angular/core';
import { OwmDataService } from '../../services/owm-data.service';
import { Observable, Subscription, from } from 'rxjs';
import { ConstantsService } from '../../services/constants.service';
import { CitiesService } from '../../services/cities.service';
import { OwmStatsService } from '../../services/owm-stats.service';
import { TimeTemplate } from '../../models/hours.model';
import { OwmStats } from '../../models/owm-stats.model';
import { tap } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { SetUserState } from '../../states/app.actions';
import { GetBrowserIpService } from 'src/app/services/get-browser-ip.service';

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
  loading: boolean;
  loadingCities: boolean;
  loadingStats: boolean;
  weatherDataSubscription$: Subscription;
  cities$: Observable<{}>;
  cities: {};
  stats: OwmStats;
  weatherData: any;

  constructor(
    private _cities: CitiesService,
    private _data: OwmDataService,
    private _owmStats: OwmStatsService,
    private _store: Store,
    public ip: GetBrowserIpService
  ) {}

  ngOnInit() {
    this.loadingCities = true;
    this.cities$ = this._cities.getData().pipe(
      tap(cities => {
        this.cities = cities;
        this.loadingCities = false;
      })
    );
    this.loadingStats = true;
    this._owmStats.getData().subscribe(stats => {
      this.stats = stats;
      this.loadingStats = false;
    });
    this.onChange();
  }

  onChange() {
    this.loading = true;
    this.weatherDataSubscription$ = this._data
      .getData(this.selectedCityId)
      .subscribe(
        data => {
          this.weatherData = data;
          this.weatherDataSubscription$.unsubscribe();
          this.loading = false;
          this._store.dispatch(
            new SetUserState({ cityId: this.selectedCityId })
          );
        },
        err => console.log('ForecastComponent data Error:', err)
      );
  }
}
