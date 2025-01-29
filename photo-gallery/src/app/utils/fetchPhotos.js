export async function fetchPhotos(query = "nature") {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return data.results;
  }