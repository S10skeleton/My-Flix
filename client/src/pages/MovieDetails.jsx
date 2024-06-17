import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { QUERY_MOVIE } from "../utils/queries";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  // Extract the movieId from the URL parameter
  const { id: movieId } = useParams(); // Use "id" to match the parameter name in the route

  // Fetch movie details using the movieId
  const { loading, error, data } = useQuery(QUERY_MOVIE, {
    variables: { id: movieId }, // Provide the movieId as a variable to the query
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; // Display the GraphQL error message
  if (!data || !data.movie) return <p>No movie found</p>;

  const movie = data.movie;

  return (
    <div className="details">
      <div className="leftDetail">
      <Link to="/home" className="back-button">
          <button>Back to Home</button>
        </Link>
        <h2 className="title">{movie.title}</h2>
        {movie.posterUrl && ( // Render the poster if available
          <img
            src={movie.posterUrl}
            alt={`Poster of ${movie.title}`}
            className="movie-posterD"
          />
        )}
      </div>
      <div className="movie-info">
        <div className="playBtn">
          <a
            href={movie.streamingLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Play Movie</button>
          </a>
        </div>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        <p>
          <strong>Genre:</strong> {movie.genre.join(", ")}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.releaseDate}
        </p>
        <p>
          <strong>Duration:</strong> {movie.duration} minutes
        </p>
        <p>
          <strong>Description:</strong> {movie.description}
        </p>
        <p>
          <strong>Watch Trailer Below: <br />
          If On Mobile Use Link: </strong>
        </p>
        <div className="playBtn">
          <a
            href={movie.trailerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Play Trailer</button>
          </a>
        </div>

        <div className="trailer-player movie-trailer">
          <video controls>
            <source src={movie.trailerLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
