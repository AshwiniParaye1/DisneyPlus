import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "f6de5422c2c42314a865d48be52b38aa";

// https://api.themoviedb.org/3/trending/all/day?api_key=f6de5422c2c42314a865d48be52b38aa

const getTrendingMovies = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

export default getTrendingMovies;
