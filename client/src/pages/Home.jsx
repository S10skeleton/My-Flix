import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_MOVIES, QUERY_RANDOM_MOVIE } from '../utils/queries';
import MovieList from '../components/MovieList';
import AddMovie from '../components/AddMovie';
import '../Styles/Home.css'

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(QUERY_MOVIES);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [getRandomMovie, { data: randomMovieData }] = useLazyQuery(QUERY_RANDOM_MOVIE); // Initialize the lazy query

  const handleRandomMovie = async () => {
    getRandomMovie(); // Execute the lazy query
  };

  // If random movie data is received, navigate to its detail page
  if (randomMovieData && randomMovieData.randomMovie) {
    navigate(`/MovieDetails/${randomMovieData.randomMovie.id}`);
  }

  const handleOpenAddMovie = () => setShowAddMovie(true);
  const handleCloseAddMovie = () => setShowAddMovie(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allMovies = data.movies;

  // Group all movies by genre
  const moviesByGenre = {};
  allMovies.forEach(movie => {
    movie.genre.forEach(genre => {
      if (!moviesByGenre[genre]) {
        moviesByGenre[genre] = [];
      }
      moviesByGenre[genre].push(movie);
    });
  });

  return (
    <main>
     <div className="home-top-buttons">
        <button onClick={handleOpenAddMovie}className="home-button">Add a Movie</button>
        {showAddMovie && <AddMovie onClose={handleCloseAddMovie} />}
        <button onClick={handleRandomMovie}className="home-button">Random Movie</button>
      </div>
      <div className="flex-row justify-center movieRow">
        {Object.entries(moviesByGenre).map(([genre, movies]) => (
          <div className="movie-row" key={genre}>
            <h2>{genre}</h2>
            <MovieList movies={movies} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
