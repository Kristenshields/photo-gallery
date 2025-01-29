import { useState } from "react";
import Gallery from "../components/Gallery";

export default function Home() {
  const [query, setQuery] = useState("nature");

  return (
    <div className="min-h-screen bg-primary-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Unsplash Photo Gallery</h1>
      <input
        type="text"
        placeholder="Search images..."
        className="p-2 border border-gray-300 rounded-lg mb-4 w-80"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Gallery searchTerm={query} />
    </div>
  );
}