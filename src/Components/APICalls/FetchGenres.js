const fetchGenre = async () => {
  const API_KEY = "c186bce5df7ee4d6e173dad7e6051161";
  const genreResponse = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const genreData = await genreResponse.json();
  const genreContainer = genreData.genres;
  return genreContainer;
};
export default fetchGenre;
