import { useState, useEffect } from "react";
import { fetchPhotos } from "../utils/fetchPhotos";

export default function Gallery({ searchTerm }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function loadPhotos() {
      const images = await fetchPhotos(searchTerm);
      setPhotos(images);
    }
    loadPhotos();
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo) => (
        <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={photo.urls.small}
            alt={photo.alt_description}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
          />
        </div>
      ))}
    </div>
  );
}
