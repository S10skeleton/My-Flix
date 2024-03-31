import { useQuery } from '@apollo/client';

import MovieList from '../components/MovieList';
import { QUERY_MOVIES } from '../utils/queries';

const Home = () => {
  // Replace QUERY_THOUGHTS with a relevant GraphQL query for fetching movies
  const { loading, data } = useQuery(QUERY_MOVIES);
  const movies = data?.movies || [];

  return (
    <main>
      <div className="flex-row justify-center">
        {/* Displaying a list of favorite movies */}
        {/* Assume QUERY_FAVORITE_MOVIES is a query you've defined */}
        <div className="movie-row">
          <h2>Your Favorites</h2>
          <MovieList movies={movies.filter(movie => movie.isFavorite)} />
        </div>

        {/* Example of movies categorized by genre */}
        {/* This assumes you have genres available in your movie data */}
        {['Comedy', 'Action', 'Drama'].map(genre => (
          <div className="movie-row" key={genre}>
            <h2>{genre}</h2>
            <MovieList movies={movies.filter(movie => movie.genre.includes(genre))} />
          </div>
        ))}

        {/* Loading state */}
        {loading && <div>Loading...</div>}
      </div>
    </main>
  );
};

export default Home;
