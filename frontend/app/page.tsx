import SearchBar from "@/components/searchBar";
import { CloudSun } from "lucide-react";

export default function Home() {
  return (
    <div className="container py-8 px-4 mx-auto flex flex-col items-center min-h-screen">
      <div className="flex items-center mb-8">
        <CloudSun className="h-10 w-10 text-sky-500 mr-3" />
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Weather App
        </h1>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-slate-700 mb-2">
          Welcome to Weather App
        </h2>
        <p className="text-slate-600">
          Search for a city to see its current weather and forecast
        </p>
      </div>
      <SearchBar />
      <p className="mt-8 text-slate-500">Made with ❤️ By Gravit</p>
    </div>
  );
}
