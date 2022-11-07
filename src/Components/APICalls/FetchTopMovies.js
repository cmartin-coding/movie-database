const fetchMovies = async () => {
  let moviesContainer = [];
  const API_KEY = "c186bce5df7ee4d6e173dad7e6051161";
  const movieResponse =
    await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}
  `);
  const movieData = await movieResponse.json();
  const topMovieData = movieData.results;

  for (let i = 0; i < 10; i++) {
    moviesContainer.push({
      title: topMovieData[i].title,
      poster: `https://image.tmdb.org/t/p/w200${topMovieData[i].poster_path}`,
      description: topMovieData[i].overview,
      genre: topMovieData[i].genre_ids,
    });
  }
  return moviesContainer;
};
export default fetchMovies;
