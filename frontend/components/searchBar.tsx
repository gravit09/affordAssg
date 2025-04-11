"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your search logic here
    setIsLoading(true);
  };

  return (
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
  );
};

export default SearchBar;
