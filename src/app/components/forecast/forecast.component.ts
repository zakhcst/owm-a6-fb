import { Component, OnInit } from '@angular/core';
import { OwmDataService } from '../../services/owm-data.service';
import { Observable, Subscription } from 'rxjs';
import { ConstantsService } from '../../services/constants.service';
import { CitiesService } from '../../services/cities.service';
import { TimeTemplate } from '../../models/hours.model';
import { City } from '../../models/city.model';

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
  weatherDataSubscription$: Subscription;
  cities$: Observable<{}>;
  weatherData: any;

  constructor(private _cities: CitiesService, private _data: OwmDataService) {
    this.cities$ = this._cities.getData();
    this.onChange();
  }
  ngOnInit() {}

  onChange() {
    this.loading = true;
    this.weatherDataSubscription$ = this._data
      .getData(this.selectedCityId)
      .subscribe(data => {
        this.weatherData = data;
        this.weatherDataSubscription$.unsubscribe();
        this.loading = false;
      });
  }
}
