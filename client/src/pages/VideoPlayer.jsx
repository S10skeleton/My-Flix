import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_MOVIE } from '../utils/queries';

const VideoPlayer = () => {
  const { movieId } = useParams();
  const { loading, error, data } = useQuery(QUERY_MOVIE, {
    variables: { id: movieId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.movie) {
    return <p>No movie found</p>;
  }

  const movie = data.movie;

  // Log the streaming link
  console.log('Streaming link:', movie.streamingLink);

  // Event handlers for video element
  const handleVideoLoad = () => {
    console.log('Video metadata loaded');
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <video 
        controls
        onLoadedMetadata={handleVideoLoad}
        onError={handleVideoError}
      >
        {movie.streamingLink && (
          <source src={movie.streamingLink} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>
      <Link to={`/MovieDetails/${movieId}`}>Back to Movie Details</Link>
    </div>
  );
};

export default VideoPlayer;


