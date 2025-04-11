import WeatherForecast from "@/components/ForCastCard";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/searchBar";
import { Card } from "@/components/ui/card";
import { CloudSun } from "lucide-react";
export default function Home() {
  const data = {
    city: "Delhi",
    country: "IN",
    temperature: 30.13,
    humidity: 36,
    condition: "Clouds",
    feelsLike: 29.4,
    description: "broken clouds",
    icon: "04n",
    windSpeed: 4.55,
    windDirection: 89,
    visibility: 10000,
    timestamp: 1744402740,
    pressure: 1003,
  };

  const forecastData = [
    {
      date: "4/12/2025",
      temperature: 22.43,
      humidity: 49,
      condition: "Rain",
      description: "light rain",
      icon: "10n",
      windSpeed: 3.64,
      windDirection: 24,
      pressure: 1005,
    },
    {
      date: "4/13/2025",
      temperature: 20.82,
      humidity: 57,
      condition: "Clouds",
      description: "few clouds",
      icon: "02n",
      windSpeed: 1.47,
      windDirection: 37,
      pressure: 1008,
    },
    {
      date: "4/14/2025",
      temperature: 23.14,
      humidity: 43,
      condition: "Clear",
      description: "clear sky",
      icon: "01n",
      windSpeed: 2.89,
      windDirection: 67,
      pressure: 1005,
    },
    {
      date: "4/15/2025",
      temperature: 25.57,
      humidity: 30,
      condition: "Clear",
      description: "clear sky",
      icon: "01n",
      windSpeed: 2.89,
      windDirection: 90,
      pressure: 1006,
    },
    {
      date: "4/16/2025",
      temperature: 26.32,
      humidity: 37,
      condition: "Clouds",
      description: "scattered clouds",
      icon: "03n",
      windSpeed: 2.47,
      windDirection: 79,
      pressure: 1006,
    },
  ];

  return (
    <div className="container py-8 px-4 mx-auto flex flex-col items-center">
      <div className="flex items-center mb-8">
        <CloudSun className="h-10 w-10 text-sky-500 mr-3" />
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Weather App
        </h1>
      </div>
      <SearchBar />
      <div className="mt-7">
        <WeatherCard data={data} />
        <WeatherForecast forecastData={forecastData} />
      </div>
      <p>Made with ❤️ By Gravit</p>
    </div>
  );
}
