import React from "react";

import Movie from "../Movie/Movie";

import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={styles["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          reliaseDate={movie.reliaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
