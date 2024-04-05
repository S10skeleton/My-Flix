import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { QUERY_MOVIE } from '../utils/queries';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  // Extract the movieId from the URL parameter
  const { id: movieId } = useParams(); // Use "id" to match the parameter name in the route

  // Fetch movie details using the movieId
  const { loading, error, data } = useQuery(QUERY_MOVIE, {
    variables: { id: movieId }, // Provide the movieId as a variable to the query
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; // Display the GraphQL error message

  const movie = data.movie;

  return (
    <div className='details'>
      <h2>{movie.title}</h2>
      {movie.posterUrl && ( // Render the poster if available
        <img src={movie.posterUrl} alt={`Poster of ${movie.title}`} className="movie-posterD" />
      )}
      {/* Link the "Play Movie" button to the movie's streaming link */}
      <Link to={`/play/${movieId}`}>
        <button>Play Movie</button>
      </Link>
      {/* Render other movie details */}
    </div>
  );
};

export default MovieDetails;
