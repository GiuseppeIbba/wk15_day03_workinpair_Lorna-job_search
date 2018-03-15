import React, {Component} from "react";
import MovieDetails from "./MovieDetails"

const MoviesList = (props) => {

  const listOfMovieObjects = props.movies;

  const listOfMovieDetailsElements = listOfMovieObjects.map((movie, index) => {
    return (
      <MovieDetails movie={movie} key={index} />
    )
  });

  return (
    listOfMovieDetailsElements
    // eventually this will be an html collection generated from all the jobs
  );
}

export default MoviesList;
