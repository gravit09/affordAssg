"use client";

import { Card } from "@/components/ui/card";
import { CloudSun } from "lucide-react";

interface ForecastDay {
  date: string;
  temperature: number;
  humidity: number;
  condition: string;
  description: string;
  icon: string;
  windSpeed: number;
  windDirection: number;
  pressure: number;
}

interface ForecastCardProps {
  day: ForecastDay;
}

const ForecastCard = ({ day }: ForecastCardProps) => {
  // Function to get the weather icon
  const getWeatherIcon = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <Card className="p-4 w-full bg-white dark:bg-slate-800 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{day.date}</h3>
        <div className="flex items-center">
          <img
            src={getWeatherIcon(day.icon)}
            alt={day.description}
            className="w-12 h-12"
          />
        </div>
      </div>

      <div className="text-3xl font-bold mb-2">
        {Math.round(day.temperature)}°C
      </div>

      <div className="text-slate-600 dark:text-slate-300 capitalize mb-3">
        {day.description}
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex flex-col">
          <span className="text-slate-500 dark:text-slate-400">Humidity</span>
          <span className="font-medium">{day.humidity}%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-500 dark:text-slate-400">Wind</span>
          <span className="font-medium">{day.windSpeed} m/s</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-500 dark:text-slate-400">Pressure</span>
          <span className="font-medium">{day.pressure} hPa</span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-500 dark:text-slate-400">Direction</span>
          <span className="font-medium">{day.windDirection}°</span>
        </div>
      </div>
    </Card>
  );
};

interface WeatherForecastProps {
  forecastData: ForecastDay[];
}

const WeatherForecast = ({ forecastData }: WeatherForecastProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <CloudSun className="h-8 w-8 text-sky-500 mr-2" />
        <h1 className="text-2xl font-bold text-center">
          5-Day Weather Forecast
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
