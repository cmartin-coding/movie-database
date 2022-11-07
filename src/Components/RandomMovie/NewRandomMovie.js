import RandomMovieGenerator from "./RandomMovieGenerator";
export default function NewRandomMovie(props) {
  const setRandomMovieHandler = (randomMovie) => {
    props.onSetRandomMovie(randomMovie);
  };
  return (
    <div>
      <RandomMovieGenerator
        genres={props.genres}
        onSetRandomMovie={setRandomMovieHandler}
      />
    </div>
  );
}
