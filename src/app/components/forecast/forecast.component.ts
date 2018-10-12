import { Component, OnInit } from '@angular/core';
import { OwmDataService } from '../../services/owm-data.service';
import { Observable } from 'rxjs';
import { ConstantsService } from '../../services/constants.service';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  selectedCityId: number;
  cities$: Observable<any>;
  weatherData$;

  constructor(private _cities: CitiesService, private _data: OwmDataService) {
    this.cities$ = _cities.getData();
    this.selectedCityId = ConstantsService.defaultCityId;
    this.weatherData$ = this._data.getData(this.selectedCityId);
  }
  ngOnInit() {}

  onChange(e) {
    console.log(e);
    console.log(this.selectedCityId);
    this.weatherData$ = this._data.getData(this.selectedCityId);
  }
}
