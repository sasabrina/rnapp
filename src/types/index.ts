export type RootStackParamList = {
  Home: undefined;
  City: {
    itemId: string;
    name: string;
  };
  Search: {
    searchValue: string;
  };
};

export type Weather = {
  icon: string;
  description?: string;
  main?: string;
};

export type MainWeather = {
  feelsLike?: number;
  temp: number;
  tempMax: number;
  tempMin: number;
};

export type City = {
  id: string;
  name: string;
  dt: number;
  timezone: number;
  main: MainWeather;
  weather: Weather[];
};

export type Cities = City[];
