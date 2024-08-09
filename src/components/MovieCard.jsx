import React from "react";
const Image_Base_Url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={Image_Base_Url + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] hover:gray-400 hover:scale-110"
      />
    </>
  );
}

export default MovieCard;
