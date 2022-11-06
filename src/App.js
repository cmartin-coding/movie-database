import { useEffect, useState } from "react";
import "./App.css";
import FetchPopularMovies from "./FetchPopularMovies";
import RandomMovieGenerator from "./Components/RandomMovieGenerator";
import TopMovies from "./Components/TopMovies";
function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    FetchPopularMovies().then(([genres, movies]) => {
      setGenres(genres);
      setPopularMovies(movies);
    });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>
        Top 10 Movies of the Day!!
      </h1>
      <RandomMovieGenerator genres={genres} />
      <TopMovies movies={popularMovies} />
    </div>
  );
}

export default App;
