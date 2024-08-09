import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "f6de5422c2c42314a865d48be52b38aa";

const movieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=${api_key}";

// https://api.themoviedb.org/3/trending/all/day?api_key=f6de5422c2c42314a865d48be52b38aa

const getTrendingMovie = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) => {
  axios.get(movieByGenreBaseUrl + "&with_genres=" + id);
};

export default { getTrendingMovie, getMovieByGenreId };
