export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  pressure: number;
  high: number;
  low: number;
  sunrise: string;
  sunset: string;
  forecast: ForecastDay[];
  hourly: HourlyData[];
}

export interface ForecastDay {
  day: string;
  condition: string;
  high: number;
  low: number;
  precipitation: number;
}

export interface HourlyData {
  time: string;
  temp: number;
  condition: string;
}

export const mockWeatherDB: Record<string, WeatherData> = {
  london: {
    city: "London",
    country: "UK",
    temperature: 14,
    feelsLike: 11,
    condition: "Cloudy",
    description: "Overcast skies with light drizzle expected by evening",
    humidity: 78,
    windSpeed: 22,
    visibility: 8,
    uvIndex: 2,
    pressure: 1008,
    high: 16,
    low: 9,
    sunrise: "06:12",
    sunset: "20:34",
    forecast: [
      { day: "Mon", condition: "Rain", high: 13, low: 8, precipitation: 80 },
      { day: "Tue", condition: "Cloudy", high: 15, low: 10, precipitation: 30 },
      { day: "Wed", condition: "Sunny", high: 18, low: 11, precipitation: 5 },
      { day: "Thu", condition: "Partly Cloudy", high: 17, low: 10, precipitation: 20 },
      { day: "Fri", condition: "Rain", high: 14, low: 9, precipitation: 70 },
    ],
    hourly: [
      { time: "Now", temp: 14, condition: "Cloudy" },
      { time: "13:00", temp: 15, condition: "Cloudy" },
      { time: "14:00", temp: 16, condition: "Partly Cloudy" },
      { time: "15:00", temp: 15, condition: "Rain" },
      { time: "16:00", temp: 13, condition: "Rain" },
      { time: "17:00", temp: 12, condition: "Rain" },
    ],
  },
  tokyo: {
    city: "Tokyo",
    country: "Japan",
    temperature: 26,
    feelsLike: 28,
    condition: "Partly Cloudy",
    description: "Warm and humid with scattered clouds throughout the day",
    humidity: 65,
    windSpeed: 14,
    visibility: 12,
    uvIndex: 6,
    pressure: 1015,
    high: 29,
    low: 21,
    sunrise: "05:01",
    sunset: "18:44",
    forecast: [
      { day: "Mon", condition: "Sunny", high: 28, low: 20, precipitation: 10 },
      { day: "Tue", condition: "Sunny", high: 30, low: 22, precipitation: 5 },
      { day: "Wed", condition: "Cloudy", high: 27, low: 21, precipitation: 25 },
      { day: "Thu", condition: "Rain", high: 24, low: 19, precipitation: 75 },
      { day: "Fri", condition: "Partly Cloudy", high: 26, low: 20, precipitation: 20 },
    ],
    hourly: [
      { time: "Now", temp: 26, condition: "Partly Cloudy" },
      { time: "13:00", temp: 27, condition: "Partly Cloudy" },
      { time: "14:00", temp: 29, condition: "Sunny" },
      { time: "15:00", temp: 28, condition: "Sunny" },
      { time: "16:00", temp: 27, condition: "Partly Cloudy" },
      { time: "17:00", temp: 25, condition: "Cloudy" },
    ],
  },
  "new york": {
    city: "New York",
    country: "USA",
    temperature: 22,
    feelsLike: 20,
    condition: "Sunny",
    description: "Clear skies and pleasant temperatures — a perfect day out",
    humidity: 45,
    windSpeed: 18,
    visibility: 16,
    uvIndex: 7,
    pressure: 1020,
    high: 24,
    low: 15,
    sunrise: "06:23",
    sunset: "19:52",
    forecast: [
      { day: "Mon", condition: "Sunny", high: 23, low: 14, precipitation: 5 },
      { day: "Tue", condition: "Partly Cloudy", high: 21, low: 13, precipitation: 15 },
      { day: "Wed", condition: "Cloudy", high: 19, low: 12, precipitation: 35 },
      { day: "Thu", condition: "Rain", high: 17, low: 11, precipitation: 65 },
      { day: "Fri", condition: "Sunny", high: 22, low: 14, precipitation: 5 },
    ],
    hourly: [
      { time: "Now", temp: 22, condition: "Sunny" },
      { time: "13:00", temp: 23, condition: "Sunny" },
      { time: "14:00", temp: 24, condition: "Sunny" },
      { time: "15:00", temp: 23, condition: "Partly Cloudy" },
      { time: "16:00", temp: 21, condition: "Partly Cloudy" },
      { time: "17:00", temp: 19, condition: "Cloudy" },
    ],
  },
  paris: {
    city: "Paris",
    country: "France",
    temperature: 19,
    feelsLike: 17,
    condition: "Partly Cloudy",
    description: "A pleasant spring day with mild winds and occasional sun",
    humidity: 55,
    windSpeed: 16,
    visibility: 14,
    uvIndex: 5,
    pressure: 1013,
    high: 21,
    low: 13,
    sunrise: "07:02",
    sunset: "21:10",
    forecast: [
      { day: "Mon", condition: "Sunny", high: 22, low: 13, precipitation: 5 },
      { day: "Tue", condition: "Sunny", high: 23, low: 14, precipitation: 5 },
      { day: "Wed", condition: "Partly Cloudy", high: 20, low: 13, precipitation: 20 },
      { day: "Thu", condition: "Cloudy", high: 18, low: 11, precipitation: 40 },
      { day: "Fri", condition: "Rain", high: 16, low: 10, precipitation: 70 },
    ],
    hourly: [
      { time: "Now", temp: 19, condition: "Partly Cloudy" },
      { time: "13:00", temp: 20, condition: "Sunny" },
      { time: "14:00", temp: 21, condition: "Sunny" },
      { time: "15:00", temp: 20, condition: "Partly Cloudy" },
      { time: "16:00", temp: 19, condition: "Cloudy" },
      { time: "17:00", temp: 17, condition: "Cloudy" },
    ],
  },
  sydney: {
    city: "Sydney",
    country: "Australia",
    temperature: 18,
    feelsLike: 17,
    condition: "Sunny",
    description: "Crisp winter sunshine with cool temperatures and clear skies",
    humidity: 50,
    windSpeed: 20,
    visibility: 20,
    uvIndex: 4,
    pressure: 1022,
    high: 20,
    low: 12,
    sunrise: "06:58",
    sunset: "17:12",
    forecast: [
      { day: "Mon", condition: "Sunny", high: 19, low: 11, precipitation: 5 },
      { day: "Tue", condition: "Sunny", high: 20, low: 12, precipitation: 5 },
      { day: "Wed", condition: "Partly Cloudy", high: 18, low: 11, precipitation: 15 },
      { day: "Thu", condition: "Cloudy", high: 16, low: 10, precipitation: 30 },
      { day: "Fri", condition: "Sunny", high: 19, low: 12, precipitation: 5 },
    ],
    hourly: [
      { time: "Now", temp: 18, condition: "Sunny" },
      { time: "13:00", temp: 19, condition: "Sunny" },
      { time: "14:00", temp: 20, condition: "Sunny" },
      { time: "15:00", temp: 19, condition: "Sunny" },
      { time: "16:00", temp: 17, condition: "Partly Cloudy" },
      { time: "17:00", temp: 15, condition: "Cloudy" },
    ],
  },
  dubai: {
    city: "Dubai",
    country: "UAE",
    temperature: 38,
    feelsLike: 43,
    condition: "Sunny",
    description: "Intense heat with clear skies — stay hydrated and seek shade",
    humidity: 30,
    windSpeed: 10,
    visibility: 10,
    uvIndex: 11,
    pressure: 1003,
    high: 41,
    low: 28,
    sunrise: "05:55",
    sunset: "19:10",
    forecast: [
      { day: "Mon", condition: "Sunny", high: 40, low: 27, precipitation: 0 },
      { day: "Tue", condition: "Sunny", high: 42, low: 29, precipitation: 0 },
      { day: "Wed", condition: "Sunny", high: 41, low: 28, precipitation: 0 },
      { day: "Thu", condition: "Sunny", high: 39, low: 27, precipitation: 0 },
      { day: "Fri", condition: "Partly Cloudy", high: 37, low: 26, precipitation: 5 },
    ],
    hourly: [
      { time: "Now", temp: 38, condition: "Sunny" },
      { time: "13:00", temp: 40, condition: "Sunny" },
      { time: "14:00", temp: 41, condition: "Sunny" },
      { time: "15:00", temp: 41, condition: "Sunny" },
      { time: "16:00", temp: 39, condition: "Sunny" },
      { time: "17:00", temp: 37, condition: "Sunny" },
    ],
  },
  "phnom penh": {
    city: "Phnom Penh",
    country: "Cambodia",
    temperature: 34,
    feelsLike: 40,
    condition: "Partly Cloudy",
    description: "Hot and humid tropical afternoon with possible afternoon showers",
    humidity: 72,
    windSpeed: 12,
    visibility: 9,
    uvIndex: 9,
    pressure: 1006,
    high: 36,
    low: 26,
    sunrise: "05:48",
    sunset: "18:16",
    forecast: [
      { day: "Mon", condition: "Sunny", high: 35, low: 25, precipitation: 15 },
      { day: "Tue", condition: "Rain", high: 32, low: 24, precipitation: 75 },
      { day: "Wed", condition: "Partly Cloudy", high: 33, low: 25, precipitation: 30 },
      { day: "Thu", condition: "Sunny", high: 36, low: 26, precipitation: 10 },
      { day: "Fri", condition: "Rain", high: 31, low: 24, precipitation: 80 },
    ],
    hourly: [
      { time: "Now", temp: 34, condition: "Partly Cloudy" },
      { time: "13:00", temp: 36, condition: "Sunny" },
      { time: "14:00", temp: 36, condition: "Partly Cloudy" },
      { time: "15:00", temp: 34, condition: "Rain" },
      { time: "16:00", temp: 31, condition: "Rain" },
      { time: "17:00", temp: 30, condition: "Cloudy" },
    ],
  },
};

export function searchCity(query: string): WeatherData | null {
  const normalized = query.toLowerCase().trim();
  if (mockWeatherDB[normalized]) return mockWeatherDB[normalized];
  // Partial match
  const key = Object.keys(mockWeatherDB).find((k) => k.includes(normalized) || normalized.includes(k));
  return key ? mockWeatherDB[key] : null;
}

export const defaultCity = mockWeatherDB["phnom penh"];
