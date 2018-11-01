import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { AppModules } from './modules/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ForecastComponent
      ],
      imports: [AppModules]
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
