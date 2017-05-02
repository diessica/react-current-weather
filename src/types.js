/* @flow */
export type Coord = {
  lat: string,
  lon: string
};

export type City = {
  name: string,
  coord: Coord
};

export type WeatherResult = {
  name: string,
  description: string,
  iconId: string,
  temp: number,
  temp_min: string,
  temp_max: string,
  humidity: string,
  pressure: string,
  wind: {
    speed: string
  }
};

export type StoreState = {
  weather: WeatherResult,
  city: City,
  isLoadingWeather: boolean,
  isLoadingImage: string
};

export type Geosuggestion = {
  gmaps: Object,
  location: Object
};

export type Action =
  | { type: 'RESET_CITY' }
  | { type: 'UPDATE_CITY_INFO', payload: City }
  | { type: 'FETCH_WEATHER', payload: Promise<Object> }
  | { type: 'FETCH_IMAGE', payload: Promise<Object> }
;

export type Dispatch = (action: Action | Promise<Action> | Array<Action>) => any;

export type Icon = {
  name: string,
  id: Array<string>,
  icon: string,
};
