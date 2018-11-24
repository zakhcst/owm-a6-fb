import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { AppModules } from './modules/testing';
import { SortCitiesPipe } from './pipes/sort-cities.pipe';
import { NgxsModule } from '@ngxs/store';
import { AppUserState } from './states/app.state';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ForecastComponent,
        SortCitiesPipe,
      ],
      imports: [
        AppModules,
        NgxsModule.forRoot([AppUserState])
      ],
      providers: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'owm-a6-fb'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('owm-a6-fb');
  });

});
