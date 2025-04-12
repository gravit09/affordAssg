"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./forecastCard";

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  description: string;
  condition: string;
  timestamp: number;
}

interface ForecastData {
  date: string;
  temperature: number;
  condition: string;
  description: string;
}

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const current = await axios.post(
        `http://localhost:4000/getCurrentWeather/${city}`
      );
      const fiveDays = await axios.post(
        `http://localhost:4000/getFiveDaysWeather/${city}`
      );

      setCurrentWeather(current.data.data);
      setForecast(fiveDays.data.forecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          Search
        </Button>
      </form>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {currentWeather && <WeatherCard data={currentWeather} />}
      {forecast.length > 0 && <ForecastCard data={forecast} />}
    </div>
  );
};

export default SearchBar;
