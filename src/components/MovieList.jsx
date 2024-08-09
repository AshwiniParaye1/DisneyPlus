import GlobalApi from "../services/GlobalApi";
import { useEffect } from "react";

function MovieList({ genreId }) {
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    console.log(genreId);
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
    });
  };

  return <div>MovieList</div>;
}

export default MovieList;
