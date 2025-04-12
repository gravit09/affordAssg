import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
  Wind,
} from "lucide-react";

/*function to get Images acc to weather */
export function getWeatherIcon(condition: string | undefined) {
  if (!condition) return Wind;

  switch (condition.toLowerCase()) {
    case "clear":
      return Sun;
    case "clouds":
      return Cloud;
    case "drizzle":
      return CloudDrizzle;
    case "rain":
      return CloudRain;
    case "thunderstorm":
      return CloudLightning;
    case "snow":
      return CloudSnow;
    case "mist":
    case "fog":
    case "haze":
      return CloudFog;
    default:
      return Wind;
  }
}

/*Gradient for Weather card spread from left to right */
export function getWeatherGradient(condition: string | undefined) {
  if (!condition) return "bg-gradient-to-br from-sky-400 to-sky-600";

  switch (condition.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-br from-amber-400 to-orange-500";
    case "clouds":
      return "bg-gradient-to-br from-slate-400 to-slate-600";
    case "drizzle":
    case "rain":
      return "bg-gradient-to-br from-blue-400 to-blue-600";
    case "thunderstorm":
      return "bg-gradient-to-br from-purple-500 to-purple-700";
    case "snow":
      return "bg-gradient-to-br from-slate-100 to-slate-300 text-slate-800";
    case "mist":
    case "fog":
    case "haze":
      return "bg-gradient-to-br from-gray-300 to-gray-500";
    default:
      return "bg-gradient-to-br from-sky-400 to-sky-600";
  }
}
