import PropTypes from "prop-types";

import React, { useState, useEffect } from "react";

const MovieList = ({ movies }) => {
  const [posters, setPosters] = useState({});

  useEffect(() => {
    movies.forEach((movie) => {
      if (movie.poster) {
        import(`../assets/${movie.poster}`)
          .then((image) => {
            setPosters((prev) => ({ ...prev, [movie.poster]: image.default }));
          })
          .catch((error) => console.log(error));
      }
    });
  }, [movies]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          {movie.poster && (
            <img
              src={posters[movie.poster]}
              alt={`Poster of ${movie.title}`}
              className="movie-poster"
            />
          )}
          <h4>{movie.title}</h4>
          <p>Directed by: {movie.director}</p>
          <p>Genre: {movie.genre.join(", ")}</p>
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
      poster: PropTypes.string, // Poster filename
    })
  ).isRequired,
};

export default MovieList;
