import React, { useState } from 'react'; // Corrected import statement
import { useQuery } from '@apollo/client';
import MovieList from '../components/MovieList';
import { QUERY_MOVIES } from '../utils/queries';
import AddMovie from '../components/AddMovie';


const Home = () => {
  const { loading, error, data } = useQuery(QUERY_MOVIES);
  const [showAddMovie, setShowAddMovie] = useState(false);

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
          <div>
      <button onClick={handleOpenAddMovie}>Add a Movie</button>
      {showAddMovie && <AddMovie onClose={handleCloseAddMovie} />}
      {/* Rest of your Home page content */}
    </div>
      <div className="flex-row justify-center movieRow">
        {/* Render movies by genre */}
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
