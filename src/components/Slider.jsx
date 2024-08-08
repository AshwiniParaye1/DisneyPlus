import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";

function Slider() {
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const response = await GlobalApi.getTrendingMovie;
    console.log(response.data.results);
  };

  return <div>Slider</div>;
}

export default Slider;
