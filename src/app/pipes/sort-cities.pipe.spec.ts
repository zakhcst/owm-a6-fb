import { SortCitiesPipe } from './sort-cities.pipe';
import { CityByKey } from '../models/cities.model';

describe('SortCitiesPipe', () => {
  let pipe: SortCitiesPipe;
  const cities: CityByKey[] = [
    { key: 'cityKey3', value: { name: 'name3', country: 'country3', iso2: 'iso23' }},
    { key: 'cityKey2', value: { name: 'name2', country: 'country2', iso2: 'iso22' }},
    { key: 'cityKey1', value: { name: 'name1', country: 'country1', iso2: 'iso21' }},
  ];
  const sortedCities: CityByKey[] = [
    { key: 'cityKey1', value: { name: 'name1', country: 'country1', iso2: 'iso21' }},
    { key: 'cityKey2', value: { name: 'name2', country: 'country2', iso2: 'iso22' }},
    { key: 'cityKey3', value: { name: 'name3', country: 'country3', iso2: 'iso23' }},
  ];

  beforeEach(() => {
    pipe = new SortCitiesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort the array', () => {
    expect(pipe.transform(cities)).toEqual(sortedCities);
  });

});
