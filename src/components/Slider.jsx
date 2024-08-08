import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Image_Base_Url = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

function Slider() {
  const [moviesList, setMoviesList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const response = await GlobalApi.getTrendingMovie;
    const movieListData = response.data.results;
    setMoviesList(movieListData);
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
      >
        {moviesList.map((item) => (
          <img
            key={item.id}
            src={Image_Base_Url + item.backdrop_path}
            alt="Trending Movies"
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
