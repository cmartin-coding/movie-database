import classes from "./RandomMovieGenerator.module.css";
import FetchRandomMovie from "../APICalls/FetchRandomMovie";
import Card from "../UI/Card";
export default function RandomMovieGenerator(props) {
  const submitFormHandler = (ev) => {
    ev.preventDefault();
    FetchRandomMovie(props.genres).then((randomMovie) => {
      props.onSetRandomMovie(randomMovie);
    });
  };
  return (
    <Card>
      <form onSubmit={submitFormHandler} className={classes.form}>
        <h3>Watch a random movie!</h3>
        <button type="submit">Find Random Movie</button>
      </form>
    </Card>
  );
}
