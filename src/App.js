import { useEffect, useState } from "react";
import "./App.css";
import FetchPopularMovies from "./Components/APICalls/FetchPopularMovies";
import NewRandomMovie from "./Components/RandomMovie/NewRandomMovie";
import RandomMovie from "./Components/RandomMovie/RandomMovie";
import TopMovies from "./Components/TopMovies/TopMovies";
function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    FetchPopularMovies().then(([genres, movies]) => {
      setGenres(genres);
      setPopularMovies(movies);
    });
  }, []);

  const randomMovieHandler = (randomMovieResult) => {
    setRandomMovie(randomMovieResult);
    setModalOpen(true);
  };
  return (
    <div className="app-container">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "15px",
          color: "black",
          borderBottom: "3px solid black",
        }}
      >
        Top 10 Movies of the Day
      </h1>
      <TopMovies movies={popularMovies} />
      <NewRandomMovie
        genres={genres}
        onSetRandomMovie={randomMovieHandler}
        randomMovie={randomMovie}
      />
      {modalOpen && (
        <RandomMovie
          movie={randomMovie}
          genres={genres}
          onSetRandomMovie={randomMovieHandler}
          onSetModalOpen={setModalOpen}
        />
      )}
    </div>
  );
}

export default App;
