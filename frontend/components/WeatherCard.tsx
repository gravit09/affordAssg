import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getWeatherIcon, getWeatherGradient } from "@/utils/WeatherUtil";

interface WeatherCardProps {
  data: {
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
  };
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  const date = new Date(data.timestamp * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const WeatherIcon = getWeatherIcon(data.condition);
  const gradient = getWeatherGradient(data.condition);

  return (
    <Card
      className={`w-full max-w-2xl overflow-hidden ${gradient} text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
    >
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-2xl font-bold">{data.city}</h2>
            <p className="text-sm opacity-90">{data.country}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">{formattedDate}</p>
            <p className="text-sm opacity-90">{formattedTime}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <WeatherIcon className="h-16 w-16" />
            <div>
              <p className="text-lg capitalize">{data.description}</p>
              <p className="text-sm opacity-90">
                Feels like {data.feelsLike}°C
              </p>
            </div>
          </div>
          <div className="text-5xl font-bold">{data.temperature}°C</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="flex flex-col p-3 bg-white/10 rounded-lg">
            <span className="opacity-80">Humidity</span>
            <span className="font-medium">{data.humidity}%</span>
          </div>
          <div className="flex flex-col p-3 bg-white/10 rounded-lg">
            <span className="opacity-80">Wind Speed</span>
            <span className="font-medium">{data.windSpeed} m/s</span>
          </div>
          <div className="flex flex-col p-3 bg-white/10 rounded-lg">
            <span className="opacity-80">Pressure</span>
            <span className="font-medium">{data.pressure} hPa</span>
          </div>
          <div className="flex flex-col p-3 bg-white/10 rounded-lg">
            <span className="opacity-80">Weather</span>
            <span className="font-medium capitalize">{data.condition}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
