import React, { useState, useEffect, useCallback } from "react";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";

function App() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleClick = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/movies.json");
      if (response.ok) {
        const responseMovies = await response.json();

        const expectedMovies = [];

        for(let key in responseMovies) {
          expectedMovies.push({
            id: key,
            title: responseMovies[key].title,
            openingText: responseMovies[key].openingText,
            releaseDate: responseMovies[key].releaseDate,
          })
        }

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

  const addMovieHandler = (movie) => {
    console.log(movie);
    fetch('https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(movie)
    });
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
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
