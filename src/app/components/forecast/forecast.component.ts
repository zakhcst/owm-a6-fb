import { Component, OnInit } from '@angular/core';
import { OwmDataService } from '../../services/owm-data.service';
import { Observable, Subscription } from 'rxjs';
import { ConstantsService } from '../../services/constants.service';
import { CitiesService } from '../../services/cities.service';
import { TimeTemplate } from '../../models/hours.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  selectedCityId: number;
  cities$: Observable<any>;
  weatherData;
  data: any;
  weatherDataSubscription: Subscription;
  timeTemplate: TimeTemplate[];
  iconsUrl: string;
  iconWind: string;
  iconHumidity: string;
  iconPressure: string;
  isExpired: any;
  loading: boolean;

  constructor(private _cities: CitiesService, private _data: OwmDataService) {
    this.cities$ = _cities.getData();
    this.selectedCityId = ConstantsService.defaultCityId;
    this.timeTemplate = ConstantsService.timeTemplate;
    this.iconsUrl = ConstantsService.owmIconsUrl;
    this.iconWind = ConstantsService.windIconsUrl;
    this.iconPressure = ConstantsService.pressureIconsUrl;
    this.iconHumidity = ConstantsService.humidityIconsUrl;
    this.data = _data;
    this.onChange();
  }
  ngOnInit() {}

  onChange() {
    this.loading = true;
    this.weatherDataSubscription = this._data
      .getData(this.selectedCityId)
      .subscribe(data => {
        this.weatherData = data;
        this.weatherDataSubscription.unsubscribe();
        this.loading = false;
      });
  }
}
