import React from 'react';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  if (!movies.length) {
    return <h3>No Movies to Display</h3>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          {movie.poster && (
            <img 
              src={movie.poster} 
              alt={`Poster of ${movie.title}`} 
              className="movie-poster"
            />
          )}
          <h4>{movie.title}</h4>
          <p>Directed by: {movie.director}</p>
          <p>Genre: {movie.genre.join(', ')}</p>
          <p>Release Date: {movie.releaseDate}</p>
          {/* Add more movie details or a link to a detailed view */}
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.arrayOf(PropTypes.string).isRequired,
      releaseDate: PropTypes.string.isRequired,
      poster: PropTypes.string // Poster URL
    })
  ).isRequired
};

export default MovieList;
