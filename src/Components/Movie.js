import { useState } from "react";
import classes from "./Movie.module.css";
export default function Movie(props) {
  const [clicked, setClicked] = useState(false);

  let description = (
    <p style={{ backgroundColor: "transparent" }}>{props.description}</p>
  );

  return (
    <div className={classes.mainContainer}>
      <div className={classes.placeContainer}>
        <div className={classes.top}>
          <h2>{props.index + 1}.</h2>
          <h2>{props.title}</h2>
        </div>
        <div style={{ backgroundColor: "transparent" }}>
          {clicked && description}
        </div>
      </div>
      <div className={!clicked ? classes.genrePosterFormat : classes.hidden}>
        <ul>
          <h4>Genres</h4>
          {props.genre.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <img src={props.poster} alt={props.title}></img>
      </div>
      <button
        onClick={() => {
          setClicked((clicked) => !clicked);
        }}
      >
        {!clicked ? "Description" : "Poster & Genres"}
      </button>
    </div>
  );
}
