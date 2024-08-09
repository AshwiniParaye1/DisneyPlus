import React from "react";
const Image_Base_Url = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <section className=" hover:gray-400 hover:scale-110">
      <img
        src={Image_Base_Url + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] hover:gray-400 hover:scale-110"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 ">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
