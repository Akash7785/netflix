export const USER_AVATAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlhMjE5NTVmODFmN2IwNzYxZTgzZDY0N2I3YTg4NyIsInN1YiI6IjY0ZGI1Njk4NTllOGE5MDBmZmZkZjJlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kKE6XrPamuXseNkxjyX3W-7tzet_xmR-b6OymaLEcTo",
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const HD_IMAGE_CDN_URL = "https://image.tmdb.org/t/p/original";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "tamil", name: "Tamil" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
