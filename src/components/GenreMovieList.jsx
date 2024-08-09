import GenresList from "../constant/GenresList";

function GenreMovieList() {
  return (
    <div>
      {GenresList.genre.map((item) => (
        <div key={item.id}>
          <h2 className="text-white">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
