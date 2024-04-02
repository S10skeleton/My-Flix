import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "../../Styles/Home.css";

const MovieList = ({ movies }) => {
  const movieListRef = useRef(null);
  const [scrollInterval, setScrollInterval] = useState(null);

  const handleMouseOverRight = () => {
    const interval = setInterval(() => {
      movieListRef.current.scrollBy({ left: 45, behavior: 'smooth' });
    }, 100); // Adjust as needed
    setScrollInterval(interval);
  };

  const handleMouseOverLeft = () => {
    const interval = setInterval(() => {
      movieListRef.current.scrollBy({ left: -45, behavior: 'smooth' });
    }, 100); // Adjust as needed
    setScrollInterval(interval);
  };

  const handleMouseOut = () => {
    clearInterval(scrollInterval);
    setScrollInterval(null);
  };

  if (!movies.length) {
    return <h3>No Movies to Display</h3>;
  }

  return (
    <div className="movie-list-wrapper">
      <div className="movie-list" ref={movieListRef}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            {movie.posterUrl && (
              <img
                src={movie.posterUrl}
                alt={`Poster of ${movie.title}`}
                className="movie-poster"
              />
            )}
            <h4>{movie.title}</h4>
            {/* Other movie details */}
          </div>
        ))}
        <div className="scroll-hover-area left" onMouseOver={handleMouseOverLeft} onMouseOut={handleMouseOut}></div>
        <div className="scroll-hover-area right" onMouseOver={handleMouseOverRight} onMouseOut={handleMouseOut}></div>
      </div>
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
      posterUrl: PropTypes.string, // Make sure this matches the property name used in the component
    })
  ).isRequired,
};

export default MovieList;
