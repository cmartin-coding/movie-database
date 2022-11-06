import { useState } from "react";
import FetchRandomMovie from "./FetchRandomMovie";
export default function RandomMovieGenerator(props) {
  const [genreSelection, setGenreSelection] = useState("");
  const [randomMovie, setRandomMovie] = useState([]);
  const selectionHandler = (ev) => {
    setGenreSelection(ev.target.value);
  };
  const submitFormHandler = (ev) => {
    ev.preventDefault();
    FetchRandomMovie(genreSelection).then((movies) =>
      setRandomMovie(movies[Math.floor(Math.random() * movies.length - 1)])
    );
    console.log(randomMovie);
    setGenreSelection("Any");
  };
  return (
    <form onSubmit={submitFormHandler}>
      <h5>
        Put in the genre of movie you would like and receive a random movie
        suggestion!
      </h5>
      <label htmlFor="random-movie">Which genre?</label>
      <select
        id="random-movie"
        name="random-movie"
        onChange={selectionHandler}
        value={genreSelection}
      >
        <option value="genre">Any</option>
        {props.genres.map((genre, index) => (
          <option value={genre.name} key={index}>
            {genre.name}
          </option>
        ))}
      </select>
      <button type="submit">Get Random Movie</button>
    </form>
  );
}
