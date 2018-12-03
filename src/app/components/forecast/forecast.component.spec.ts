import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModules } from '../../modules/testing';
import { ForecastComponent } from './forecast.component';
import { NgxsModule } from '@ngxs/store';
import { AppHistoryState } from '../../states/app.state';
import { SortCitiesPipe } from '../../pipes/sort-cities.pipe';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent, SortCitiesPipe],
      imports: [
        AppModules,
        NgxsModule.forRoot([AppHistoryState])
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
