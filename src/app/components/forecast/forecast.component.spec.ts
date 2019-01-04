import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentsRequiredModules } from '../../modules/testing.components-required-modules';
import { ForecastComponent } from './forecast.component';
import { SortCitiesPipe } from '../../pipes/sort-cities.pipe';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent, SortCitiesPipe],
      imports: [
        TestingComponentsRequiredModules,
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
