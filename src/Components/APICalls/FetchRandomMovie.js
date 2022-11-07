export default async function FetchRandomMovie(genre) {
  const API_KEY = "c186bce5df7ee4d6e173dad7e6051161";
  const response =
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=
  false&page=${Math.floor(
    Math.random() * 25
  )}&&with_watch_monetization_types=rent
`);
  const genreResponse = await response.json();
  const randomMoviesContainer = await genreResponse.results;
  const randomMovieContainer =
    randomMoviesContainer[
      Math.floor(Math.random() * randomMoviesContainer.length - 1)
    ];

  const randomMovieObject = {
    title: randomMovieContainer.title,
    poster: `https://image.tmdb.org/t/p/w200${randomMovieContainer.poster_path}`,
    description: randomMovieContainer.overview,
    genres: randomMovieContainer.genre_ids,
    stars: randomMovieContainer.vote_average,
    released: randomMovieContainer.release_date,
  };
  for (let i = 0; i < randomMovieObject.genres.length; i++) {
    for (let j = 0; j < genre.length; j++) {
      if (randomMovieObject.genres[i] === genre[j].id) {
        randomMovieObject.genres[i] = genre[j].name;
      } else {
        continue;
      }
    }
  }
  return randomMovieObject;
}
