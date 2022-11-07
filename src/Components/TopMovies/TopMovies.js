import Movie from "./Movie";
import classes from "./TopMovie.module.css";
export default function TopMovies(props) {
  return (
    <div className={classes.container}>
      <div className={classes.movieListContainer}>
        {props.movies.map((movie, index) => (
          <Movie
            title={movie.title}
            description={movie.description}
            poster={movie.poster}
            genre={movie.genre}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
