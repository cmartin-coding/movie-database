export default async function FetchRandomMovie(genre) {
  const API_KEY = "c186bce5df7ee4d6e173dad7e6051161";
  const response =
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=
  false&page=${Math.floor(
    Math.random() * 500
  )}&with_genres=${genre}&with_watch_monetization_types=flatrate
`);
  const genreResponse = await response.json();
  const randomMovieContainer = await genreResponse.results;
  return randomMovieContainer;
}
