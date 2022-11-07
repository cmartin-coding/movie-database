import ConsolidateGenres from "./ConsolidateGenres";
import fetchGenre from "./FetchGenres";
import fetchMovies from "./FetchTopMovies";
export default async function FetchPopularMovies() {
  const [genres, movies] = await Promise.all([fetchGenre(), fetchMovies()]);
  ConsolidateGenres(genres, movies);
  return [genres, movies];
}
