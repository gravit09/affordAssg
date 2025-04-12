import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getWeatherIcon } from "@/utils/WeatherUtil";

interface ForecastData {
  date: string;
  temperature: number;
  condition: string;
  description: string;
}

interface ForecastCardProps {
  data: ForecastData[];
}

const ForecastCard = ({ data }: ForecastCardProps) => {
  return (
    <Card className="w-full max-w-2xl mt-4 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <h2 className="text-xl font-bold text-slate-800">5-Day Forecast</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((day, index) => {
            const WeatherIcon = getWeatherIcon(day.condition);
            return (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-gray-100 hover:bg-white/70 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <WeatherIcon className="h-8 w-8 text-slate-700" />
                  <div>
                    <p className="font-medium text-slate-800">{day.date}</p>
                    <p className="text-sm text-slate-600 capitalize">
                      {day.description}
                    </p>
                  </div>
                </div>
                <p className="text-xl font-bold text-slate-800">
                  {day.temperature}°C
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
