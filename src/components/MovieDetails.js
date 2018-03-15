import React, {Component} from "react";

const MovieDetails = (props) => {
  return (
    <div>
      <h2>{props.movie.Title}</h2>
      <img src={props.movie.Poster}></img>
      {/* name, employer, salary range, description, link to details, id? */}
    </div>
  );
}

export default MovieDetails;
