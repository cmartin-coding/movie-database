import fetchGenre from "./Components/FetchGenres";
import fetchMovies from "./Components/FetchTopMovies";
export default async function FetchPopularMovies() {
  const [genres, movies] = await Promise.all([fetchGenre(), fetchMovies()]);
  for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].genre.length; j++) {
      for (let k = 0; k < genres.length; k++) {
        if (movies[i].genre[j] === genres[k].id) {
          movies[i].genre[j] = genres[k].name;
        } else {
          continue;
        }
      }
    }
  }
  return [genres, movies];
}
