import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";

function App() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleClick = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      if (response.ok) {
        const responseMovies = await response.json();
        const expectedMovies = responseMovies.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });

        setMovies(expectedMovies);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  return (
    <React.Fragment>
      <section>
        <button onClick={handleClick}>Fetch movies</button>
      </section>
      <section>
        {loading && <p>...Loading</p>}
        {error && !loading && <p>{error}</p>}
        {movies.length === 0 && !error && !loading && <p>No movies</p>}
        {movies.length > 0 && <MovieList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
