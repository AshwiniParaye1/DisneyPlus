import GlobalApi from "../services/GlobalApi";
import { useEffect } from "react";

function MovieList({ genreId }) {
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = async () => {
    const response = await GlobalApi.getMovieByGenreId(genreId);
    console.log(response.data.results);
  };

  return <div>MovieList</div>;
}

export default MovieList;
