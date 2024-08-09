import GlobalApi from "../services/GlobalApi";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = async () => {
    const response = await GlobalApi.getMovieByGenreId(genreId);
    const genreMovieData = response.data.results;
    setMovieList(genreMovieData);
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 === 0 ? "mt-[70px]" : "mt-[150px]"
        }`}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 transition-all duration-150 ease-in cursor-pointer scroll-smooth"
      >
        {movieList.map((item, index) =>
          index_ % 3 === 0 ? (
            <HrMovieCard key={item.id} movie={item} />
          ) : (
            <MovieCard key={item.id} movie={item} index_={index} />
          )
        )}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 === 0 ? "mt-[70px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
