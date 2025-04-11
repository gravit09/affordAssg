import SearchBar from "@/components/searchBar";
import { CloudSun } from "lucide-react";
export default function Home() {
  return (
    <div className="container py-8 px-4 mx-auto flex flex-col items-center">
      <div className="flex items-center mb-8">
        <CloudSun className="h-10 w-10 text-sky-500 mr-3" />
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Weather App
        </h1>
      </div>
      <SearchBar />
    </div>
  );
}
