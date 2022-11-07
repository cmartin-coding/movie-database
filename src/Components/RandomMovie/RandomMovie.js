import React from "react";
import Card from "../UI/Card";
import FetchRandomMovie from "../APICalls/FetchRandomMovie";
import classes from "./RandomMovie.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const RandomMovieModalOverlay = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.container}>
        <h2 style={{ textAlign: "center" }}>{props.movie.title}</h2>
        <div className={classes.mainFormat}>
          <div className={classes.secondaryFormat}>
            <ul>
              <h4>Genres</h4>
              {props.movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <h4>Information</h4>
            <p>
              <strong>Rating:</strong> {props.movie.stars}⭐
            </p>
            <p>
              <strong>Released: </strong> {props.movie.released}
            </p>
          </div>
          <img
            className={classes.image}
            src={props.movie.poster}
            alt={props.title}
          ></img>
        </div>
        <p>{props.movie.description}</p>
        <button
          onClick={props.onSetRandomMovie}
          style={{
            position: "relative",
            bottom: "0",
            width: "100%",
            fontSize: "large",
            fontWeight: "bold",
            border: "2px solid black",
            borderRadius: "10px",
            background: "skyblue",
          }}
        >
          Find new movie
        </button>
      </Card>
    </div>
  );
};
export default function RandomMovie(props) {
  const randomMovieHandler = () => {
    FetchRandomMovie(props.genres).then((randomMovie) => {
      props.onSetRandomMovie(randomMovie);
    });
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={() => props.onSetModalOpen(false)} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <RandomMovieModalOverlay
          onSetRandomMovie={randomMovieHandler}
          movie={props.movie}
          genres={props.genres}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
